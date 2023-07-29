import React from 'react';

export const LinkButton = props => {
    const clicked = event => {
        // event.preventDefault();
      alert('Kicknięto mnie!');
    };

    return (<a href={'https://www.43time.pl'}>
        <button onClick={clicked}>43time link!</button>
    </a>);
}