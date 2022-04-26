import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';
import '../App.css';

function Ordenation() {
  const {
    columnsOption,
    UpdateOrdenationConfig,
    ordenation } = useContext(PlantetsContext);

  return (
    <form className="mx-auto  ">
      <label htmlFor="ordernation">
        <span className="text-light fw-bold bg-black rounded px-1"> Ordenar </span>
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
        <label className="form-check-label bg-light p-1 rounded" htmlFor="asc">
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
        <label className="form-check-label bg-light p-1 rounded" htmlFor="desc">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="sort"
            value="DESC"
            onClick={ UpdateOrdenationConfig }
            className="form-check-input "
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
