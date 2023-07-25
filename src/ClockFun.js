import React, {useState} from "react";
export const ClockFun = props => {
    const [dt, sedDt] = useState(new Date());

    return <p>{dt.toLocaleString()}</p>
};