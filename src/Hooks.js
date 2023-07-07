import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);

    const [name, setName] = useState('Foo');

    setTimeout( () => {
        setName('Bar')}, 2500);


    return <h1>{name}</h1>;
}

