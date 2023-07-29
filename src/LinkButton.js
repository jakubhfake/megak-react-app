import React from 'react';

export const LinkButton = props => {
    const clicked = event => {
        // event.preventDefault();
      alert('Kicknięto mnie!');
    };

    return (<form>
        <button  formAction={'https://www.43time.pl'} onClick={clicked}>43time link!</button>
    </form>);
}