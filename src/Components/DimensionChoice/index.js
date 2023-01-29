import React, { useContext } from "react";
import "./dimensionChoice.css";
import { GridContext } from "../../Context/GridContext";
import { zeroArray } from "../../Utils/ArrayUtil";

const DimensionChoice = () => {
    const {
        grid,
        setGrid,
        dimension,
        setDimension,
        customChoice,
        setCustomChoice
    } = useContext(GridContext);

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

    return (
        <div className="DimensionChoiceWrapper container">
            <h1>Choose a dimension</h1>
            <div className="choice-wrapper">
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
                                setCustomChoice(
                                    prev =>
                                        e.target.valueAsNumber > 0 &&
                                        e.target.valueAsNumber
                                )
                            }
                        />
                    </div>
                )}
            </div>
            <div className="generate-btn-box">
                {(dimension === 2 ||
                    dimension === 3 ||
                    (dimension === "Custom" && customChoice !== "")) && (
                    <button className="generate-btn" onClick={handleGeneration}>
                        Generate Puzzle
                    </button>
                )}
            </div>
        </div>
    );
};

export default DimensionChoice;
