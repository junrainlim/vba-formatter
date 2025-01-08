import "./App.css";
import { useState } from "react";

function App() {
  const [outputTxt, setOutputTxt] = useState("");
  return (
    <div className="App">
      <div style={{ fontSize: "large", padding: "1em" }}>
        <input
          name="textInput"
          onChange={(e) => setOutputTxt(formatText(e.target.value))}
        />
        <br />
        {outputTxt}
        <br />
        <button
          onClick={() => {
            navigator.clipboard.writeText(outputTxt);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

const formatText = (txt) => {
  var split = txt.split(" ");
  split = split.filter((word) => {
    return word !== "";
  });
  split = split.map((word) => {
    return "ChrW(" + word + ")";
  });

  var out = split.join(" & ");

  return out;
};

export default App;
