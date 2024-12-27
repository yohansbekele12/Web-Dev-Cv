import React from "react";
import skillbg from "../assets/Img/bgPic/Skill.jpg";
import SkillCard from "../components/skills/SkillCard";

const Skills = (props) => {
  const Frontend = props.data.Skills.FrontEnd;
  const Backend = props.data.Skills.BackEnd;
  const Tools = props.data.Skills.Tools;

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "",
      }}
    >
      {" "}
      <div className="flex w-full flex-col">
        <div className="flex gap-6 items-center p-6 rounded-lg">
          {/* FrontEnd Skill  */}
          <h1 className="text-5xl font-bold harry-potter-font">
            Frontend Skills
          </h1>
          {Frontend.map((item, index) => (
            <SkillCard key={index} name={item.name} logo={item.logo} />
          ))}
        </div>
        <div className="divider"></div>
        {/* Backend Skill */}

        <div className="flex gap-6 items-center p-6 rounded-lg">
          {/* FrontEnd Skill  */}
          <h1 className="text-5xl font-bold harry-potter-font">
            Backend Skills
          </h1>
          {Backend.map((item, index) => (
            <SkillCard key={index} name={item.name} logo={item.logo} />
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex gap-6 items-center p-6 rounded-lg">
          {/* Tools  Skill  */}
          <h1 className="text-5xl font-bold harry-potter-font">Tools</h1>
          {Tools.map((item, index) => (
            <SkillCard key={index} name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
