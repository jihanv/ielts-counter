import { PlayIcon } from "@radix-ui/react-icons";

export default function StartButton({ setIsRunning }) {
  const handleClick = (event) => {
    setIsRunning(true);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <PlayIcon className="reset-btn-icon" />
    </button>
  );
}
