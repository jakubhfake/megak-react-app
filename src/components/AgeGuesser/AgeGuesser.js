import React, {useState} from "react";

export const AgeGuesser = prompt => {
    const [age, setAge] = useState(null);

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};