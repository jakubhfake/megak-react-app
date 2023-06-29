import React, {Component} from 'react';
import './App.css';

    const guests = ['Julia', 'Jan', 'Julian', 'Jakub', 'Joanna'];

export class App extends Component {
    render() {
        return (
            <>
                <header className="App-header">
                    <h1>Hello, World!</h1>
                    <p>Hello from {guests.join(', ')}.</p>
                </header>
            </>
        );
    }
}

