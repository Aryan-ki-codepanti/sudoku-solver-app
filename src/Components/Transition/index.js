import React, { useContext, useEffect, useRef, useState } from "react";
import { GridContext } from "../../Context/GridContext";
import GridBox from "../GridBox";

const Transition = () => {
    const [counter, setCounter] = useState(0);
    // const [currentGrid, setCurrentGrid] = useState(null);
    const { solverIterations, setResultGrid, setSolverIterations } =
        useContext(GridContext);

    const intervalRef = useRef(null);

    useEffect(() => {
        setCounter(prev => 0);
        intervalRef.current = setInterval(
            () => setCounter(prev => prev + 1),
            1000
        );

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (counter === solverIterations?.length) {
            console.log("Counter done");
            clearInterval(intervalRef.current);
            setCounter(prev => prev - 1);
        }
    }, [counter, solverIterations]);

    return (
        <div className="container">
            {solverIterations?.length > 0 && (
                <GridBox currentGrid={solverIterations[counter]} />
            )}
        </div>
    );
};

export default Transition;
