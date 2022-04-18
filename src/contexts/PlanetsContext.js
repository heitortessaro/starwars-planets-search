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
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const { results } = await fetchPlanets();
    this.setState({ planets: results, loading: false });
  }

  testePrinta = () => {
    console.log('funcionou');
  }

  filterUsingName = () => {
    const { planets, filterByName } = this.state;
    const tempData = planets.filter((planet) => planet.name.includes(filterByName.name));
    console.log(tempData);
  }

  render() {
    const { children } = this.props;
    return (
      <PlantetsContext.Provider
        value={ { ...this.state,
          testePrinta: this.testePrinta,
          getPlanets: this.getPlanets } }
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
