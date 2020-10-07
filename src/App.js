import React from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import { TestData } from "./TestData";
function App() {

  return (
    <div className="App">
      <Dashboard
        testData={TestData} />
    </div>
  );
}

export default App;
