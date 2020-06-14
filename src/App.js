import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual palette</h1>}
      />
    </Switch>
    //<div>
    //<Palette palette={generatePalette(seedPalettes[4])} />
    //</div>
  );
}

export default App;
