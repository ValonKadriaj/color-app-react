import React from 'react';
import ColorBox from './color-box';
import NavBar from './nav-bar';
import PaletteFooter from './footer';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/palette.styles';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
  }
  changeLevel = level => {
    this.setState({ level });
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { level, format } = this.state;
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const colorBox = colors[level].map(color => (
      <ColorBox
        key={color.id}
        colorId={color.id}
        paletteId={id}
        background={color[format]}
        name={color.name}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar
          level={level}
          changeFormat={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors
        />
        <div className={classes.colors}>{colorBox}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
