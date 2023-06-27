import React from 'react';
import './App.css';

function checkName() {
    const name = prompt('Podaj imię.');

    return name === 'Kuba' ? 'BAN!' : name;
}

function App() {
  return (
    <>
      <header className="App-header">
          <input type="text" tabIndex={-1}/>
          <p>W nawiasy klamrowe możemy dodać dowolne wyrażenie JS, które coś zwraca np. {checkName()}.</p>
      </header>

    </>
  );
}

export default App;
