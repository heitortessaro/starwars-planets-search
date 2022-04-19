import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function NumericFilter() {
  const { setNumericFilter,
    filterByNumericValues,
    addNumericFilter } = useContext(PlantetsContext);
  const { value, comparison, column } = filterByNumericValues;
  return (
    <form>
      <label htmlFor="column">
        Columns
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ setNumericFilter }
          value={ column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operator
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ setNumericFilter }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="number-selector">
        Value
        <input
          type="number"
          id="number-selector"
          data-testid="value-filter"
          name="value"
          onChange={ setNumericFilter }
          value={ value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addNumericFilter }
      >
        Filter
      </button>
    </form>
  );
}

export default NumericFilter;
