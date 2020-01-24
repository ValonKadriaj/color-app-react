import React, { Component } from 'react';
import Palette from './palette';
import seedColors from './seed-colors';
import { generatePalette } from './color-helpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './palette-list';
import SingleColorPalette from './single-color-palette';
import NewPaletteFrom from './new-palette-form';

class App extends Component {
  constructor(props) {
    super(props);
    const savePalete = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savePalete || seedColors
    };
  }
  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };
  deletePalette = id => {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  };
  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };
  syncLocalStorage() {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteFrom
              palettes={this.state.palettes}
              {...routeProps}
              savePalette={this.savePalette}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList
              deletePalette={this.deletePalette}
              paletteList={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          render={routeProps => (
            <PaletteList
              deletePalette={this.deletePalette}
              paletteList={this.state.palettes}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
