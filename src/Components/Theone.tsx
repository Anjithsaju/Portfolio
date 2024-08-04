import { useState, useEffect } from "react";
import "./new.css";
import "./Works.css";
import "./Intro.css"; // Import your CSS file
import Works from "./Works";
import Intro from "./Intro";
import Introduction from "./Introduction";
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
  let introclass = "Introdiv";

  if (activeButton === "intro") {
    homeClassName = "home intro";
    hiname = "hi";
    nameclass = "name";
    // introclass = "Introdiv active";
    // homeClassName = "home introtrans";
    textClassName = "textcontainer ";
    imgname = "profile ";
  } else if (activeButton === "home") {
    homeClassName = "home";
    introclass = "Introdiv";
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
      introclass = "Introdiv out";
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
    <div style={{ overflow: "hidden", position: "relative" }}>
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
        <div className="contentdiv">
          <img
            src="https://i.postimg.cc/pXw0HN1x/profile.jpg"
            alt="Profile"
            className={imgname}
          />
          <div className={textClassName}>
            <h1 className={hiname}>Hello,</h1>
            <h2 className={nameclass}>I am Anjith Saju</h2>
          </div>
        </div>
        <div className="introdiv">
          <Introduction></Introduction>
        </div>
      </div>
      <div className={worksname}>
        <Works workclass={workclass}></Works>
      </div>
      <div className="itrodiv">
        {/* <img src="./src/Images/profile.jpg" alt="Profile" className={imgname} /> */}
        <div className={introclass}>
          <Intro></Intro>
        </div>
      </div>
    </div>
  );
}

export default Theone;
