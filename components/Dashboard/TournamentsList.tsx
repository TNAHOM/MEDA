"use client";
import React, { useEffect, useState } from "react";
// import { getAllTournaments } from "@/lib/query";
import { TournamentType } from "../../types/FormData";


interface TournamentListProps {
  isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TournamentsList = ({ isOpen }: TournamentListProps) => {
  const [tournaments, setTournaments] = useState<TournamentType[]>([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch("/api/tournament");
        const data: TournamentType[] = await response.json();
        setTournaments(data);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, [isOpen]);
  console.log("Tournaments:", tournaments);
  return (
    <div className="">
      <h1 className="font-bold text-xl">Tournaments</h1>
      {tournaments.map((tournaments: TournamentType) => (
        <div
          key={tournaments.id}
          className="flex justify-between border-b-2 border-gray-200 py-4"
        >
          <div>
            <h1 className="font-semibold text-lg">{tournaments.name}</h1>
            <p className="text-sm">{tournaments.location}</p>
          </div>
          <div>
            <p className="text-sm">
              {new Date(tournaments.Date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TournamentsList;
