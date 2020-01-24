import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/color-picker-form.styles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: '',
      currentColor: 'red'
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  };
  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            placeholder="Color Name"
            margin="normal"
            className={classes.colorNameInput}
            onChange={this.handleChange}
            variant="filled"
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'name already taken',
              'color already used'
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            type="submit"
            style={{
              backgroundColor: paletteIsFull ? 'grey' : currentColor,
              color: 'white'
            }}
            className={classes.addColor}
          >
            {paletteIsFull ? 'Palette is Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default withStyles(styles)(ColorPickerForm);
