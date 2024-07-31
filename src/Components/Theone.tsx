import React, { useState, useEffect } from "react";
import "./new.css";
import "./Works.css"; // Import your CSS file
import Works from "./Works";
function Theone() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  let workclass = "workdiv";
  let homeClassName = "home initial";
  let textClassName = "textcontainer initial";
  let hiname = "hi initial";
  let nameclass = "name initial";
  let imgname = "profile initial";
  let worksname = "works";
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
  } else if (activeButton === "myworks") {
    worksname = "works active";
    textClassName = "textcontainer";
    const gethome = document.querySelector(".home.introtrans");
    if (gethome) {
      imgname = "profile introtrans";
      console.log("work");
    } else imgname = "profile";
    hiname = "hi";
    nameclass = "name";
    workclass = "workdiv active";
    homeClassName = "home out";
  }
  useEffect(() => {
    const myFunction = () => {
      handleClick("home");
    };

    const timerId = setTimeout(myFunction, 2200);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
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
          Myself
        </button>
        <button
          id="myworks"
          type="button"
          className="btn btn-primary navbtn"
          onClick={() => handleClick("myworks")}
        >
          My Works
        </button>
        <button
          type="button"
          className="btn btn-primary navbtn"
          onClick={() => handleClick("btn4")}
        >
          Primary 4
        </button>
      </div>
      <div className={homeClassName}>
        <div>
          <div className={textClassName}>
            <h1 className={hiname}>Hello,</h1>
            <h2 className={nameclass}>I am Anjith Saju</h2>
          </div>
          <img
            src="./src/Images/profile.jpg"
            alt="Profile"
            className={imgname}
          />
        </div>
      </div>
      <div className={worksname}>
        <Works workclass={workclass}></Works>
      </div>
    </div>
  );
}

export default Theone;
