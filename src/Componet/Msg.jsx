import React from "react";
export default function Smg() {
  const d = new Date();
  const t = d.getHours();
  const greatingStyle = { color: "" };
  let greating;

  if (t < 12) {
    greating = "Happy Morning";
    greatingStyle.color = "red";
  } else if (t < 18) {
    greating = "Happy Afternoon";
    greatingStyle.color = "green";
  } else {
    greating = "Happy Evening";
    greatingStyle.color = "blue";
  }

  return (
    <h1 className="Msg" style={greatingStyle}>
      {greating}
    </h1>
  );
}
