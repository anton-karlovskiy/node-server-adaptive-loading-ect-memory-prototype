
import React from 'react';

import ModelViewer from './components/ModelViewer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="root-frame">
          <ModelViewer model='78f50fd5859746a6bdb611c867dd0229' />
        </div>
      </header>
    </div>
  );
};

export default App;
