import React from "react";
import { UserIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const RegisterChoose = () => {
  return (
    <div className="w-full flex gap-4">
      <Link
        href="/SoloRegistration"
        className="flex flex-col items-center bg-white py-4 space-y-1 w-full rounded-2xl"
      >
        <UserIcon className="bg-white text-lightGreen w-6 h-5" />
        <p className="font-medium text-sm">Solo Register</p>
      </Link>

      <Link
        href="/TeamRegistration"
        className="flex flex-col items-center bg-white py-4 space-y-1 w-full rounded-2xl"
      >
        <UserGroupIcon className="bg-white text-lightGreen w-6 h-5" />
        <p className="font-medium text-sm">Team Register</p>
      </Link>
    </div>
  );
};

export default RegisterChoose;
