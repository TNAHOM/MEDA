"use client";
import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { FormData } from "../../types/FormData";
import EditTournamentModal from "../Common/EditTournamentModal"; // Import the modal component

interface UpcomingTornamentProps {
  isOpen?: boolean;
  isAdmin?: boolean; // Add isAdmin prop
}

const UpcomingTornament = ({ isOpen, isAdmin }: UpcomingTornamentProps) => {
  const [tournaments, setTournaments] = useState<FormData[]>([]);
  const [selectedTournament, setSelectedTournament] = useState<FormData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch("/api/tournament");
        const data = await response.json();
        setTournaments(isAdmin ? data : data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };
    fetchTournaments();
  }, [isOpen, isAdmin]);

  const handleEditClick = (tournament: FormData) => {
    setSelectedTournament(tournament);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <h2 className="font-bold text-base">Upcoming Tournaments</h2>
      <div className="space-y-2">
        {tournaments.map((tournament) => {
          const isRegistrationOpen =
            new Date(tournament.ClosingDate) > new Date();
          return (
            <div
              key={tournament.id}
              className="w-full px-4 py-5 flex justify-between bg-white"
            >
              <div className="space-y-2">
                <p className="font-bold text-base">{tournament.name}</p>
                <p className="text-[#4B5563] text-sm font-normal">
                  Starting {new Date(tournament.Date).toLocaleDateString()} -
                  Closing{" "}
                  {new Date(tournament.ClosingDate).toLocaleDateString()}
                </p>
                <div className="flex gap-2 text-[#4B5563] text-sm font-normal">
                  <MapPinIcon width={20} height={24} />
                  <p>{tournament.location}</p>
                </div>
              </div>
              <div className="">
                <p
                  className={`font-medium text-sm ${
                    isRegistrationOpen ? "text-lightGreen" : "text-red-500"
                  }`}
                >
                  {isRegistrationOpen
                    ? "Registration Open"
                    : "Registration Closed"}
                </p>
                {isAdmin && (
                  <button
                    className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() => handleEditClick(tournament)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && selectedTournament && (
        <EditTournamentModal
          tournament={selectedTournament}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UpcomingTornament;
