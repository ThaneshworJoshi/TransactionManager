import { TextFieldProps } from "./TextField.type";

export const TextField = ({ icon, type, placeholder, value, onChange }: TextFieldProps) => {
  return (
    <div className="flex items-center border rounded p-2 bg-[#F3F1FF]">
      {icon && <div className="mr-2 text-gray-600">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-grow focus:outline-none bg-[#F3F1FF] sm:text-sm w-full rounded-md py-1 pl-3 pr-3"
      />
    </div>
  )
};

export default TextField;
