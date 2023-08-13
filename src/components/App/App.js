import React from 'react';
import './App.css';
import {data} from '../../data/data.js';
import {UsersList} from '../UsersList/UsersList';
import {ControlledForm} from "../Form/ControlledForm";
import {SelectGender} from "../../SelectGender/SelectGender";
import {CheckBox} from "../CheckBox/CheckBox";
import {ColorBox} from "../ColorBox/ColorBox";

export const App = props => {
    return <>
        <ColorBox/>
        <ControlledForm/>
        <SelectGender/>
        <CheckBox/>
        <UsersList users={data}/>
    </>

};


