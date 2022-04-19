import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlantetsContext = createContext();

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
        value: '0',
      },
      savedNumericFilters: [],

    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const { results } = await fetchPlanets();
    this.setState({ planets: results, data: results, loading: false });
  }

  testePrinta = () => {
    console.log('funcionou');
  }

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
    this.setState({ savedNumericFilters: [...savedNumericFilters,
      filterByNumericValues] });
  }

  filterNumerically = () => {
    const { planets, filterByNumericValues } = this.state;
    const { value, comparison, column } = filterByNumericValues;
    const numValue = parseInt(value, 10);
    let tempData = planets;
    switch (comparison) {
    case 'maior que':
      tempData = planets.filter((p) => parseInt(p[column], 10) > numValue);
      break;
    case 'menor que':
      tempData = planets.filter((p) => parseInt(p[column], 10) < numValue);
      break;
    case 'igual a':
      tempData = planets.filter((p) => parseInt(p[column], 10) === numValue);
      break;
    default:
      break;
    }
    this.setState({ data: tempData }, () => this.addNumericFilter());
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
          filterNumerically: this.filterNumerically } }
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
