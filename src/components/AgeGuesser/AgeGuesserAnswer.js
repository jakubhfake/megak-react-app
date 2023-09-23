import React, {useEffect, useState, useCallback} from "react";

export const AgeGuesserAnswer = props => {
    const [age, setAge] = useState(null);

    // ToDo check error handling

    // const fetchData = useCallback(async () => {
    //
    //         const res = await fetch(`https://api.agify.io/?name=${props.name}`);
    //         console.log('Response', res);
    //             const data = await res.json();
    //             setAge(data.age);
    //
    // }, []);
    //
    // useEffect( () => {
    //     fetchData();
    // }, []);
    const [error, setError] = useState(null);

    useEffect( () => {
        (async () => {
            const res = await fetch(`https://api.agify.io/?namesss=${props.name}`);
            console.log('Response', res);
            const data = await res.json();
            setAge(data.age);
        })();
    }, []);

    if(error) {
        return <p>{error}</p>
    }

    if (age === null) {
        return <p> Wczytywanie....</p>;
    }

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};