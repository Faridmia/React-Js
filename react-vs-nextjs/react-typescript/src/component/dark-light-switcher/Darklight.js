import { useState } from "react";

export default function Darklight() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleMode}>Toggle Mode</button>
      <p>This is a simple dark/light mode toggle using React!</p>
    </div>
  );
}
