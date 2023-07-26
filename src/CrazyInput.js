import React, {useEffect, useState} from "react";
export const CrazyInput = props => {

    const [inputType, setInputType] = useState('password');

    useEffect(() => {
        const intervalId = setInterval(() => {

        }, 1000);

        return () => clearInterval(intervalId);
    //     tu musi być funkcja a nie return clearInterval(intervalId), ponieważ po uruchomienufunkcji id razu się ona zakończy, czyli nie będzie działało :)
    }, []);

    return <input type={props.isPwd ? 'password' : 'text'}/>
}