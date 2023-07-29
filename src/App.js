import React from 'react';
import './App.css';
import {ProgressBar} from "./ProgressBar";
import {AnimatedProgressBar} from "./AnimatedProgressBar";
import {Button} from "./Button";

export const App = props => (
    <>
            <div style={{backgroundColor: 'cadetblue'}}>Lalaaa aaa!!!</div>
        {/*<CrazyInput/>*/}
        <ProgressBar percentage={10}/>
        <ProgressBar percentage={25}/>
        <ProgressBar percentage={50}/>
        <ProgressBar percentage={75}/>
        <ProgressBar percentage={100}/>
        <AnimatedProgressBar/>
        <Button></Button>
    </>
);

