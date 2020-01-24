export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid black',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1'
    }
  },
  colors: {
    backgroundColor: 'grey',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    margin: '0',
    paddingTop: '0.5rem',
    fontSize: '1.5rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3px'
  },
  deleteIcon: {
    width: '20px',
    color: 'white',
    backgroundColor: '#eb3d30',
    zIndex: '10',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    opacity: '0'
  }
};
