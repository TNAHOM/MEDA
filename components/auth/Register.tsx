import React, { useEffect, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import RegisterChoose from "../Common/RegisterChoose";
import { FormData, TournamentType } from "../../types/FormData";
import { FieldTemplate } from "../Common/FieldTemplate";

interface RegisterProps {
  first: string;
  last: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Register = ({ first, last, register, errors }: RegisterProps) => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch("/api/tournament");
        const data = await response.json();
        console.log("data", data);
        setTournaments(data);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="font-bold text-2xl">Join Tornament</h2>
      <p className="text-base font-normal text-shade">
        Fill in the form to join the tornament
      </p>
      <RegisterChoose />

      <div className="space-y-2">
        <FieldTemplate
          label={first}
          id="Fname"
          type="text"
          placeholder={`Enter ${first}`}
          register={register}
          error={errors.Fname?.message}
        />
        <FieldTemplate
          label={last}
          id="Lname"
          type="text"
          placeholder={`Enter ${last}`}
          register={register}
          error={errors.Lname?.message}
        />

        <FieldTemplate
          label="Phone Number"
          id="Pnumber"
          type="number"
          placeholder="Enter Phone Number"
          register={register}
          error={errors.Pnumber?.message}
        />

        <label htmlFor="tornament">Choose a tornament:</label>

        <select
          id="tornament"
          className="w-full border-[0.5px] border-shade text-shade bg-white p-3 rounded-md"
          {...register("tornament", {
            validate: (value) => value !== "0" || "Please choose a tournament",
          })}
        >
          <option value="0">Select value</option>
          {tournaments.map((tournament: TournamentType) => (
            <option key={tournament.id} value={tournament.id}>
              {tournament.name} -----{" "}
              {new Date(tournament.Date).toLocaleDateString()}
            </option>
          ))}
        </select>
        {errors.tornament && (
          <p className="text-red-500 text-sm">{errors.tornament.message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
