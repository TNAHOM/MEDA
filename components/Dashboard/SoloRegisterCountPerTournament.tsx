
"use client";
import React, { useEffect, useState } from "react";

interface TournamentCount {
    id: string;
    name: string;
    _count: {
        registerSolo: number;
    };
}

const SoloRegisterCountPerTournament = () => {
    const [tournamentCounts, setTournamentCounts] = useState<TournamentCount[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await fetch("/api/soloRegister/countPerTournament");
                if (response.ok) {
                    const data: TournamentCount[] = await response.json();
                    setTournamentCounts(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || "Failed to fetch counts.");
                }
            } catch {
                setError("An error occurred while fetching.");
            }
        };

        fetchCounts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Solo Registrations per Tournament</h2>
            <ul>
                {tournamentCounts.map((tournament) => (
                    <li key={tournament.id}>
                        {tournament.name}: {tournament._count.registerSolo} Solo Registrations
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SoloRegisterCountPerTournament;