import React, { useState } from "react";
import ColorPalette from "./components/ColorPalette";
import ColorGrid from "./components/ColorGrid";
import "./App.css";

// Array defining hex code of colors specified in the task
const colors = [
  "#ff0000", // Red
  "#ff9900", // Orange
  "#ffff00", // Yellow
  "#00ff00", // Green
  "#00ffff", // Cyan
  "#4a86e8", // Light Blue
  "#0000ff", // Navy Blue
  "#9900ff", // Violet
  "#ff00ff", // Purple
  "#a64d79", // Magenta
];

// Main Function
function App() {
  // State variable decraled to initialize color selection as red
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // JSx rendered on the page enclosing components
  return (
    <div className="App">
      <h1>ColorGrid</h1>

      <ColorPalette
        colors={colors}
        selectedColor={selectedColor}
        onColorClick={setSelectedColor}
      />

      <ColorGrid colors={colors} selectedColor={selectedColor} />
    </div>
  );
}

export default App;
