import { useRouter } from "next/navigation";
import React from "react";

interface ModalProps {
  message: string;
  description: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
}

const Modal = ({ message, description, setModal, success }: ModalProps) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-semibold mb-4">
          {success ? message : "Error has occured"}
        </h2>
        <p className="mb-6">
          {success
            ? description
            : "Please ensure the data is correct and try again later."}
        </p>
        <button
          onClick={() => {
            setModal(false);
            router.push("/");
          }}
          className={`px-4 py-2 text-white rounded ${success ? 'bg-lightGreen' : 'bg-red-500'}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
