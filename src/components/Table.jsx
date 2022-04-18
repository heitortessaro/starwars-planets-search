import React, { useContext, useEffect } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';

function Table() {
  const { loading, planets, testePrinta, getPlanets } = useContext(PlantetsContext);
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <div>
      <button type="button" onClick={ testePrinta }>teste</button>
      {loading && <span>Loading...</span>}
      {!loading && (
        <>
          {planets.map((planet) => (
            <div key={ planet.name }>
              <span>{planet.name}</span>
              <br />
            </div>
          ))}

        </>

      )}
    </div>
  );
}

export default Table;
