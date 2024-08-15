import { useEffect, useRef, useState } from "react";

const Car: React.FC = () => {
  const carRef = useRef<HTMLImageElement>(null);
  const move = 5;

  const [keysPressed, setKeysPressed] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({
        ...prevKeys,
        [e.key]: true,
      }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({
        ...prevKeys,
        [e.key]: false,
      }));
    };

    const moveCar = () => {
      setPosition((prevPosition) => {
        let newTop = prevPosition.top;
        let newLeft = prevPosition.left;

        if (keysPressed["w"]) {
          newTop = prevPosition.top - move;
        }
        if (keysPressed["s"]) {
          newTop = prevPosition.top + move;
        }
        if (keysPressed["a"]) {
          newLeft = prevPosition.left - move;
        }
        if (keysPressed["d"]) {
          newLeft = prevPosition.left + move;
        }

        return { top: newTop, left: newLeft };
      });
    };

    const interval = setInterval(moveCar, 50); // Adjust the interval for smoother movement

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      clearInterval(interval);
    };
  }, [keysPressed]);

  useEffect(() => {
    const carElement = carRef.current;
    if (carElement) {
      carElement.style.position = "absolute";
      carElement.style.top = `${position.top}px`;
      carElement.style.left = `${position.left}px`;

      // Scroll the viewport to keep the car in view
      carElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [position]);

  return <img ref={carRef} id="car" src="./src/Images/falcon.png" alt="Car" />;
};

export default Car;
