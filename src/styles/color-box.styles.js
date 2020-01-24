import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  colorBox: {
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette ? '20%' : '33.333%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.4 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.18 ? 'white' : 'black'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.4 ? 'black' : 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: ' 30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.4 ? 'black' : 'white',
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
    textDecoration: 'none',
    opacity: 0
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
    color: 'black'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '1',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0;',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      fontSize: '3rem',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '3rem'
      }
    },
    '& p': {
      fontSize: '1rem',
      fontWeight: '100'
    }
  },
  showCopyMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '20',
    transition: 'all 0.4s ease-in-out 0.3s',
    transitionDelay: '0.3s'
  }
};
