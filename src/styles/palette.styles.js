import sizes from './sizes';

export default {
  palette: {
    height: '100vh',
    overflow: 'hidden'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    height: '50%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '0.8rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      cursor: ' pointer',
      textDecoration: 'none'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.333%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    }
  }
};
