import { PlayIcon } from "@radix-ui/react-icons";

export default function StartButton({ setIsRunning }) {
  const handleClick = (event) => {
    setIsRunning(true);
    event.currentTarget.blur();
  };
  return (
    <button className="app-btn" onClick={handleClick}>
      <PlayIcon className="app-btn-icon" />
    </button>
  );
}
