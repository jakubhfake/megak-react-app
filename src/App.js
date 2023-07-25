import React, {Component, useState} from 'react';
import './App.css';
import {NumberList} from "./NumberList";
import {Clock} from "./Clock";

export const App = props => (
    <>
        <Clock/>
        <NumberList/>
    </>
);

