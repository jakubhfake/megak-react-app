import React, {Component, useState} from 'react';

export class Hooks extends Component {
    state = {
        name: 'Foo',
        email: 'xxx@yyy.zzz',
    };

    render() {

        setTimeout(() => {
            this.setState({
                name: 'XXX',
            })
        }, 2500);

        return <h1>{this.state.name}</h1>;
    }
}

