import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Filters() {
  const { savedNumericFilters, removeNumericFilter } = useContext(PlantetsContext);
  return (
    <div className="d-lg-flex flex-wrap mt-2 pb-4 justify-content-center">
      {savedNumericFilters.map((filter, index) => (
        <div
          key={ `filter${index}` }
          data-testid="filter"
          className="bg-light rounded mx-1"
        >
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={ () => removeNumericFilter(index) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;
