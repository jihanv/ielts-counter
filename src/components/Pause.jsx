import { PauseIcon } from "@radix-ui/react-icons";

export default function Pause({ setIsRunning }) {
  const handleClick = (event) => {
    setIsRunning(false);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <PauseIcon className="reset-btn-icon" />
    </button>
  );
}
