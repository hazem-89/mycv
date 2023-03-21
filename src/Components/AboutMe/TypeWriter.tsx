import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  pauseTime?: number;
  numLoops?: number;
  setTypeEnded?: (value: boolean) => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  pauseTime = 50,
  numLoops = 1,
  setTypeEnded = () => {},
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i === text.length - 1) {
        clearInterval(timer);
        setTimeout(() => {
          if (loopCount < numLoops - 1) {
            setDisplayedText("");
            i = 0;
            setLoopCount((prev) => prev + 1);
          } else {
            setLoopCount(0);
            setTypeEnded(true);
          }
        }, pauseTime);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
    // style={{
    //   fontSize: 30,
    //   color: "white",
    //   marginTop: "15px",
    //   textAlign: "center",
    // }}
    >
      {displayedText}
    </span>
  );
};

export default Typewriter;
