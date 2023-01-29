import React, { useContext, useState } from "react";
import { GridContext } from "../../Context/GridContext";
import { isValidPuzzle, toIntegers } from "../../Utils/ArrayUtil";
import { solve } from "../../Utils/solver";
import GridBox from "../GridBox";
import "./resultGrid.css";

const ResultGrid = () => {
    const { grid, dimension, resultGrid, setResultGrid, setSolverIterations } =
        useContext(GridContext);

    const [error, setError] = useState(false);

    const handleSolve = e => {
        const n = dimension * dimension;
        const numGrid = toIntegers(grid, dimension, n);

        if (!isValidPuzzle(numGrid, dimension, n)) {
            setError(prev => true);
            setResultGrid(prev => null);
            return;
        }

        const result = solve(numGrid, dimension, n, setSolverIterations);
        if (!result) {
            setError(prev => true);
            setResultGrid(prev => null);
            return;
        }
        setError(prev => false);
        setResultGrid(prev => result);
    };

    return (
        <div className="result-grid container">
            {grid && !resultGrid && (
                <button className="solve-btn" onClick={handleSolve}>
                    Solve
                </button>
            )}
            {error && <p>You entered a puzzle which can not be solved</p>}
            <div>
                {resultGrid && <p>Here is the solution of entered puzzle</p>}
                <GridBox currentGrid={resultGrid} />
            </div>
        </div>
    );
};

export default ResultGrid;
