import React, {Component} from 'react';

export class Counter extends Component {
    // Metody cyklu życia komponentu
    state = {
        count: 0,
    };

    componentDidMount(){
        // counter jest liczony co dwa i jak narazie nie wiem o co chodzi, gdzie jest błąd
        // problemem w tym przypadku jest opakowanie komponenty APP w pliku index.je w <React.StrictMode>
        const {count} = this.state;
        console.log(`Pierwsza metoda, zamontowanie komponentu w DOM ${count}`);

        setInterval(() => {
            this.setState(prev => ({
                count: prev.count + 1,
            }));
        }, 1000);
    }

    componentDidUpdate() {
        console.log(`Aktualizacja ... ${this.state.count}`);
    }


    render() {
        const {count} = this.state;

        console.log(`Renderowanie... ${count}`);

        return <h1>{count}</h1>;
    }
}

