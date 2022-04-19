import React from 'react';
import InputTextFilter from './components/InputTextFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import Filter from './components/Filter';
import PlantetsContextProvider from './contexts/PlanetsContext';
import Ordenation from './components/Ordenation';

function App() {
  return (
    <div className="App">
      <PlantetsContextProvider>
        <InputTextFilter />
        <NumericFilter />
        <Ordenation />
        <Filter />
        <Table />
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
