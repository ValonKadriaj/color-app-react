import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/draggable-color-box.styles';

const DraggableColorBox = SortableElement(props => (
  <div className={props.classes.root} style={{ backgroundColor: props.color }}>
    <div className={props.classes.colorBox}>
      <span>{props.name}</span>
      <DeleteIcon
        className={props.classes.deleteIcon}
        onClick={props.handleClick}
      />
    </div>
  </div>
));
export default withStyles(styles)(DraggableColorBox);
