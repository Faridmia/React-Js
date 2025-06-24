import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Farid",
    email: "farid@example.com",
  });

  function updateName() {
    setUser((prevUser) => ({
      ...prevUser,
      name: "ahmed",
    }));
  }

  return (
    <>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={updateName}>Change Name</button>
    </>
  );
}
