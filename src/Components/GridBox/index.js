import React, { useContext } from "react";
import "./gridBox.css";
import { GridContext } from "../../Context/GridContext";
import { COLORS, WIDTHS } from "../../Constants";

const GridBox = ({ currentGrid }) => {
    const { dimension } = useContext(GridContext);

    const getStyles = (i, j) => {
        const styles = {
            borderTop: `2px solid ${COLORS["--Secondary-white"]}`,
            borderLeft: `2px solid ${COLORS["--Secondary-white"]}`
        };

        if (!(j % dimension)) styles.borderLeft = "none";
        if (!(i % dimension)) styles.borderTop = "none";

        if (!((j + 1) % dimension) && j + 1 !== currentGrid.length)
            styles.borderRight = `4px solid ${COLORS["--Secondary-gray"]}`;

        if (!((i + 1) % dimension) && i + 1 !== currentGrid.length)
            styles.borderBottom = `4px solid ${COLORS["--Secondary-gray"]}`;
        return styles;
    };

    return (
        <div>
            {currentGrid && (
                <div
                    className="sudoku-result-box"
                    style={{
                        width: `${currentGrid.length * WIDTHS["--NumBox"]}px`
                    }}
                >
                    {currentGrid.map((x, i) => (
                        <div key={`myResultRow-${i}`} className="result-row">
                            {x.map((y, j) => (
                                <div
                                    key={`grid-${i}-${j}`}
                                    className="numBoxResult"
                                    style={getStyles(i, j)}
                                >
                                    {currentGrid[i][j]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GridBox;
