import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function NumericFilter() {
  const { setNumericFilter,
    filterByNumericValues,
    addNumericFilter,
    columnsOption,
    savedNumericFilters,
    removeAllNumericFilters } = useContext(PlantetsContext);

  const { value, comparison, column } = filterByNumericValues;

  const options = columnsOption.filter((element) => {
    let check = true;
    savedNumericFilters.forEach((filter) => {
      if (filter.column === element) check = false;
    });
    return check;
  });

  return (
    <form className="mx-auto">
      <label htmlFor="column">
        Columns
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ setNumericFilter }
          value={ column }
          className="form-select"
          // defaultValue="test"
          // defaultValue="default"
        >
          {/* <option value="" disabled selected>Selecione...</option> */}
          {/* <option value="default" disabled hidden>Choose here</option> */}
          {options.map((element) => (
            <option key={ `select${element}` } value={ element }>{element}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison" className="ms-2">
        Operator
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ setNumericFilter }
          value={ comparison }
          className="form-select"
        >
          {/* <option value="default" disabled hidden>Choose here</option> */}
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="number-selector" className="ms-2">
        Value
        <input
          type="number"
          id="number-selector"
          data-testid="value-filter"
          name="value"
          onChange={ setNumericFilter }
          value={ value }
          className="form-control"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addNumericFilter }
        className="btn btn-success ms-2"
      >
        Filter
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllNumericFilters }
        className="btn btn-secondary ms-2"
      >
        Remover Filtros
      </button>
    </form>
  );
}

export default NumericFilter;
