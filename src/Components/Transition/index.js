import React, { useContext, useEffect, useRef, useState } from "react";
import "./transition.css";
import { GridContext } from "../../Context/GridContext";
import GridBox from "../GridBox";

const Transition = () => {
    const [counter, setCounter] = useState(0);
    const { solverIterations } = useContext(GridContext);

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
            clearInterval(intervalRef.current);
            setCounter(prev => prev - 1);
        }
    }, [counter, solverIterations]);

    return (
        <div className="container transition-wrapper">
            {solverIterations?.length > 0 && (
                <>
                    <p>Transitions of solution</p>
                    <GridBox currentGrid={solverIterations[counter]} />
                </>
            )}
        </div>
    );
};

export default Transition;
