import React, {Component} from "react";
import {StringList} from "./StringList";

export class NumberList extends Component {
    state = {
        numbers: [1],
    };

    componentDidMount() {
        this.intervalID = setInterval(() => {

            this.setState( prev => {
                return {
                    numbers: [...prev.numbers, prev.numbers.length + 1],
                };
            });

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        return <StringList list={this.state.numbers}/>
    };
}