import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);
    const [count,setCount] = useState(0);
    setInterval( () => {
        setCount(count => count + 1);

    }, 1000);

    return <h1>{count}</h1>;
}

