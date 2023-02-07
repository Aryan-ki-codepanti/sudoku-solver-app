import React, { useContext } from "react";
import { GridContext } from "../../Context/GridContext";
import { copyArray } from "../../Utils/ArrayUtil";
import "./inputGrid.css";
import { COLORS, WIDTHS } from "../../Utils/Styles";

const InputGrid = () => {
    const { grid, dimension, setGrid, resultGrid } = useContext(GridContext);

    const handleInputNumBoxPuzzle = e => {
        let val = e.target.value;

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

        if (i === 0 && j === 0) styles.borderRadius = "8px 0 0 0";
        if (i === 0 && j + 1 === grid.length) styles.borderRadius = "0 8px 0 0";
        if (i + 1 === grid.length && j + 1 === grid.length)
            styles.borderRadius = "0 0 8px 0";
        if (i + 1 === grid.length && j === 0) styles.borderRadius = "0 0 0 8px";
        return styles;
    };

    return (
        <div className="input-grid-wrapper container">
            <p>
                To place a number in a square — type the number on your keyboard
                after clicking on it
            </p>
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
                                disabled={resultGrid}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InputGrid;
