import React, {useState} from "react";

export const NewUserForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    return <form>
        <p>
            <label>
                Imię:<br/>
                <input type="text"/>
            </label>
        </p>
        <p>
            <label>
                Nazwisko:<br/>
                <input type="text"/>
            </label>
        </p>
        <p>
            <label>
                Wiek:<br/>
                <input type="number" min={0}/>
            </label>
        </p>
    </form>
};