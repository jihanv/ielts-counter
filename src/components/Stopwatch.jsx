import { useState, useEffect, useRef } from "react";
import ResetButton from "./ResetButton";
import StartButton from "./StartButton";
import Pause from "./Pause";
import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";

export default function Stopwatch({ setText, text }) {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10); // update every 10ms for centisecond precision
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h1 className="stat__number digits">{formatTime(time)}</h1>
      <div className="btn-container">
        <StartButton setIsRunning={setIsRunning} />
        <Pause setIsRunning={setIsRunning} />
        <ResetButton setTime={setTime} />
        <ClearButton setText={setText} />
        <CopyButton text={text} />
      </div>
    </div>
  );
}
