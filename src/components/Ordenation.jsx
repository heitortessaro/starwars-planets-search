import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Ordenation() {
  const {
    columnsOption,
    UpdateOrdenationConfig,
    ordenation } = useContext(PlantetsContext);

  return (
    <form className="mx-auto  ">
      <label htmlFor="ordernation">
        Ordenar
        <select
          name="column"
          id="ordernation"
          data-testid="column-sort"
          onChange={ UpdateOrdenationConfig }
          className="form-select "
        >
          {columnsOption.map((element) => (
            <option key={ `order-by-${element}` } value={ element }>{element}</option>
          ))}
        </select>
      </label>
      <div className="form-check form-check-inline ms-3">
        <label className="form-check-label" htmlFor="asc">
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            name="sort"
            value="ASC"
            onClick={ UpdateOrdenationConfig }
            className="form-check-input"
            id="asc"
          />
          Ascendente
        </label>
      </div>
      <div className="form-check form-check-inline ">
        <label className="form-check-label" htmlFor="desc">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="sort"
            value="DESC"
            onClick={ UpdateOrdenationConfig }
            className="form-check-input"
            id="desc"
          />
          Descendente
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ ordenation }
        className="btn btn-success ms-2"
      >
        Ordenar
      </button>
    </form>
  );
}

export default Ordenation;
