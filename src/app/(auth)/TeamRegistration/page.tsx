"use client";
import Player from "../../../../components/auth/Player";
import Register from "../../../../components/auth/Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../../../types/FormData";
import { FieldTemplate } from "../../../../components/Common/FieldTemplate";
import { useState } from "react";
import Modal from "../../../../components/Common/Modal";

const TeamRegistration = () => {
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/register/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(data, 'data');
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

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 mx-4 space-y-4">
          <Register
            first="Captain first name"
            last="Captain last name"
            register={register}
            errors={errors}
          />

          <FieldTemplate
            label="TeamName"
            id="TeamName"
            type="text"
            placeholder="Enter Your Team Name"
            register={register}
            error={errors.TeamName?.message}
          />

          <Player register={register} errors={errors} />
          <input
            type="submit"
            className="bg-lightGreen w-full py-4 flex justify-center text-white font-semibold text-base rounded-xl"
            value="Proceed to payment"
          />
        </div>
      </form>

      {modal && (
        <Modal
          message="Successfully Registered Your Team"
          description="Your team have successfully registered for the tournament."
          setModal={setModal}
          success={success}
        />
      )}
    </div>
  );
};

export default TeamRegistration;
