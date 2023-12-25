import React from "react";
import Computer from "../assets/computer.png";
import Button from "./Button";

const Experts = () => {
  return (
    <div className=" max-w-[1240px] mx-auto flex gap-[100px] px-[20px] flex-col md:flex-row mb-[50px] md:mb-[200px]">
      <div className="mx-auto">
        <img src={Computer} alt="computer" className="max-w-[500px] w-full" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <p className="text-[#00df9a] mb-[15px] font-bold">LEARN FROM EXPERTS</p>
        <p className="text-white mb-[25px] max-w-[500px] text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <Button title="Get Started" />
      </div>
    </div>
  );
};

export default Experts;
