import React, {Component, useState} from 'react';

export class Hooks extends Component {
    // Metody cyklu życia komponentu
    state = {
        name: 'Foo',
        email: 'xxx@yyy.zzz',
    };

    componentDidMount() {
        console.log('Pierwsza metoda, zamontowanie komponentu w DOM');

        setTimeout(() => {
            this.setState({
                name: 'XXX',
            })
        }, 2500);
    }

    componentDidUpdate() {
        console.log('Ponownie wyrenderowano komponent');
    }

    componentWillUnmount() {
        console.log('Odmontowywanie komponentu');
    }

    render() {
        const {name} = this.state;

        console.log('Renderowanie...');

        return <h1>{name}</h1>;
    }
}

