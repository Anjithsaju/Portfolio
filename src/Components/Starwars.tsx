import "./Page1.css";
import ScrollAnimation from "./ScrollAnimation";
import Works from "./Works";
// import Experience from "./Experience";
function Starwars() {
  return (
    <>
      <nav>
        <a href="#page1">
          <button id="hg" className="nav alata-regular">
            Home Base
          </button>
        </a>
        <a href="#page2">
          <button className="nav">Jedi Profile</button>
        </a>

        <a href="#page3">
          <button className="nav">Force Powers</button>
        </a>
        <a href="#page4">
          <button className="nav">Quest Log</button>
        </a>
        <a href="#page5">
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
          <h4> "Do or do not. There is no try." — Yoda</h4>
          <div>
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
        {/* <img id="falcon" src="./src/Images/falcon.png" alt="" /> */}hello
        {/* <Experience></Experience> */}
      </section>
      <section id="page4">
        hello
        <div></div>
      </section>
      <section id="page5">
        hello{/* <ScrollAnimation></ScrollAnimation> */}
      </section>
    </>
  );
}
export default Starwars;
