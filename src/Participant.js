import React from 'react';
import {StringList} from "./StringList";
import {RecordCount} from "./RecordsCount";
import {Counter} from "./Counter";

export const Participant = (props) => {
    const names = props.list
        .map(person => person.name);

    return <>
        <StringList list={names}/>
        <RecordCount count={names.length}/>
        <Counter/>
    </>;
    
}

