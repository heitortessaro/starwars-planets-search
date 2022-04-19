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
      numericFilter: {
        numValue: '0',
        operator: 'maior_que',
        columns: 'population',
      },
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

  filterNumerically = () => {
    const { planets, numericFilter } = this.state;
    const { numValue, operator, columns } = numericFilter;
    const value = parseInt(numValue, 10);
    let tempData = planets;
    switch (operator) {
    case 'maior_que':
      tempData = planets.filter((p) => parseInt(p[columns], 10) > value);
      break;
    case 'menor_que':
      tempData = planets.filter((p) => parseInt(p[columns], 10) < value);
      break;
    case 'igual':
      tempData = planets.filter((p) => parseInt(p[columns], 10) === value);
      break;
    default:
      break;
    }
    this.setState({ data: tempData });
  }

  setNumericFilter = ({ target }) => {
    const { name, value } = target;
    const { numericFilter } = this.state;
    const { numValue } = numericFilter;
    // console.log(`${name}: ${value}`);
    const re = /^[-+]?\d*$/; // https://regexlib.com/Search.aspx?k=negative
    if ((name === 'numValue' && value.match(re)) || name !== 'numValue') {
      this.setState({ numericFilter: { ...numericFilter, [name]: value } });
    } else if (name === 'numValue') {
      // console.log('aqui');
      this.setState({ numericFilter: { ...numericFilter, numValue } });
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
