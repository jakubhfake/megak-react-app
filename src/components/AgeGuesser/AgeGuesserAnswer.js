import React, {useEffect, useState, useCallback} from "react";

export const AgeGuesserAnswer = props => {
    const [age, setAge] = useState(null);
    const [error, setError] = useState(null)

    // ToDo check error handling

    const fetchData = useCallback(async () => {
                
        try {
            setError(null);
            const res = await fetch(`https://api.agify.io/?name=${props.name}`);
            console.log('Response', res);
            if (res.ok === true) {
                const data = await res.json();
                // console.log(data);
                setAge(data.age);
                console.log('setAge', setAge(data.age), typeof data.age);
            }
        }
        // catch nie wykrywa błędu, dokończyć waliację
        catch (err) {
            setError('Błąd wczytywania!');

        }
    }, []);

    useEffect( () => {
        fetchData();
    }, []);

    console.log('Error', error);
    if (error) {
        return <p>{error}</p>;
    }

    if (age === null) {
        return <p> Wczytywanie....</p>;
    }

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};