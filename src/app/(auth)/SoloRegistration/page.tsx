"use client";
import React, { useState } from "react";
import Register from "../../../../components/auth/Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../../../types/FormData";
import Modal from "../../../../components/Common/Modal";

const SoloRegistration = () => {
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/register/solo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status == 200) {
        const result = await response.json();
        console.log("Registration successful:", result);
        setModal(true);
      } else {
        const error = await response.json();
        console.error("Registration failed:", error);
        setSuccess(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSuccess(false);
    }
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

      {modal && (
        <Modal
          message="Successfully Registered"
          description="Your successfully registered for the tournament."
          setModal={setModal}
          success={success}
        />
      )}
    </div>
  );
};

export default SoloRegistration;
