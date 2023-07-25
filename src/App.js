import React, {Component, useState} from 'react';
import './App.css';
import {NumberList} from "./NumberList";
import {ClockFun} from "./ClockFun";

export const App = props => (
    <>
        <ClockFun/>
        <NumberList/>
    </>
);

