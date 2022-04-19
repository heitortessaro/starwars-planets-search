import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function NumericFilter() {
  const { setNumericFilter,
    numericFilter,
    filterNumerically } = useContext(PlantetsContext);
  const { numValue, operator, columns } = numericFilter;
  return (
    <form>
      <label htmlFor="columns">
        Columns
        <select
          data-testid="column-filter"
          id="columns"
          name="columns"
          onChange={ setNumericFilter }
          value={ columns }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operator
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="operator"
          onChange={ setNumericFilter }
          value={ operator }
        >
          <option value="maior_que">Bigger then</option>
          <option value="menor_que">Smaller then</option>
          <option value="igual">Equal to</option>
        </select>
      </label>
      <label htmlFor="number-selector">
        Value
        <input
          // type="number"
          id="number-selector"
          data-testid="value-filter"
          name="numValue"
          onChange={ setNumericFilter }
          value={ numValue }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumerically }
      >
        Filter
      </button>
    </form>
  );
}

export default NumericFilter;
