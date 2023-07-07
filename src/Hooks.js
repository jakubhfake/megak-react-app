import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);
    const [thingToDo,setThingToDo] = useState('koncentacja');

    return <>
        <h1>Zabawa hook'ami</h1>
        {thingToDo}
    </>;
}

