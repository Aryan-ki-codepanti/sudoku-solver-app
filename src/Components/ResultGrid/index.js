import React, { useContext } from "react";
import { GridContext } from "../../Context/GridContext";
import { toIntegers } from "../../Utils/ArrayUtil";
import { solve } from "../../Utils/solver";
import "./resultGrid.css";

const ResultGrid = () => {
    const { grid, dimension, resultGrid, setResultGrid } =
        useContext(GridContext);

    const handleSolve = e => {
        const n = dimension * dimension;
        const numGrid = toIntegers(grid, dimension, n);
        const result = solve(numGrid, dimension, n);
        setResultGrid(prev => result);
    };

    return (
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
    );
};

export default ResultGrid;
