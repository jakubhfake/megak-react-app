import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
          <input type="text" tabIndex={-1}/>
        <p contentEditable={true}>Za pomocą nawiasów klamrowych, do JSX można przekazać wyrażenie JS.</p>
      </header>
            <p>W nawiasy klamrowe możemy dodać dowolne wyrażenie JS, które coś zwraca np. {2+3} daje man 5.</p>
    </>
  );
}

export default App;
