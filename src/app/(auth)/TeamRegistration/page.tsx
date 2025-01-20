"use client";
import Player from "../../../../components/auth/Player";
import Register from "../../../../components/auth/Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../../../types/FormData";
import { FieldTemplate } from "../../../../components/Common/FieldTemplate";

const TeamRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
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
  );
};

export default TeamRegistration;
