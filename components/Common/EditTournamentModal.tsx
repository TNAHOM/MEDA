"use client";
import React, { useState } from "react";
import { FormData } from "../../types/FormData";
import { FieldTemplate } from "../Common/FieldTemplate";
import { useRouter } from "next/navigation";

interface EditTournamentModalProps {
  tournament: FormData;
  onClose: () => void;
}

const EditTournamentModal = ({
  tournament,
  onClose,
}: EditTournamentModalProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: tournament.name,
    location: tournament.location,
    locationLink: tournament.locationLink,
    Date: new Date(tournament.Date).toISOString().split("T")[0],
    ClosingDate: tournament.ClosingDate
      ? new Date(tournament.ClosingDate).toISOString().split("T")[0]
      : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/tournament/${tournament.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onClose();
        router.push("/Dashboard");
      } else {
        console.error("Failed to update tournament");
      }
    } catch (error) {
      console.error("Error updating tournament:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Tournament</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FieldTemplate
            label="Name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <FieldTemplate
            label="Location"
            id="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
          />
          <FieldTemplate
            label="Location Link"
            id="locationLink"
            type="text"
            value={formData.locationLink}
            onChange={handleChange}
          />
          <FieldTemplate
            label="Date"
            id="Date"
            type="date"
            value={formData.Date}
            onChange={handleChange}
          />
          <FieldTemplate
            label="Closing Date"
            id="ClosingDate"
            type="date"
            value={formData.ClosingDate}
            onChange={handleChange}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTournamentModal;
