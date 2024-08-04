import ScrollAnimation from "./ScrollAnimation";
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
        <ScrollAnimation></ScrollAnimation>
      </div>
    </>
  );
}
export default Introduction;
