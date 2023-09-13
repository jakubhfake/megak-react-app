import React, {useState} from "react";

export const SelectGender = props => {
    const [gender, setGender] = useState('M');

    const sendForm = e => {
        e.preventDefault();
        console.log(gender);
    };

    return <form onSubmit={sendForm}>
        <select
            name={"gender"}
            value={gender}
            onChange={e => setGender(e.target.value)}
        >
            <option value={""}>-select-</option>
            <option value={"W"}>Woman</option>
            <option value={"M"}>Man</option>
        </select>
        <p>Please select yours gender.</p>
    </form>
};