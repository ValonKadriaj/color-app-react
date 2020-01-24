import sizes from './sizes';

export default {
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6%'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    fontFamily: "'Roboto', sans-serif",
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: '#111111'
    },
    [sizes.down('sm')]: {
      display: 'none'
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle,  .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover ': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    [sizes.down('sm')]: {
      width: '150px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};
