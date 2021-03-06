import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function InputTextFilter() {
  const { setFilterName, filterByName } = useContext(PlantetsContext);
  const { name } = filterByName;
  // useEffect(() => filterByName, [filterByName, name]);
  return (
    <div className="input-group mx-auto w-25 mt-2 ">
      <input
        type="text"
        placeholder="Nome do Planeta"
        onChange={ setFilterName }
        value={ name }
        data-testid="name-filter"
        className="form-control"
      />
    </div>
  );
}

export default InputTextFilter;
