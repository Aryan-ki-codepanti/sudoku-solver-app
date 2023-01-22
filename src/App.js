import { useState } from "react";
import "./App.css";

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
        const newArr = [];
        const n = dimension * dimension;
        for (let i = 0; i < n; i++) {
            let inner = [];
            for (let j = 0; j < n; j++) inner.push(0);
            newArr.push(inner);
        }
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
                        {grid.map(x => (
                            <div className="row">
                                {x.map(y => (
                                    <div className="numBox">{y}</div>
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
