import { people } from "./data.js";
import { getImageUrl } from "./Utils.js";

export default function MainList() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        know for {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
