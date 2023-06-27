import React from 'react';
import './App.css';

function checkName(name) {

    return name === 'Kuba' ? <strong>'BAN!'</strong> : name;
}

function App() {
  return (
    <>
      <header className="App-header">
          <input type="text" tabIndex={-1}/>
          <p>W nawiasy klamrowe możemy dodać dowolne wyrażenie JS, które coś zwraca np. {checkName('Kuba')}, {checkName('Jakubek')}.</p>
      </header>

    </>
  );
}

export default App;
