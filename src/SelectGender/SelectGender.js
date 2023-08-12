import React, {useState} from "react";

export const SelectGender = props => {
    const [gender, setGender] = useState('');

    const sendForm = e => {
        e.preventDefault();
        console.log(gender);
    };

    return <form onSubmit={sendForm}>
        <select name={"gender"}>
            <option value={""}>-select-</option>
            <option value={"W"}>Woman</option>
            <option value={"M"}>Men</option>
        </select>
        <p>Please select yours gender.</p>
    </form>
};