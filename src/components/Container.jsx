import { useEffect, useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { TASK_1, TASK_2 } from "../lib/constants";
import Stopwatch from "./Stopwatch";

export default function Container() {
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const task1 = TASK_1 - numberOfWords;
  const task2 = TASK_2 - numberOfWords;

  // useEffect(() => {
  //   const handleClose = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "Are you sure?";
  //   };
  //   window.addEventListener("beforeunload", handleClose);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleClose);
  //   };
  // }, [text]);

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);
  return (
    <main className="container">
      <Stats
        task1={task1}
        task2={task2}
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
      />
      <Textarea text={text} setText={setText} />
      <Stopwatch />
    </main>
  );
}
