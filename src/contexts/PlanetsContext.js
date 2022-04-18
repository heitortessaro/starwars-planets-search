import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlantetsContext = createContext();

class PlantetsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teste: 'teste de texto',
      planets: [],
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const result = await fetchPlanets();
    console.log(result);
  }

  testePrinta = () => {
    console.log('funcionou');
  }

  render() {
    const { children } = this.props;
    console.log(children);
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
  children: PropTypes.arrayOf({}).isRequired,
};

export default PlantetsContextProvider;
