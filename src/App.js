import { useState } from "react";
import "./App.css";
import Upper from "./Components/Upper";
import { copyArray, toIntegers, zeroArray } from "./Utils/ArrayUtil";
import { solve } from "./Utils/solver";

function App() {
    const [dimension, setDimension] = useState("");
    const [customChoice, setCustomChoice] = useState("");
    const [grid, setGrid] = useState(null);
    const [resultGrid, setResultGrid] = useState(null);

    const handleGeneration = e => {
        let dim = dimension;
        if (customChoice !== "") {
            console.log("here 1 , custom choice  set", customChoice);
            setDimension(prev => customChoice);
            dim = customChoice;
        }

        if (dim === "") {
            console.log("here 2 , dimension not set");
            return;
        }
        const newArr = zeroArray(dim);
        setGrid(prev => newArr);
    };

    const handleInputNumBoxPuzzle = e => {
        let val = e.target.value;
        if (val.length > 1) return;

        const [i, j] = e.target.id.split("-");
        const newArr = copyArray(grid);
        newArr[i][j] = val;
        setGrid(prev => newArr);
    };

    const handleSolve = e => {
        const n = dimension * dimension;
        const numGrid = toIntegers(grid, dimension, n);
        const result = solve(numGrid, dimension, n);
        setResultGrid(prev => result);
    };

    return (
        <div className="App">
            <Upper />

            <div className="Lower">
                <div className="input-grid">
                    <button className="generate-btn" onClick={handleGeneration}>
                        Generate Puzzle
                    </button>
                    {grid && (
                        <div className="sudoku-box">
                            {grid.map((x, i) => (
                                <div className="row">
                                    {x.map((y, j) => (
                                        <input
                                            id={`${i}-${j}`}
                                            className="numBox"
                                            value={grid[i][j]}
                                            onChange={handleInputNumBoxPuzzle}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="result-grid">
                    <button className="solve-btn" onClick={handleSolve}>
                        Solve
                    </button>

                    {resultGrid && (
                        <div className="sudoku-result-box">
                            {resultGrid.map((x, i) => (
                                <div className="result-row">
                                    {x.map((y, j) => (
                                        <div className="numBoxResult">
                                            {resultGrid[i][j]}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
