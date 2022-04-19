import React from 'react';
import InputTextFilter from './components/InputTextFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlantetsContextProvider from './contexts/PlanetsContext';

function App() {
  return (
    <div className="App">
      <PlantetsContextProvider>
        <InputTextFilter />
        <NumericFilter />
        <Table />
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
