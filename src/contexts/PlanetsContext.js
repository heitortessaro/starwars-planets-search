import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlantetsContext = createContext();

// const INITIAL_NUMERIC_FILTER_CONFIG = {
//   column: 'default',
//   comparison: 'default',
//   value: '0' };

class PlantetsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      planets: [],
      data: [],
      filterByName: {
        name: '',
      },
      filterByNumericValues: {
        column: 'population',
        comparison: 'maior que',
        value: '0' },
      columnsOption:
        ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
      savedNumericFilters: [],
      order: {
        column: 'population',
        sort: 'ASC',
      },
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const { results } = await fetchPlanets();
    // localCompare: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    const orderedResults = results.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ planets: orderedResults, data: orderedResults, loading: false });
  }

  UpdateOrdenationConfig = ({ target }) => {
    const { name, value } = target;
    const { order } = this.state;
    this.setState({ order: { ...order, [name]: value } });
  };

  ordenation = () => {
    const { planets, order } = this.state;
    const { column, sort } = order;
    const unknownObjects = planets.filter((e) => e[column] === 'unknown');
    const kwonObjects = planets.filter((e) => e[column] !== 'unknown');
    const sortedData = kwonObjects.sort((a, b) => {
      const var1 = a[column] === 'unknown' ? 0 : parseInt(a[column], 10);
      const var2 = b[column] === 'unknown' ? 0 : parseInt(b[column], 10);
      return sort === 'ASC' ? var1 - var2 : var2 - var1;
    });
    this.setState({ data: [...sortedData, ...unknownObjects] });
  };

  filterUsingName = () => {
    const { planets, filterByName } = this.state;
    if (filterByName.name === '') {
      this.setState({ data: planets });
    } else {
      const tempData = planets
        .filter((planet) => planet.name.includes(filterByName.name));
      this.setState({ data: tempData });
    }
  }

  setFilterName = ({ target }) => {
    const { value } = target;
    const { filterByName } = this.state;
    // inspired by: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
    this.setState({ filterByName: { ...filterByName, name: value } },
      () => this.filterUsingName());
  }

  addNumericFilter = () => {
    const { filterByNumericValues, savedNumericFilters } = this.state;
    this.setState(
      { savedNumericFilters: [...savedNumericFilters, filterByNumericValues] },
      // filterByNumericValues: INITIAL_NUMERIC_FILTER_CONFIG },
      () => this.filterNumerically(),
    );
  }

  removeNumericFilter = (index) => {
    const { savedNumericFilters } = this.state;
    const tempData = savedNumericFilters.filter((filter, ind) => index !== ind);
    this.setState({ savedNumericFilters: tempData }, () => this.filterNumerically());
  }

  removeAllNumericFilters = () => {
    this.setState({ savedNumericFilters: [] }, () => this.filterNumerically());
  }

  applyNumericFilter = (data, filterInfo) => {
    const { value, comparison, column } = filterInfo;
    const numValue = parseInt(value, 10);
    let tempData = data;
    switch (comparison) {
    case 'maior que':
      tempData = data.filter((p) => parseInt(p[column], 10) > numValue);
      break;
    case 'menor que':
      tempData = data.filter((p) => parseInt(p[column], 10) < numValue);
      break;
    case 'igual a':
      tempData = data.filter((p) => parseInt(p[column], 10) === numValue);
      break;
    default:
      break;
    }
    return tempData;
  }

  filterNumerically = () => {
    const { planets, savedNumericFilters } = this.state;
    let tempData = planets;
    savedNumericFilters.forEach((filter) => {
      tempData = this.applyNumericFilter(tempData, filter);
    });
    this.setState({ data: tempData });
  }

  setNumericFilter = ({ target }) => {
    const { name, value } = target;
    const { filterByNumericValues } = this.state;
    const { value: numValue } = filterByNumericValues;
    // console.log(`${name}: ${value}`);
    const re = /^[-+]?\d*$/; // https://regexlib.com/Search.aspx?k=negative
    if ((name === 'value' && value.match(re)) || name !== 'value') {
      this.setState({ filterByNumericValues:
        { ...filterByNumericValues, [name]: value } });
    } else if (name === 'value') {
      // console.log('aqui');
      this.setState({ filterByNumericValues:
        { ...filterByNumericValues, value: numValue } });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <PlantetsContext.Provider
        value={ { ...this.state,
          testePrinta: this.testePrinta,
          getPlanets: this.getPlanets,
          setFilterName: this.setFilterName,
          setNumericFilter: this.setNumericFilter,
          filterNumerically: this.filterNumerically,
          addNumericFilter: this.addNumericFilter,
          removeNumericFilter: this.removeNumericFilter,
          removeAllNumericFilters: this.removeAllNumericFilters,
          UpdateOrdenationConfig: this.UpdateOrdenationConfig,
          ordenation: this.ordenation } }
      >
        {children}
      </PlantetsContext.Provider>
    );
  }
}

PlantetsContextProvider.propTypes = {
  // children: PropTypes.arrayOf({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default PlantetsContextProvider;
