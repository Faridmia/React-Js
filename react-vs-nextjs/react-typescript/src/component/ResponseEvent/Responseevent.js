// export default function Button() {

//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// export default function Button() {
//   return (
//     <button
//       onClick={function handleClick() {
//         alert("You clicked me!");
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export default function Button() {
//   return (
//     <button
//       onClick={() => {
//         alert("You clicked me!");
//       }}
//     >
//       Click me
//     </button>
//   );
// }

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
