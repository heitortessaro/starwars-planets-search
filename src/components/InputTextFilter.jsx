import React, { useContext } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function InputTextFilter() {
  const { setFilterName, filterByName } = useContext(PlantetsContext);
  const { name } = filterByName;
  // useEffect(() => filterByName, [filterByName, name]);
  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Planeta"
        onChange={ setFilterName }
        value={ name }
        data-testid="name-filter"
      />
    </div>
  );
}

export default InputTextFilter;
