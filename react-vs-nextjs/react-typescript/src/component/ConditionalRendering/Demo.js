export default function Demo() {
  const values = {
    numberZero: 0,
    isFalse: false,
    isNull: null,
    isUndefined: undefined,
    emptyString: "",
    positiveNumber: 5,
    text: "Hello",
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>React Falsy Value Demo</h1>

      <ul>
        <li>
          <strong>0 &&</strong> {values.numberZero && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>false &&</strong> {values.isFalse && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>null &&</strong> {values.isNull && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>undefined &&</strong>{" "}
          {values.isUndefined && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>"" (empty string) &&</strong>{" "}
          {values.emptyString && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>5 &&</strong>{" "}
          {values.positiveNumber && <span>✅ Rendered</span>}
        </li>
        <li>
          <strong>"Hello" &&</strong> {values.text && <span>✅ Rendered</span>}
        </li>
      </ul>

      <hr />

      <h2>Fixed version (avoiding 0 rendering):</h2>
      {values.numberZero > 0 && <p>This will only show if number > 0</p>}
    </div>
  );
}
