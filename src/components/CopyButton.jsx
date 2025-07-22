import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleClick = async (event) => {
    event.currentTarget.blur();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <button
      className="app-btn"
      onClick={handleClick}
      aria-label="Copy to clipboard"
    >
      <span className={`copy-icon ${copied ? "fade-out" : "fade-in"}`}>
        <CopyIcon className="app-btn-icon" />
      </span>
      <span className={`copy-text ${copied ? "fade-in" : "fade-out"}`}>
        <CheckIcon className="app-btn-icon" />
      </span>
    </button>
  );
}
