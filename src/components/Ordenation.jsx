import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Ordenation() {
  const { columnsOption } = useContext(PlantetsContext);

  return (
    <form>
      <label htmlFor="ordernation">
        Ordenar
        <select id="ordernation" data-testid="column-sort">
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
        />
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort"
          value="DESC"
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
