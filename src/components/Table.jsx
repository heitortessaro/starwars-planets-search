import React, { useContext, useEffect } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';
import tableHeader from '../services/tableHeader';

function Table() {
  const { loading, data, getPlanets } = useContext(PlantetsContext);
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <div>
      {loading && <span>Loading...</span>}
      {!loading && (
        <table>
          <thead>
            <tr>
              {tableHeader.map((item, index) => <th key={ `header${index}` }>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={ `key${planet.name}` }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>
                  <ul>
                    {planet.films.map((e, i) => (
                      <li
                        key={ `${planet.name}-film-${i}` }
                      >
                        {e}
                      </li>))}
                  </ul>
                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
