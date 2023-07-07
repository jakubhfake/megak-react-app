import React, {Component, useState} from 'react';

export class Hooks extends Component {
    state = {
        name: 'Foo',
        email: 'xxx@yyy.zzz',
    };

    render() {
        const {name} = this.state;
        setTimeout(() => {
            this.setState({
                name: 'XXX',
            })
        }, 2500);

        return <h1>{name}</h1>;
    }
}

