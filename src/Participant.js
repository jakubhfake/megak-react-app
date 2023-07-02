import React, {Component} from 'react';

export const Participant = (props) => {
    const names = props.list
        .map(person => person.name)
        .join(', ');

    return <p>{names}</p>;
}

