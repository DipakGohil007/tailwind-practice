import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Button from "./Button";

const CardData = [
  {
    logo: Single,
    title: "Web development",
    price: "$149",
    l1: "Lorem Ipsum is simply",
    l2: "Lorem Ipsum is simply dummy text of the printing",
    l3: "Lorem Ipsum is simply dumm.",
  },
  {
    logo: Double,
    title: "Web development",
    price: "$150",
    l1: "Lorem Ipsum is simply",
    l2: "Lorem Ipsum is simply dummy text of the printing",
    l3: "Lorem Ipsum is simply dumm.",
  },
  {
    logo: Triple,
    title: "Web development",
    price: "$149",
    l1: "Lorem Ipsum is simply",
    l2: "Lorem Ipsum is simply dummy text of the printing",
    l3: "Lorem Ipsum is simply dumm.",
  },
];

const Cards = () => {
  return (
    <div className="relative max-w-[1240px] px-[20px] mx-auto flex flex-col sm:flex-row items-center  gap-[100px] sm:gap-[20px] justify-between mb-[80px] md:mb-[200px]">
      {CardData.map((card, index) => (
        <div
          key={index}
          className="relative w-full md:w-auto flex flex-col items-center py-[40px] px-[30px] rounded-[10px] bg-white hover:scale-105 duration-300"
        >
          <img
            src={card.logo}
            alt="single"
            className="absolute top-[-35px] sm:top-[-65px] left-1/2 h-[60px] sm:h-[100px] -translate-x-1/2"
          />
          <h3 className="text-[26px] text-black text-center font-bold mb-[25px]">
            {card.title}
          </h3>
          <p className="text-[36px] font-bold mb-[30px]">{card.price}</p>
          <p className="max-w-[280px] w-full text-center pb-[10px] border-b">
            {card.l1}
          </p>
          <p className="max-w-[280px] w-full text-center pb-[10px] border-b">
            {card.l2}
          </p>
          <p className="max-w-[280px] w-full text-center pb-[10px] border-b mb-[25px]">
            {card.l3}
          </p>
          <Button title="Start Trial" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
