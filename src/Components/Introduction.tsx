import ScrollAnimation from "./ScrollAnimation";
import Experience from "./Experience";
function Introduction() {
  return (
    <>
      <div
        style={{
          height: " 200vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>
          hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam ad eos maxime repellendus accusamus quam aut nemo inventore
          impedit. Aperiam cum odio maiores accusantium, ipsam iure blanditiis?
          Dolores, eveniet dolorem!
        </h3>
        <p>hello</p>

        <div>
          <h2 style={{ color: " #fff2c2", fontSize: "3rem" }}>Experience</h2>
          <Experience></Experience>
        </div>

        <h2 style={{ color: " #fff2c2", fontSize: "3rem" }}>My Skills</h2>
        <ScrollAnimation></ScrollAnimation>
      </div>
    </>
  );
}
export default Introduction;
