import React from 'react';
import './App.css';

    const guests = ['Julia', 'Jan', 'Julian', 'Jakub', 'Joanna'];

export const App = () => {
    const person = {
        firstName: 'Jakub',
        lastName:  'Haliniak',
    }

  return (
    <>
      <header className="App-header">
          <input type="text" tabIndex={-1}/>
          <p className={person.firstName}>W nawiasy klamrowe możemy dodać dowolne wyrażenie JS, które coś zwraca np. Witamy rodzinę {person.lastName}: {guests.join(', ')}</p>
      </header>

    </>
  );
};

