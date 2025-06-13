//tailwind not working
// import "./Experience.css";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="text-yellow-400 font-star-jedi text-[2.8vw] mb-[2vw]">
        Padwan To Master
      </h1>
      <section className="w-[100vw] flex ml-[5vw] justify-evenly items-end scale-90 z-[2]">
        {/* First div */}
        <div className="flex flex-row items-center relative">
          <img
            src="https://i.postimg.cc/wMFjs7nC/childd.png"
            className="w-[19vw] transition duration-300 cursor-pointer"
            alt="padwan"
          />
          <img
            className="absolute z-[5] rotate-[337deg] scale-[2.5] top-[50vw] left-[-40vw] transition-all duration-500"
            src="./src/Images/ship.png"
            alt=""
          />
        </div>

        {/* Second div */}
        <div className="flex flex-row items-center relative">
          <img
            src="https://i.postimg.cc/HnTLxQv0/knight.png"
            alt="Knight"
            className="w-[24vw] relative bottom-0 transition duration-300 cursor-pointer"
          />
        </div>

        {/* Third div */}
        <div className="flex flex-row items-center relative">
          <img
            src="https://i.postimg.cc/0QYQPtn2/mas.png"
            className="w-[34vw] relative -bottom-[3.5vw] transition duration-300 cursor-pointer"
            alt="padwan"
          />
        </div>
      </section>

      <img
        className="relative -top-[17vw] w-[120vw] left-[-16vw]"
        src="https://i.postimg.cc/yYm5MGLf/lightsaber.png"
        alt=""
      />
      <div className="bg-red-500 text-white p-4">Tailwind is working!</div>
    </div>
  );
};

export default Experience;
