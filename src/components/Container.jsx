/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
const Container = ({ children, className }) => {
  return (
    <div
      className={twMerge("mx-auto p-5", className)}
    >
      {children}
    </div>
  );
};

export default Container;
