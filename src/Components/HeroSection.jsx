import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] mt-[80px] md:mt-[100px] mx-auto">
      <div className="h-full max-w-[1240px] mx-auto text-center font-bold flex flex-col justify-center items-center ">
        <p className="text-2xl md:text-[25px] mb-[20px] text-[#00df98]">
          Learn With Us
        </p>
        <h1 className="text-[40px] md:text-[80px] text-white leading-none mb-[20px]">
          Grow With Us.
        </h1>
        <p className="text-[25px] md:text-[30px] text-white mb-[30px]">
          Learn{" "}
          <TypeAnimation
            sequence={["ReactJs", 1000, "Tailwind", 1000, "Ant Design", 1000]}
            wrapper="span"
            speed={20}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <Button title="Get Started" />
      </div>
    </div>
  );
};

export default HeroSection;
