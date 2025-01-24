"use client";
import React from "react";
import { FieldTemplate } from "../Common/FieldTemplate";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../types/FormData";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTournament = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/tournament", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Registration successful:", result);
        setIsOpen(true);
      } else {
        const error = await response.json();
        console.error("Registration failed:", error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-xl">CreateTournament</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <FieldTemplate
            label="Tournament name"
            id="name"
            type="text"
            placeholder="Enter Tournament name"
            register={register}
            error={errors.name?.message}
          />
          <FieldTemplate
            label="Location"
            id="location"
            type="text"
            placeholder="Enter location name"
            register={register}
            error={errors.location?.message}
          />
          <FieldTemplate
            label="Location Link"
            id="locationLink"
            type="text"
            placeholder="Enter location Link"
            register={register}
            error={errors.locationLink?.message}
          />
          <FieldTemplate
            label="Date"
            id="date"
            type="date"
            placeholder="Enter Date"
            register={register}
            error={errors.date?.message}
          />
          <input
            type="submit"
            className="bg-lightGreen w-full py-4 flex justify-center text-white font-semibold text-base rounded-xl"
            value="Create Tournament"
          />
        </div>
      </form>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Tournament Created</h2>
            <p className="mb-6">
              Your tournament has been successfully created.
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/Dashboard");
              }}
              className="bg-lightGreen px-4 py-2 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTournament;
