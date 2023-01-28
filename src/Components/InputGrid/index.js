import React, { useContext } from "react";
import { GridContext } from "../../Context/GridContext";
import { copyArray, zeroArray } from "../../Utils/ArrayUtil";
import "./inputGrid.css";
import { COLORS, WIDTHS } from "../../Utils/Styles";

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

    const getStyles = (i, j) => {
        const styles = {
            borderTop: `2px solid ${COLORS["--Secondary-white"]}`,
            borderLeft: `2px solid ${COLORS["--Secondary-white"]}`
        };

        if (!(j % dimension)) styles.borderLeft = "none";
        if (!(i % dimension)) styles.borderTop = "none";

        if (!((j + 1) % dimension) && j + 1 !== grid.length)
            styles.borderRight = `4px solid ${COLORS["--Secondary-gray"]}`;

        if (!((i + 1) % dimension) && i + 1 !== grid.length)
            styles.borderBottom = `4px solid ${COLORS["--Secondary-gray"]}`;

        // boundary ones
        if (i === 0)
            styles.borderTop = `4px solid ${COLORS["--Secondary-gray"]}`;
        if (j + 1 === grid.length)
            styles.borderRight = `4px solid ${COLORS["--Secondary-gray"]}`;

        if (j === 0)
            styles.borderLeft = `4px solid ${COLORS["--Secondary-gray"]}`;
        if (i + 1 === grid.length)
            styles.borderBottom = `4px solid ${COLORS["--Secondary-gray"]}`;

        return styles;
    };

    return (
        <div className="input-grid container">
            <button className="generate-btn" onClick={handleGeneration}>
                Generate Puzzle
            </button>
            {grid && (
                <div
                    className="sudoku-box"
                    style={{
                        width: `${grid.length * WIDTHS["--InputNumBox"]}px`
                    }}
                >
                    {grid.map((x, i) => (
                        <div key={`myInputRow-${i}`} className="row">
                            {x.map((y, j) => (
                                <input
                                    key={`myInputbox-${i}-${j}`}
                                    id={`${i}-${j}`}
                                    style={getStyles(i, j)}
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
