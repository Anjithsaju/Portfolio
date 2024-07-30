import React, { useState, useEffect } from "react";
import "./new.css"; // Import your CSS file

function Theone() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  let homeClassName = "home initial";
  let textClassName = "textcontainer initial";
  let hiname = "hi initial";
  let nameclass = "name initial";
  let imgname = "profile initial";
  if (activeButton === "intro") {
    hiname = "hi";
    nameclass = "name";
    homeClassName = "home introtrans";
    textClassName = "textcontainer introtrans";
    imgname = "profile introtrans";
  } else if (activeButton === "home") {
    homeClassName = "home";
    textClassName = "textcontainer";
    imgname = "profile";
    hiname = "hi";
    nameclass = "name";
  }
  useEffect(() => {
    const myFunction = () => {
      handleClick("home");
    };

    const timerId = setTimeout(myFunction, 2200);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <div>
      <div className={homeClassName}>
        <div className="nav">
          <button
            id="home"
            type="button"
            className="navbtn btn btn-primary "
            onClick={() => handleClick("home")}
          >
            Home
          </button>
          <button
            id="intro"
            type="button"
            className="btn btn-primary navbtn"
            onClick={() => handleClick("intro")}
          >
            Intro
          </button>
          <button
            type="button"
            className="btn btn-primary navbtn"
            onClick={() => handleClick("btn3")}
          >
            Primary 3
          </button>
          <button
            type="button"
            className="btn btn-primary navbtn"
            onClick={() => handleClick("btn4")}
          >
            Primary 4
          </button>
        </div>
        <div className={textClassName}>
          <h1 className={hiname}>Hello,</h1>
          <h2 className={nameclass}>I am Anjith Saju</h2>
        </div>
        <img src="./src/Images/profile.jpg" alt="Profile" className={imgname} />
      </div>
    </div>
  );
}

export default Theone;
