import React, {Component} from 'react';

export const Participant = (props) => {

    return(
        <p>{props.list
            .map(person => person.name)
            .join(', ')}</p>
    );
}

