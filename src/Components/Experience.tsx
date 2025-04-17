import "./Experience.css";
import React, { useState } from "react";

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handler to set the active index
  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="thi">
        <h1>Padwan To Master</h1>
        <section className="section1">
          {/* First div */}
          <div className={activeIndex === 0 ? "main active" : "main"}>
            <img
              src="https://i.postimg.cc/wMFjs7nC/childd.png"
              className="hover-image"
              alt="padwan"
              style={{ width: "19vw" }}
              onClick={() => handleImageClick(0)} // Set active index to 0
            />
            <img className="ship" src="./src/Images/ship.png" alt="" />
            <div>
              
              <h4>Learning HTML, CSS, JavaScript</h4>
              <p>
                Last year, I started learning web development with HTML, CSS, and
                JavaScript. I worked on self-paced projects to strengthen my skills
                and explored responsive design and basic animations.
              </p>
            </div>
          </div>

          {/* Second div */}
          <div className={activeIndex === 1 ? "main active" : "main"}>
            <img
              src="https://i.postimg.cc/HnTLxQv0/knight.png"
              alt="Knight"
              className="hover-image2"
              style={{
                width: "24vw",
                position: "relative",
                bottom: "0vw",
              }}
              onClick={() => handleImageClick(1)} // Set active index to 1
            />
            <div>
              <h4>Cybersecurity Internship</h4>
              <p>
                I attended an internship in Chennai, exploring the world of
                cybersecurity. I learned about secure coding, penetration testing, and
                how to protect web applications.
              </p>
            </div>
          </div>

          {/* Third div */}
          <div className={activeIndex === 2 ? "main active" : "main"}>
            <img
              src="https://i.postimg.cc/0QYQPtn2/mas.png"
              className="hover-image3"
              alt="padwan"
              style={{
                width: "34vw",
                position: "relative",
                bottom: "-3.5vw",
              }}
              onClick={() => handleImageClick(2)} // Set active index to 2
            />
            <div>
              <h4>Assisting the Blind</h4>
              <p>
                This year, I am working on a hardware-software project designed to
                assist blind individuals. Using IoT and sensors, we aim to improve
                accessibility for visually impaired users.
              </p>
            </div>
          </div>
        </section>

        <img
          className="saber"
          src="https://i.postimg.cc/yYm5MGLf/lightsaber.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Experience;
