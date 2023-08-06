import React from 'react';
import {StringList} from "./components/StringList/StringList";
import {RecordCount} from "./components/RecordsCount/RecordsCount";
import {Counter} from "./components/Counter/Counter";

export const Participant = (props) => {
    const names = props.list
        .map(person => person.name);

    return <>
        <StringList list={names}/>
        <RecordCount count={names.length}/>
        <Counter/>
    </>;
    
}

