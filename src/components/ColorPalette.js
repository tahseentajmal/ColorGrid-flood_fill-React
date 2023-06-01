import React from "react";

// Function To map and display the coolor palette from array and select color
function ColorPalette({ colors, selectedColor, onColorClick }) {
  return (
    <div id="color-selector">
      <h2>Select a Color.</h2>
      <div id="color-palette">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-cell ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
