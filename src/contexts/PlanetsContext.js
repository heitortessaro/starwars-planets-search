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
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const { results } = await fetchPlanets();
    // console.log(results);
    this.setState({ planets: results, loading: false });
  }

  testePrinta = () => {
    console.log('funcionou');
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
