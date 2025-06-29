import { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [name, setName] = useState(""); // State for the input name
  const [isUppercase, setIsUppercase] = useState(false); // State for the uppercase checkbox

  // Handler for name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handler for uppercase checkbox changes
  const handleUppercaseChange = (e) => {
    setIsUppercase(e.target.checked);
  };

  // Determine the displayed name based on the checkbox
  const displayedName = isUppercase ? name.toUpperCase() : name;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        {/* Toggle form visibility button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-sm"
        >
          {showForm ? "Hide form" : "Show form"}
        </button>

        {/* Form content, conditionally rendered */}
        {showForm && (
          <div className="space-y-6">
            {/* Name input section */}
            <div>
              <label
                htmlFor="nameInput"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Enter your name:
              </label>
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out text-gray-800"
                placeholder="Type your name here"
              />
            </div>

            {/* Uppercase checkbox section */}
            <div className="flex items-center">
              <input
                id="uppercaseCheckbox"
                type="checkbox"
                checked={isUppercase}
                onChange={handleUppercaseChange}
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="uppercaseCheckbox"
                className="ml-3 text-gray-700 text-md"
              >
                Make it uppercase
              </label>
            </div>

            {/* Greeting message */}
            {name && ( // Only show greeting if name is not empty
              <p className="text-gray-800 text-lg">
                Hello,{" "}
                <span className="font-bold text-blue-600">{displayedName}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
