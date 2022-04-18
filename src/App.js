import React from 'react';
import Table from './components/Table';
import PlantetsContextProvider from './contexts/PlanetsContext';

function App() {
  return (
    <div className="App">
      <PlantetsContextProvider>
        Teste
        <Table />
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
