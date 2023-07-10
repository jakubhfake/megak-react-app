import React, {Component, useState} from 'react';

export class Hooks extends Component {
    // Metody cyklu życia komponentu
    state = {
        name: 'Foo',
        email: 'xxx@yyy.zzz',
    };

    componentDidMount() {
        console.log('Pierwszametoda, zamontowanie komponentu w DOM')
    }

    componentWillUnmount() {
        console.log('Odmontowywanie komponentu');
    }

    componentDidUpdate() {
        console.log('Ponownie wyrenderowano komponent');
    }

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

