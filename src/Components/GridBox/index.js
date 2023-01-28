import React, { useContext } from "react";
import "./gridBox.css";
import { GridContext } from "../../Context/GridContext";
import { getStyles, WIDTHS } from "../../Utils/Styles";

const GridBox = ({ currentGrid }) => {
    const { dimension } = useContext(GridContext);

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
                                    style={getStyles(
                                        dimension,
                                        dimension * dimension,
                                        i,
                                        j
                                    )}
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
