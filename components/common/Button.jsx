import Image from "next/image";
import React from "react";

const Button = ({ title, className, icon }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#D20653] to-[#FF951D]  py-2 px-4 text-white rounded-lg text-sm ${className}`}
    >
      {icon && (
        <Image className="block m-auto" src={icon} width={18} height={18} />
      )}
      {title}
    </button>
  );
};

export default Button;
