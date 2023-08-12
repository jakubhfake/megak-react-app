import React from 'react';
import './App.css';
import {data} from '../../data/data.js';
import {UsersList} from '../UsersList/UsersList';
import {ControlledForm} from "../Form/ControlledForm";

export const App = props => {
    return <>
        <ControlledForm/>
        <UsersList users={data}/>
    </>

};

