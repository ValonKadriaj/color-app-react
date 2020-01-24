import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-6px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '8%'
    }
  },
  colorBox: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
    color: props =>
      chroma(props.color).luminance() <= 0.18 ? 'white' : 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

export default styles;
