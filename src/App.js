import { useState } from "react";
import "./App.css";
import { copyArray, zeroArray } from "./Utils/ArrayUtil";

function App() {
    const [dimension, setDimension] = useState("");
    const [customChoice, setCustomChoice] = useState("");
    const [grid, setGrid] = useState(null);

    const handleGeneration = e => {
        if (customChoice !== "") {
            console.log("here 1");
            setDimension(prev => customChoice);
        }

        if (dimension === "") {
            console.log("here 2");
            return;
        }
        const newArr = zeroArray(dimension);
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

    return (
        <div className="App">
            <div className="Upper">
                <h1>Choose a dimension</h1>
                <div className="dimension-choice">
                    <button
                        disabled={grid !== null}
                        className={dimension === 2 ? "active" : ""}
                        onClick={e => setDimension(prev => 2)}
                    >
                        2
                    </button>
                    <button
                        disabled={grid !== null}
                        className={dimension === 3 ? "active" : ""}
                        onClick={e => setDimension(prev => 3)}
                    >
                        3
                    </button>
                    <button
                        disabled={grid !== null}
                        className={dimension === "Custom" ? "active" : ""}
                        onClick={e => setDimension(prev => "Custom")}
                    >
                        Custom
                    </button>
                </div>
                {dimension === "Custom" && (
                    <div className="custom-choice">
                        <p>Enter the choice</p>
                        <input
                            value={customChoice}
                            type="number"
                            onChange={e =>
                                setCustomChoice(prev => e.target.valueAsNumber)
                            }
                        />
                    </div>
                )}
            </div>

            <div className="Lower">
                <button onClick={handleGeneration}>Generate Puzzle</button>
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
        </div>
    );
}

export default App;
