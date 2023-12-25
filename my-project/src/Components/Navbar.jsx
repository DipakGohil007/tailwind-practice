import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up the style when the component unmounts or when 'toggle' changes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  return (
    <div className="fixed top-0 left-0 h-[80px] bg-[#000300] md:h-[100px] w-screen flex justify-between items-center text-white py-3 px-[40px] z-50">
      <Link className="text-3xl text-[#00df98] font-bold cursor-pointer">
        Tailwind
      </Link>
      {toggle ? (
        <IoClose
          className="text-3xl block md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <IoMenu
          className="text-3xl block md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      )}

      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul>

      {/* Responsive Navbar */}
      <ul
        className={`md:hidden fixed h-full w-full bg-slate-900 p-5 top-[80px] text-2xl duration-300
      ${toggle ? "left-[0] overflow-hidden" : "left-[-100%]"}
      `}
      >
        <li className="p-5">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5">
          <Link to="/">About</Link>
        </li>
        <li className="p-5">
          <Link to="/">Contact</Link>
        </li>
        <li className="p-5">
          <Link to="/">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
