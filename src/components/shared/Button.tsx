import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
     className="bg-teal-900 text text-white py-4 px-6 rounded-full font-semibold shadow-lg hover:scale-105 duration-300">
      {text}
    </button>
  );
};

export default Button;
