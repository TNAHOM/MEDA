"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface Result {
  type: string | null;
  count: number;
  message?: string;
}

interface FormData {
  name?: string;
  phone?: string;
  tournament: string;
}

interface TournamentType {
  id: string;
  name: string;
}

const SearchRegistrations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const [results, setResults] = useState<Result[]>([]);

  const [tournaments, setTournaments] = useState<TournamentType[]>([]);

  useEffect(() => {
    fetch("/api/tournament")
      .then((res) => res.json())
      .then((data) => setTournaments(data))
      .catch((err) => console.error(err));
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!data.name && !data.phone) {
      setError("name", { message: "Either name or phone is required" });
      setError("phone", { message: "Either name or phone is required" });
      return;
    }

    if (!data.tournament) {
      setError("tournament", { message: "Tournament is required" });
      return;
    }

    try {
      const params = new URLSearchParams();
      if (data.name) params.append("name", data.name);
      if (data.phone) params.append("phone", data.phone);
      params.append("tournament", data.tournament);

      const [teamRes, soloRes] = await Promise.all([
        fetch(`/api/register/team?${params}`).then((r) => r.json()),
        fetch(`/api/register/solo?${params}`).then((r) => r.json()),
      ]);

      const resultsData: Result[] = [];
      if (teamRes.exists)
        resultsData.push({ type: "Team", count: teamRes.count });
      if (soloRes.exists)
        resultsData.push({ type: "Solo", count: soloRes.count });

      setResults(
        resultsData.length > 0
          ? resultsData
          : [{ message: "User not found", count: 0, type: null }]
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <input
            placeholder="Name"
            className="w-full p-2 border rounded"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <input
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <select
            className="w-full p-2 border rounded"
            {...register("tournament", { required: "Tournament is required" })}
          >
            <option value="">Select Tournament</option>
            {tournaments.map((t: TournamentType) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
          {errors.tournament && (
            <p className="text-red-500 text-sm">{errors.tournament.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <ul className="space-y-2">
        {results.map((item, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            {item.type ? `User exists as ${item.type}` : item.message}
            {item.count > 0 && ` - Registered ${item.count} time(s)`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRegistrations;
