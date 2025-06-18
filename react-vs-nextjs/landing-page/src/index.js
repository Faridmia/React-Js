import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import initI18n from "./i18n";

function Main() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Loading...</div>;

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
