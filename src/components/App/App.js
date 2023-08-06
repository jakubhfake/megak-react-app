import React from 'react';
import './App.css';
import {data} from '../../data/data.json';
import {UsersList} from '../UsersList/UsersList';

export const App = props => {
    return <UsersList users={data}/>
};

