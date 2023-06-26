import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
          <input type="text" tabIndex={-1}/>
        <p contentEditable={true}>(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate debitis dolores eligendi exercitationem incidunt quaerat quos unde ut! Accusamus distinctio harum laborum nobis non omnis quaerat quam recusandae sunt.</p>
      </header>
            <p>Zwracamy w React tylko jeden element</p>
            </>
  );
}

export default App;
