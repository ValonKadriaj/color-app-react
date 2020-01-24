import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import styles from './styles/nav-bar.styles';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
  }
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.changeFormat(e.target.value);
  };
  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { changeLevel, level, showingAllColors, classes } = this.props;
    const { format, open } = this.state;

    return (
      <header className={classes.navBar}>
        <div className={classes.logo}>
          <Link to="/">Color Picer</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">rgb - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">rgba - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">Fromat Change To {format.toUpperCase()}</span>
          }
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              key="close"
              onClick={this.closeSnackbar}
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
export default withStyles(styles)(NavBar);
