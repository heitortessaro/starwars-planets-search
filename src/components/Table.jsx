import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Table() {
  const { teste, getPlanets } = useContext(PlantetsContext);
  return (
    <div>
      <button type="button" onClick={ getPlanets }>{teste}</button>
    </div>
  );
}

export default Table;
