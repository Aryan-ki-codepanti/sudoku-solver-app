import { createContext, useState } from "react";

export const GridContext = createContext();

export const GridWrapper = ({ children }) => {
    const [dimension, setDimension] = useState("");
    const [customChoice, setCustomChoice] = useState("");
    const [grid, setGrid] = useState(null);
    const [resultGrid, setResultGrid] = useState(null);
    const [solverIterations, setSolverIterations] = useState(null);

    const data = {
        dimension,
        setDimension,
        customChoice,
        setCustomChoice,
        grid,
        setGrid,
        resultGrid,
        setResultGrid,
        solverIterations,
        setSolverIterations
    };
    return <GridContext.Provider value={data}>{children}</GridContext.Provider>;
};
