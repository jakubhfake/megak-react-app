import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);
    const [count,setCount] = useState(0);
    setTimeout( () => {
        setCount(5)
    }, 5000);

    return <>
        <h1>Zabawa hook'ami</h1>
        {count}
    </>;
}

