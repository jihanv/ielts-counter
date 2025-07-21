import { useState } from "react";
import Warning from "./Warning";
import Stopwatch from "./Stopwatch";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    //Basic Validation
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No script tag allowed!");
    } else {
      setWarningText("");
    }
    setText(() => newText);
  };

  return (
    <>
      {" "}
      <div className="textarea">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your text"
          spellCheck="false"
        />
        {warningText !== "" ? <Warning text={warningText} /> : null}
      </div>
      <Stopwatch setText={setText} text={text} />
    </>
  );
}
