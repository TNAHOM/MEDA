"use client";
import React from "react";
import Register from "../../../../components/auth/Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../../../types/FormData";

const SoloRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch("/api/register/solo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response;
    console.dir(result, "registration - result");
  };
  return (
    <div className="my-4 mx-4 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Register
          first="First name"
          last="Last name"
          register={register}
          errors={errors}
        />
        <div className="flex justify-end">
          <p className="font-semibold text-xl text-[#374151]">Price: 500 Br.</p>
        </div>
        <input
          type="submit"
          className="bg-lightGreen w-full py-4 flex justify-center text-white font-semibold text-base rounded-xl"
          value="Proceed to payment"
        />
      </form>
    </div>
  );
};

export default SoloRegistration;
