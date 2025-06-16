import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFrom() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.currentTarget;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // submit

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("form submitted", form);
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Contact Us</h2>

      {submitted ? (
        <p style={{ color: "green" }}>✅ Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Message:
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              ></textarea>
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

// submit
