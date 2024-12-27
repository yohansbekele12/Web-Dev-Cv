import * as React from "react";
import { SkillCardProps } from "./types";

const SkillCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col items-center p-4 rounded-full magic-float shadow-md 
            transform transition-all duration-300 ease-in-out
            hover:scale-110 hover:shadow-xl  hover:from-purple-200 hover:to-pink-200
            hover:-translate-y-1 group"
      >
        <img
          src={props.logo}
          alt="HTML logo"
          className="w-16 h-16 mb-2 transition-transform duration-300 rounded-full group-hover:rotate-12"
        />
        <p className="text-sm font-medium harry-potter-font group-hover:text-purple-600 transition-colors duration-300">
          {props.name}
        </p>
      </div>
    </>
  );
};

export default SkillCard;
