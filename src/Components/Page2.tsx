import Works from "./Works";
import "./Animations.css";
import "./Styles.css";

function Page2() {
  return (
    <>
      <div className="page2">
        <div className="info">
          <div>
            <img
              src="https://i.postimg.cc/TPn764Bm/Sparkle.png"
              alt=""
              className="about"
            />
            <img src="./src/Images/profile.jpg" alt="" className="profile" />
          </div>
          <div>
            {" "}
            <img src="./src/Images/brush.png" alt="" className="brush" />
            <p className="intro">
              "Hi, I'm Anjith Saju, a full stack developer proficient in
              JavaScript, HTML, CSS, React, Python, Flask, Node.js, and Dash. I
              create dynamic and responsive web applications, bridging the gap
              between design and functionality."
            </p>
          </div>
        </div>
        <div className="scrolll"></div>
        <Works></Works>
      </div>
    </>
  );
}
export default Page2;
