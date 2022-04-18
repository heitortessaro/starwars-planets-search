import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const PlantetsContext = createContext();

class PlantetsContextProvider extends Component {
  state = {
    teste: 'teste',
  };

  testePrinta = () => {
    console.log('funcionou');
  }

  render() {
    const { children } = this.props;
    return (
      <PlantetsContext.Provider
        value={ { ...this.state, testePrinta: this.testePrinta } }
      >
        {children}
      </PlantetsContext.Provider>
    );
  }
}

PlantetsContextProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlantetsContextProvider;
