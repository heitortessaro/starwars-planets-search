import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Ordenation() {
  const { columnsOption, UpdateOrdenationConfig } = useContext(PlantetsContext);

  return (
    <form>
      <label htmlFor="ordernation">
        Ordenar
        <select
          name="column"
          id="ordernation"
          data-testid="column-sort"
          onChange={ UpdateOrdenationConfig }
        >
          {columnsOption.map((element) => (
            <option key={ `order-by-${element}` } value={ element }>{element}</option>
          ))}
        </select>
      </label>
      <div>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort"
          value="ASC"
          onClick={ UpdateOrdenationConfig }
        />
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort"
          value="DESC"
          onClick={ UpdateOrdenationConfig }
        />
        Descendente
      </div>
      <button data-testid="column-sort-button" type="button">
        Ordenar
      </button>
    </form>
  );
}

export default Ordenation;
