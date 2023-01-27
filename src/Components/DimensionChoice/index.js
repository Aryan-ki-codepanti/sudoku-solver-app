import React, { useContext } from "react";
import "./dimensionChoice.css";
import { GridContext } from "../../Context/GridContext";

const DimensionChoice = () => {
    const { grid, dimension, setDimension, customChoice, setCustomChoice } =
        useContext(GridContext);
    return (
        <div className="DimensionChoice container">
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
    );
};

export default DimensionChoice;
