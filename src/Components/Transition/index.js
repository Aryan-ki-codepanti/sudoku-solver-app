import React, { useEffect, useRef, useState } from "react";

const Transition = () => {
    const [counter, setCounter] = useState(1);

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(
            () => setCounter(prev => prev + 1),
            1000
        );

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (counter === 10) {
            console.log("Counter done");
            clearInterval(intervalRef.current);
        }
    }, [counter]);

    return <div className="container">Counter : {counter}</div>;
};

export default Transition;
