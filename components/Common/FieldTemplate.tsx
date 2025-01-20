import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../types/FormData";

interface FieldTemplateProps {
  label: string;
  id: keyof FormData;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  error: string | undefined;
}

export const FieldTemplate = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: FieldTemplateProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="font-normal text-base text-[#374151]">
        {label}:
      </label>
      <input
        {...register(id, { required: `${label} is required` })}
        id={id}
        type={type}
        className="w-full border-[0.5px] border-shade text-shade bg-white p-3 rounded-md"
        placeholder={placeholder}
      />
      <p className="text-red-500 text-xs font-medium">{error}</p>
    </div>
  );
};
