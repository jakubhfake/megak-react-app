import React, {useEffect, useState} from "react";
export const ClockFun = props => {
    const [dt, setDt] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDt(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log('Pa pa!')
        }
    }, []);

    return <p>{dt.toLocaleString()}</p>
};