import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setTime }) {
  const handleClick = (event) => {
    setTime(0);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
