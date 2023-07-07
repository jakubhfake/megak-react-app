import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);

    const [person, setPerson] = useState({
        name: 'Ciekawe jakieś imię',
        lastName: 'Kowalski jak zwykle',
    });

    setTimeout( () => {
        setPerson(person => {
            person.name = 'Jakub';
            return person;
        //     jest to zmiana obiektu przez referencje, a ny nie możemy zmieniać stanu wyjściowego!
        })
    }, 2500);


    return <h1>{person.name}</h1>;
}

