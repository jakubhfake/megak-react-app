import React from "react";

export const SendForm = props => {
    const prevSend = e => {
            e.preventDefault();
        };

    return <form action={""} onSubmit={prevSend}>
            <input type={'text'}/>
            <button>Wyślij</button>
    </form>;
}