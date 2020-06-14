import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

function App() {
  const findPalette = (id) => {
    return seedPalettes.find((palette) => palette.id === id);
  };
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
