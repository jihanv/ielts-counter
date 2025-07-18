import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { TASK_1, TASK_2 } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const task1 = TASK_1 - text.length;
  const task2 = TASK_2 - text.length;
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        task1={task1}
        task2={task2}
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
      />
    </main>
  );
}
