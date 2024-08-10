import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Practice Projects</h1>
      </header>
      <main>
        <ProjectList />
      </main>
    </div>
  );
}

export default App;
