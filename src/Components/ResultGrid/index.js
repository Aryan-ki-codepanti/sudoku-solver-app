import React, { useContext, useState } from "react";
import { GridContext } from "../../Context/GridContext";
import { isValidPuzzle, toIntegers } from "../../Utils/ArrayUtil";
import { solve } from "../../Utils/solver";
import "./resultGrid.css";

const ResultGrid = () => {
    const { grid, dimension, resultGrid, setResultGrid, setSolverIterations } =
        useContext(GridContext);

    const [error, setError] = useState(null);

    const handleSolve = e => {
        const n = dimension * dimension;
        const numGrid = toIntegers(grid, dimension, n);

        if (!isValidPuzzle(numGrid, dimension, n)) {
            setError(prev => true);
            return;
        }

        const result = solve(numGrid, dimension, n, setSolverIterations);
        if (!result) {
            setError(prev => true);
            return;
        }
        setResultGrid(prev => result);
    };

    return (
        <div className="result-grid container">
            <button className="solve-btn" onClick={handleSolve}>
                Solve
            </button>

            {error && <p>You entered a puzzle which can not be solved</p>}

            {resultGrid && (
                <div className="sudoku-result-box">
                    {resultGrid.map((x, i) => (
                        <div key={`myResultRow-${i}`} className="result-row">
                            {x.map((y, j) => (
                                <div
                                    key={`myResultbox-${i}-${j}`}
                                    className="numBoxResult"
                                >
                                    {resultGrid[i][j]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResultGrid;
