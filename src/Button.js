import React from 'react';

export const Button = props => {
    const clicked = event => {
        // event.preventDefault();
      alert('Kicknięto mnie!');
    };

    return <button onClick={clicked}>Kick me if you can!</button>
}