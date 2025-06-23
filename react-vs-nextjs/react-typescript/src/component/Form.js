import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  const [response, setResponse] = useState(null);

  if (isSent) {
    return (
      <>
        <h1>Your message is on its way!</h1>
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await sendMessage(message); // API call
        setResponse(res);
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

async function sendMessage(message) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    return { error: err.message };
  }
}
