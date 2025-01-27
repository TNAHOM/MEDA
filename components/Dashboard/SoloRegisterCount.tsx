
"use client";
import React, { useEffect, useState } from "react";

const SoloRegisterCount = () => {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch("/api/soloRegister/count");
                if (response.ok) {
                    const data = await response.json();
                    setCount(data.count);
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || "Failed to fetch count.");
                }
            } catch {
                setError("An error occurred while fetching.");
            }
        };

        fetchCount();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {count !== null ? (
                <p>Number of Solo Registrations: {count}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SoloRegisterCount;