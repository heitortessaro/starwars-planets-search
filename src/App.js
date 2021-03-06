import React from 'react';
import InputTextFilter from './components/InputTextFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import Filter from './components/Filter';
import PlantetsContextProvider from './contexts/PlanetsContext';
import Ordenation from './components/Ordenation';
import './App.css';

function App() {
  return (
    <div>
      <PlantetsContextProvider>
        <div className="background">
          <img className="w-25 mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" alt="star wars logo" />
          <InputTextFilter />
          <div className="d-lg-flex mt-3 pb-4 justify-content-evenly">
            <NumericFilter />
            <Ordenation />
          </div>
          <Filter />
        </div>
        <Table />
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
