import React from 'react';
import PlantetsContextProvider from './contexts/PlanetsContext';

function App() {
  return (
    <div className="App">
      <PlantetsContextProvider>
        Teste
      </PlantetsContextProvider>
    </div>
  );
}

export default App;
