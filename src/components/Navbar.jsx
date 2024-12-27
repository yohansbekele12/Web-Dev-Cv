import React from "react";

const Navbar = ({ changeSection }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl harry-potter-font  ">
          Yohans Bekele{" "}
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 space-x-10">
          <button
            className="btn btn-square harry-potter-font btn-ghost"
            onClick={() => changeSection("home")}
          >
            Home
          </button>
          <button
            className="btn btn-square harry-potter-font btn-ghost"
            onClick={() => changeSection("skills")}
          >
            Skills
          </button>
          <button
            className="btn btn-square harry-potter-font btn-ghost"
            onClick={() => changeSection("experience")}
          >
            Experience
          </button>
          <button
            className="btn btn-square harry-potter-font btn-ghost"
            onClick={() => changeSection("contact")}
          >
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
