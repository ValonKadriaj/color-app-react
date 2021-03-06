import React from 'react';
import ColorBox from './color-box';
import NavBar from './nav-bar';
import PaletteFooter from './footer';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/palette.styles';
class SingleColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
  }
  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { format } = this.state;
    const { emoji, paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const colorBox = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar changeFormat={this.changeFormat} showingAllColors={false} />

        <div className={classes.colors}>
          {colorBox}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
