export default function Stats({ task1, task2, numberOfWords }) {
  return (
    <section className="stats">
      <Stat number={task1} label="Task 1" />
      <Stat number={task2} label="Task 2" />
      <Stat number={numberOfWords} label="Words" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
