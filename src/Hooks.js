import React, {Component, useState} from 'react';

export class Hooks extends Component {
    // Metody cyklu życia komponentu
    state = {
        count: 0,
    };

    componentDidMount() {
        console.log('Pierwsza metoda, zamontowanie komponentu w DOM');

        setInterval(() => {
            this.setState(prev => ({
                count: prev.count + 1,
            }))
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Aktualizacja ...');
    }

    render() {
        const {name} = this.state;

        console.log('Renderowanie...');

        return <h1>{name}</h1>;
    }
}

