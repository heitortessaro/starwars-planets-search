import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Filters() {
  const { savedNumericFilters, removeNumericFilter } = useContext(PlantetsContext);
  return (
    <>
      {savedNumericFilters.map((filter, index) => (
        <div key={ `filter${index}` } data-testid="filter">
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button type="button" onClick={ () => removeNumericFilter(index) }> X </button>
        </div>
      ))}
    </>
  );
}

export default Filters;
