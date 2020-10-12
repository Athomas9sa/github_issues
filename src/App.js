import React from 'react';
import "bloomer";
import IssueList from './components/IssueList';
import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
        <IssueList message="Hallo List" />
      </div>
  );
}

export default App;
