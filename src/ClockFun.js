import React, {useEffect, useState} from "react";
export const ClockFun = props => {
    const [dt, setDt] = useState(new Date());

    useEffect(() => {
        console.log('Tylko raz!!!!');
        setInterval(() => {
            setDt(new Date());
        }, 1000);
    }, []);

    return <p>{dt.toLocaleString()}</p>
};