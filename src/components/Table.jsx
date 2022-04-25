import React, { useContext, useEffect } from 'react';
import { PlantetsContext } from '../contexts/PlanetsContext';
import tableHeader from '../services/tableHeader';
// import style from '../css/Table.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table() {
  const { loading, data, getPlanets } = useContext(PlantetsContext);
  // const { column, sort } = order;
  useEffect(() => { getPlanets(); }, [getPlanets]);
  // const sortedData = ordenation(data, column, sort);

  return (
    <div className="table-responsive-sm mt-4 px-2 pb-2">
      {loading && <span>Loading...</span>}
      {!loading && (
        <table className="table table-ligth table-hover table align-middle">
          <thead className="table-dark">
            <tr>
              {tableHeader.map((item, index) => <th key={ `header${index}` }>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={ `key${planet.name}` }>
                <td data-testid="planet-name">{planet.name}</td>
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
