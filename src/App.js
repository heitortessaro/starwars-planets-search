import React from 'react';
import InputTextFilter from './components/InputTextFilter';
import Table from './components/Table';
import PlantetsContextProvider from './contexts/PlanetsContext';

function App() {
  return (
    <div className="App">
      <PlantetsContextProvider>
        <InputTextFilter />
        <Table />
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
