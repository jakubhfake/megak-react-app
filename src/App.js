import React from 'react';
import './App.css';
import {CrazyInput} from "./CrazyInput";

export const App = props => (
    <>
        <input type={'number'} min={0} max={100} required/>
        <input type={'text'}/>
        <div>Lalaaaallaaa aaaa!</div>
        <CrazyInput/>
        <CrazyInput isPwd/>
    </>
);

