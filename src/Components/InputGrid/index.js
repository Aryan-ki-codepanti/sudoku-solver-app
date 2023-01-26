import React, { useContext } from "react";
import { GridContext } from "../../Context/GridContext";
import { copyArray, zeroArray } from "../../Utils/ArrayUtil";
import "./inputGrid.css";

const InputGrid = () => {
    const { grid, dimension, setDimension, customChoice, setGrid } =
        useContext(GridContext);

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

    return (
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
    );
};

export default InputGrid;
