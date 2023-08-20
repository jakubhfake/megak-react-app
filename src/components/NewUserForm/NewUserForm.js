import React, {useState} from "react";

export const NewUserForm = props => {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: 0,
    });

    const sendForm = e => {
        e.preventDefault();
        console.log(person);
    }

    const change = e => setPerson(person => ({
        ...person,
        [e.target.name]: e.target.value,
    }))

    return <form onSubmit={sendForm}>
        <p>
            <label>
                Imię:<br/>
                <input
                    type="text"
                    value={person.firstName}
                    name={"firstName"}
                    onChange={change}
                />
            </label>
        </p>
        <p>
            <label>
                Nazwisko:<br/>
                <input
                    type="text"
                    value={person.lastName}
                    name={"lastName"}
                    onChange={change}
                />
            </label>
        </p>
        <p>
            <label>
                Wiek:<br/>
                <input
                    type={"number"}
                    value={person.age}
                    name={"age"}
                    onChange={change}
                    min={0}
                />
            </label>
        </p>
        <p>
            <button type={"submit"}>Wyślij</button>
        </p>
    </form>
};