import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-[20px] flex flex-col md:flex-row justify-between gap-[10px] mb-[100px] sm:mb-[200px]">
      <div>
        <h2 className="text-3xl text-center md:text-left font-bold text-[#00df9a] mb-[10px]">
          Want to learn latest I.T skills?
        </h2>
        <p className="text-white text-[16px] text-center md:text-left mb-[20px] md:mb-0">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center gap-[10px] mb-[20px]">
          <input
            type="email"
            placeholder="Enter Email"
            className="px-3 py-[10px] max-w-[300px] md:min-w-[210px] w-full rounded-[10px] mb-[10px] md:mb-0"
          />
          <Button title="Notify Me" className="max-w-[130px]" />
        </div>
        <p className="text-white text-[16px] text-center md:text-left">
          We care bout the protection of your data. Read our <br />
          <Link to="/" className="text-[#00df9a]">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
