import React, { useState } from "react";

// Function to render colorgrid and implement flood fill based on color selection

function ColorGrid({ colors, selectedColor }) {

  // State variable and setter function for grid
  const [grid, setGrid] = useState(generateInitialGrid());

  // Set initial state of grid by iterating trhough 10x10 matrx and assigns random color
  function generateInitialGrid() {
    const initialGrid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(colors[Math.floor(Math.random() * colors.length)]);
      }
      initialGrid.push(row);
    }
    return initialGrid;
  }

  // Invokes flood fill function if the target cell color and selected color are not same
  function handleCellClick(row, col) {
    const targetColor = grid[row][col];
    if (targetColor !== selectedColor) {
      const newGrid = floodFill(
        [...grid],
        row,
        col,
        targetColor,
        selectedColor
      );
      setGrid(newGrid);
    }
  }

  // Flood Fill Algorithm implemented (ref:GeeksForGeeks)
  function floodFill(grid, row, col, targetColor, newColor) {
    // if any of these conditions satisfy return original state of grid
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] !== targetColor ||
      grid[row][col] === newColor
    ) {
      return grid;
    }

    // if not targetcolor is replaced by new color
    grid[row][col] = newColor;

    // recursion (depth-first) for right,left,up,down cells
    grid = floodFill(grid, row + 1, col, targetColor, newColor);
    grid = floodFill(grid, row - 1, col, targetColor, newColor);
    grid = floodFill(grid, row, col + 1, targetColor, newColor);
    grid = floodFill(grid, row, col - 1, targetColor, newColor);

    return grid;
  }

  return (
    <table id="color-grid">
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className="color-grid-cell"
                style={{ backgroundColor: cell }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ColorGrid;
