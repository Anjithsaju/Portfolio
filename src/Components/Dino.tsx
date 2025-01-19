import "./Dino.css";
import { useEffect, useRef, useState } from "react";
function Dino() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    // Async function to handle the sleep and then update the message

    // const [bottom, setCount] = useState(0);
    const handleEnterKeyPress = (event: KeyboardEvent) => {
      if (event.key === " ") {
        const image = document.getElementById("dino");
        if (image) {
          image.style.bottom = "70px";
          // await sleep(1000);
          // image.style.bottom = "3px";
        }
        // You can call any function here
        // Example: callSomeFunction();
      }
    };
    const handleSpacebarRelease = (event: KeyboardEvent) => {
      if (event.key === " ") {
        const image = document.getElementById("dino");
        if (image) {
          image.style.bottom = "0px";
        }
      }
    };
    // Attach the event listener to listen for keydown events globally
    window.addEventListener("keydown", handleEnterKeyPress);
    window.addEventListener("keyup", handleSpacebarRelease);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="cont" style={{ height: "100vh" }}>
        <img id="dino" src="https://i.gifer.com/24S3.gif" alt="" />
        {/* <div style="padding-top:41.600%;position:relative;"><iframe src="https://gifer.com/embed/24S3" width="100%" height="100%" style={{position:"absolute",top:"0",left:"0""}} frameBorder="0" allowFullScreen></iframe></div><p><a href="https; */}
      </div>
    </>
  );
}
export default Dino;
