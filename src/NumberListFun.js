import React, {Component, useEffect, useState} from "react";
import {StringList} from "./StringList";

// TODO: spróbować dodać propsy do sterowania od jakiej cyfry zaczynamy i jakie jest opóźnienie w wyświetlaniu
export const NumberList = props => {
    const [numbers, setNumbers] = useState([1]);

    useEffect(() => {
        const intervalID = setInterval(() => {

            setNumbers(numbers => [...numbers, numbers.length + 1])

        }, 1000);

        return () => clearInterval(intervalID);

    }, []);

    return <StringList list={numbers}/>

}