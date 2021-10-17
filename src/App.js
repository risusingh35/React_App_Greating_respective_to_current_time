import "./styles.css";

const d = new Date();
const t = d.getHours();

const greatingStyle = {
  color: ""
};

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

export default function App() {
  return (
    <div className="heading" style={greatingStyle}>
      <h1>{greating}</h1>
    </div>
  );
}
