import React, {useEffect, useState} from "react";
export const CrazyInput = props => {

    const [backgroundColor, setBackgroundColor] = useState('yellow');

    useEffect(() => {
         const intervalId = setInterval(() => {
            setBackgroundColor(inputType => (backgroundColor === 'yellow' ? 'cadetblue' : 'yellow'))
            console.log('color is changing');
        }, 1000);

        return () => clearInterval(intervalId);
    //     tu musi być funkcja a nie return clearInterval(intervalId), ponieważ po uruchomienufunkcji id razu się ona zakończy, czyli nie będzie działało :)
    }, [backgroundColor]);

    return <input type={"password"} style={{backgroundColor}}/>
}