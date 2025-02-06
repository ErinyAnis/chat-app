/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
const Input = ({ type, placeholder, required, className, onChange, value, name, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      name={name}
      className={twMerge(
        "py-2 px-2.5 border border-[#714747] rounded-md outline-[#011223] text-sm lg:text-base",
        className
      )}
      {...props}
    />
  );
};

export default Input;
