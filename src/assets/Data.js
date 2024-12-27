import profilePic from "./Img/Skill/profile.svg";
import csspic from "./Img/Skill/Css.svg";
import reactPic from "./Img/Skill/React.svg";
import nodePic from "./Img/Skill/Node.svg";
import pgPic from "./Img/Skill/PostgreSQL.svg";
import jsPic from "./Img/Skill/JavaScript.svg";
import htmlPic from "./Img/Skill/Html.svg";
import expressPic from "./Img/Skill/Express.svg";
import dockerPic from "./Img/Skill/Docker.svg";
import gitPic from "./Img/Skill/Git.svg";
import Skills from "../pages/Skills";
import skillbg from "./Img/bgPic/Skill.jpg";

const profileData = {
  name: "Yohans Bekele",
  role: "Full Stack Developer",
  location: "Gdansk, Poland",
  email: "yohansdemisie@gmail.com",
  phone: "+48 789203268",
  imageSrc: profilePic,
  bgpic: skillbg,
  altText: "Yohans Bekele profile picture",
  description:
    "Hi, I'm Yohans Bekele, a passionate and dedicated web developer with a strong foundation in building responsive and user-friendly applications. I specialize in modern web technologies, including the PERN stack (PostgreSQL, Express, React, Node.js), and have a keen eye for detail and simplicity in design. With a background in data analytics and a growing interest in backend development, I thrive on solving problems and bringing ideas to life through code. I'm eager to collaborate on projects that make a meaningful impact and constantly push myself to learn and grow in this ever-evolving field.",
  Skills: {
    FrontEnd: [
      {
        name: "JavaScript",
        logo: jsPic,
        level: "Advanced",
      },
      {
        name: "React",
        logo: reactPic,
        level: "Advanced",
      },

      {
        name: "CSS",
        logo: csspic,
        level: "Advanced",
      },
      {
        name: "HTML",
        logo: htmlPic,
        level: "Advanced",
      },
    ],

    BackEnd: [
      {
        name: "Node.js",
        logo: nodePic,
        level: "Advanced",
      },
      {
        name: "Express.js",
        logo: expressPic,
        level: "Advanced",
      },
      {
        name: "PostgreSQL",
        logo: pgPic,
        level: "Advanced",
      },
    ],
    Tools: [
      {
        name: "Git",
        logo: gitPic,
        level: "Advanced",
      },
      {
        name: "Docker",
        logo: dockerPic,
        level: "Advanced",
      },
    ],
  },
};

export default profileData;
