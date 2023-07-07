import React from 'react';
import {StringList} from "./StringList";
import {RecordCount} from "./RecordsCount";
import {Hooks} from "./Hooks";

export const Participant = (props) => {
    const names = props.list
        .map(person => person.name);

    return <>
        <StringList list={names}/>
        <RecordCount count={names.length}/>
        <Hooks/>
    </>;
    
}

