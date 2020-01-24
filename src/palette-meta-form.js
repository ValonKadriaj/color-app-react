import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      open: true,
      stage: 'form'
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
      this.props.palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase()
      )
    );
  }
  handleChange = event => {
    this.setState({ newPaletteName: event.target.value });
  };

  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' });
  };
  savePalette = emoji => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
  };
  render() {
    const { newPaletteName, stage } = this.state;
    const { hiddeForm } = this.props;
    return (
      <div>
        <Dialog onClose={hiddeForm} open={stage === 'emoji'}>
          <DialogTitle>Chose a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={hiddeForm}
        >
          <DialogTitle>Chose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContentText>
              Please enter a name for your new beautiful palette
            </DialogContentText>
            <DialogContent>
              <TextValidator
                name="newPaletteName"
                onChange={this.handleChange}
                value={newPaletteName}
                margin="normal"
                fullWidth
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'enter palette name',
                  'palette name already used'
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hiddeForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
