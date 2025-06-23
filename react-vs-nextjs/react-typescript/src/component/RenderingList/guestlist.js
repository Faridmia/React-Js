function Cup({ guestNumber, guestName }) {
  return (
    <li>
      🍵 Tea cup #{guestNumber} for {guestName}
    </li>
  );
}

export default function TeaSet() {
  const guestList = ["Farid", "Enric", "Sadia", "Tuhin"];

  return (
    <section>
      <h1>Guest Tea List</h1>
      <ul>
        {guestList.map((name, index) => (
          <Cup key={index} guestNumber={index + 1} guestName={name} />
        ))}
      </ul>
    </section>
  );
}
