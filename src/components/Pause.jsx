import { PauseIcon } from "@radix-ui/react-icons";

export default function Pause({ setIsRunning }) {
  const handleClick = (event) => {
    setIsRunning(false);
    event.currentTarget.blur();
  };
  return (
    <button className="app-btn" onClick={handleClick}>
      <PauseIcon className="app-btn-icon" />
    </button>
  );
}
