"use client";
import React from "react";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../types/FormData";

interface PlayerProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Player = ({ register, errors } : PlayerProps) => {
  const [price, setPrice] = useState(500);
  const [numPlayers, setnumPlayers] = useState(0);

  const hangleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setnumPlayers(num);
    setPrice(num * 500);
  };
  return (
    <div className="">
      <div className="space-y-2">
        <label
          htmlFor="PlayerNum"
          className="font-normal text-base text-[#374151]"
        >
          Number of players:
        </label>
        <input
          {...register("PlayerNum", {
            required: "Number of players is required",
            validate: (value) =>
              parseInt(value) >= 1 || "Number must be greater than 1",
          })}
          id="PlayerNum"
          type="number"
          className="w-full border-[0.5px] border-shade text-shade bg-white p-3 rounded-md"
          placeholder="Enter Your Phone Number"
          value={numPlayers}
          onChange={hangleInputChange}
        />
        <p className="text-red-500 text-xs font-medium">
          {errors.PlayerNum?.message}
        </p>
      </div>

      <div className="flex justify-end">
        <p className="font-semibold text-xl text-[#374151]">
          Price: {price} Br.
        </p>
      </div>
    </div>
  );
};

export default Player;
