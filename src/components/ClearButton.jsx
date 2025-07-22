import { TrashIcon } from "@radix-ui/react-icons";

export default function ClearButton({ setText }) {
  const handleClick = (event) => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the text?"
    );
    if (!confirmed) return;
    setText("");
    event.currentTarget.blur();
  };
  return (
    <button className="app-btn" onClick={handleClick}>
      <TrashIcon className="app-btn-icon" />
    </button>
  );
}
