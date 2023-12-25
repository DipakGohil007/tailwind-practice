import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-full max-w-[200px] py-[10px] px-[20px] bg-slate-900 text-white rounded-[10px] cursor-pointer hover:bg-slate-800 duration-200">
      {title}
    </button>
  );
};

export default Button;
