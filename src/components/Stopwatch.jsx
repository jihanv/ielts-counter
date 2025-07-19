import { useState, useEffect, useRef } from "react";
import ResetButton from "./ResetButton";
import StartButton from "./StartButton";
import Pause from "./Pause";

export default function Stopwatch() {
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="stat__number">{formatTime(time)}</h1>
      <StartButton setIsRunning={setIsRunning} />
      {/* <button onClick={() => setIsRunning(true)}>Start</button> */}
      {/* <button onClick={() => setIsRunning(false)}>Stop</button> */}
      <Pause setIsRunning={setIsRunning} />
      <ResetButton setTime={setTime} />
    </div>
  );
}
