import "./Page1.css";
import ScrollAnimation from "./ScrollAnimation";
import Works from "./Works";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import Transmission from "./page5";
import { useTorch } from "./TorchContext";

function Starwars() {
  const { torchOn, setTorchOn } = useTorch();
  const [showMessage, setShowMessage] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // All useEffect hooks go here, inside the function!
  useEffect(() => {
    const handleScroll = () => {
      const sections: NodeListOf<HTMLElement> =
        document.querySelectorAll("section");
      const navButtons: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll(".nav");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      navButtons.forEach((button) => {
        button.classList.remove("active");
        if (
          button.parentElement?.getAttribute("href")?.includes(currentSection)
        ) {
          button.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (torchOn) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 12000);
      return () => clearTimeout(timer);
    }
  }, [torchOn]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    // Torch/cursor effect only if torchOn is true
    if (!torchOn) {
      // Remove custom cursor if not active
      document.body.style.cursor = "";
      const cursorImg = document.getElementById("custom-cursor-img");
      if (cursorImg) cursorImg.remove();
      return;
    }

    document.body.style.cursor = "none";
    let cursorImg = document.getElementById("custom-cursor-img") as HTMLImageElement | null;
    if (!cursorImg) {
      cursorImg = document.createElement("img");
      cursorImg.id = "custom-cursor-img";
      cursorImg.src = "https://i.postimg.cc/fRndJTFH/lightsaber.png";
      cursorImg.style.position = "fixed";
      cursorImg.style.pointerEvents = "none";
      cursorImg.style.zIndex = "9999";
      cursorImg.style.width = "100px";
      cursorImg.style.height = "48px";
      cursorImg.style.transition = "transform 0.07s";
      cursorImg.style.transform = "rotate(-140deg)";
      document.body.appendChild(cursorImg);
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorImg) {
        cursorImg.style.left = `${e.clientX - 50}px`;
        cursorImg.style.top = `${e.clientY - 24}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      document.body.style.cursor = "";
      if (cursorImg) cursorImg.remove();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [torchOn]);



  // Torch overlay effect
  useEffect(() => {
    if (!torchOn) return;
    const overlay = document.querySelector(".torch-overlay");
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (overlay) {
        (overlay as HTMLElement).style.maskImage = `radial-gradient(circle 200px at ${x}px ${y}px, transparent 0%, black 100%)`;
        (overlay as HTMLElement).style.webkitMaskImage = `radial-gradient(circle 200px at ${x}px ${y}px, transparent 0%, black 100%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [torchOn]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // ESC key listener to turn off torch
  useEffect(() => {
    if (!torchOn) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTorchOn(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [torchOn, setTorchOn]);

  // Handler for Yoda click
  const handleYodaClick = () => {
    setTorchOn(false);
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 4000); // Hide after 2s
  };

  return (

    <>
{torchOn && (
  <>
    <div className="torch-overlay">
       {showMessage && (
      <div className="torch-message">
        <h4 className="!text-yellow-400 text-center">
          🔦 <em>Jedi Trial Initiated...</em><br />
          Seek the name <span className="text-green-400 font-bold">Yoda</span> hidden in this website.<br />
          Click that to reveal the site back... or press <span className="text-red-400">Escape</span> to abort the mission.    Good Luck
        </h4>
      </div>
    )}
    </div>
   
  </>
)}

{/* Simple congrats popup */}
      {showCongrats  && (
        <div className="torch-message" style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 100000,
          background: "rgba(0,0,0,0.92)",
          color: "#7fff00",
          borderRadius: "1rem",
          padding: "2rem 2.5rem",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          boxShadow: "0 0 24px #00fff7cc"
        }}>
          🎉 Congratulations, Padawan! <br />You have found Yoda!
        </div>
      )}

      <nav
        style={{ position: "fixed" }}
        className={` navbar1 ${isVisible ? "visible" : "hidden"}  `}
      >
        <a id="stupid" href="#page1">
          <button id="hg" className="nav alata-regular">
            Home Base
          </button>
        </a>
        <a id="stupid" href="#page2">
          <button className="nav">Jedi Profile</button>
        </a>

        <a id="stupid" href="#page3">
          <button className="nav">Quest Log</button>
        </a>
        <a id="stupid" href="#page4">
          <button className="nav">Force Powers</button>
        </a>
        <a id="stupid" href="#page5">
          <button className="nav">Transmission</button>
        </a>
      </nav>
      <section id="page1">
        <div className="Textcontainer">
          <h1 className="alata-regular">
            A Long Time Ago, in a Codebase Far, Far Away...
          </h1>
          <h5 className="poppins-regular">
            ...I began my journey as a developer. I'm Anjith Saju, focused on
            crafting efficient and elegant solutions.
          </h5>
        </div>
      </section>
      <section id="page2">
        {/* <img src="./src/Images/data.jpg" alt="" /> */}

        <div className="content">
  <h4>
            "Do or do not. There is no try." —{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={handleYodaClick}
              tabIndex={0}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleYodaClick(); }}
              aria-label="Turn off torch effect"
            >
              Yoda
            </span>
          </h4>          <div>
            <a id="stupid" href="https://youtu.be/frszEJb0aOo?feature=shared">
              <h5> Hello there!</h5>
            </a>
            <p className="poppins-regular">
              I'm Anjith , a passionate Full Stack Developer with a knack for
              creating immersive digital experiences. My journey in the world of
              development began with a simple curiosity, and over time, I've
              honed my skills to become proficient in a wide array of
              technologies. From the front-end galaxies of JavaScript, React,
              and HTML/CSS to the back-end realms of Python, Flask, and Node.js,
              I’ve navigated the coding universe with precision and creativity.
            </p>

            <h4>Force Abilities</h4>
          </div>
          <div
            style={{
              color: "black",
              // position: "relative",

              // left: "clamp(-11vw, -6vw, -9vw)",
              scale: " 0.8",
              width: "124%",
            }}
          >
            <ScrollAnimation></ScrollAnimation>
          </div>
        </div>
      </section>
      <section id="page3">
        <h4>My Quests</h4>
        <Works></Works>
      </section>
      <section id="page4" className="overflow-hidden">
        {/* <Yodastory></Yodastory> */}
        {/* <img src="./src/Images/yoda.png" alt="" /> */}
        
        <Experience></Experience>
        {/* <div className="data">
          <Home></Home>
        </div> */}
      </section>
      <section id="page5">
        {/* <Car></Car> */}
        {/* <button onClick={handleButtonClick}>
          {cursorChanged ? "Reset Cursor" : "Change Cursor"}
        </button> */}
        {/* <Dino></Dino> */}
        {/* <Timeline></Timeline> */}
        <Transmission></Transmission>
      </section>
    </>
  );
}

export default Starwars;
