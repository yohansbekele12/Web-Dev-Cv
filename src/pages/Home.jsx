import React from "react";

const Home = (props) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={props.data.imageSrc}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold harry-potter-font">
            {props.data.name}
          </h1>
          <h1 className="text-3xl font-bold ">{props.data.role}</h1>
          <p className="py-6 magic-font magic-float glass-effect ">
            {props.data.description}
          </p>
          <button className="btn glass harry-potter-font">Summon Me! </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
