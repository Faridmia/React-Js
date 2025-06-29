import { useEffect, useRef, useState } from "react";

export default function InputData() {
  const [inputValue, setInputValue] = useState("");

  function AnotherInput({ value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, []);

    return <input ref={ref} value={value} onChange={onChange} />;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          My Custom Input Field
        </h1>
        <div className="mb-4">
          <label
            htmlFor="customInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter Text:
          </label>
          <AnotherInput
            value={inputValue}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customInput"
          />
        </div>
        <p className="text-gray-600 text-lg text-center mt-4">
          You typed:{" "}
          <span className="font-medium text-blue-600">{inputValue}</span>
        </p>
      </div>
    </div>
  );
}
