import React, {useEffect, useState} from 'react';
import {ProgressBar} from "./ProgressBar";

export const AnimatedProgressBar = props => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercentage(percentage => {
                if (percentage >= 100) {
                    clearInterval(intervalId);
                    return percentage;
                }
                return percentage + 1})
        }, 60);

        return () => clearInterval(intervalId);
    }, []);

    return <ProgressBar percentage={percentage}/>;
}