import React, {useEffect, useState} from "react";

export const AgeGuesser = prompt => {
    const [age, setAge] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const res = await fetch('https://api.agify.io/?name=Kunegunda');
            const data = await res.json();
            console.log(data);
            setAge(data.age);
        }
        fetchData();
    }, []);

    if (age === null) {
        return <p> Wczytywanie....</p>;
    }

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};