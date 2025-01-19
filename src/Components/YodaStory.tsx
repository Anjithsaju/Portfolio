import { useState } from "react";
import "./yoda.css";

function Yodastory() {
  const [showMainYoda, setShowMainYoda] = useState(false);

  const handleYodaClick = () => {
    setShowMainYoda(!showMainYoda);
  };

  return (
    <>
      <div className="containeryoda">
        {showMainYoda && (
          <div className="mainyoda">
            <h3>From padawan to master</h3>
            hello
          </div>
        )}
        <button className="yoda" onClick={handleYodaClick}></button>
        {/* <img className="yoda" src="./src/Images/yoda.png" alt="" /> */}
      </div>
    </>
  );
}

export default Yodastory;
