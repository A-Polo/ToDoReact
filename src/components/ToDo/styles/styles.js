import theme from '../../../theme/theme';

export default {
  container: {
    maxWidth: 960,
    margin: [0, 'auto'],
    padding: [0, 15],
    boxSizing: 'border-box'
  },

  wrap: {
    display: theme.flex,
    flexDirection: theme.direction,
    alignItems: 'center',
    paddingTop: 15
  },

  input: {
    height: 40,
    lineHeight: 40 + 'px',
    padding: [0, 15],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colorBase,
    width: 50 + '%'
  },

  buttonWrap: {
    paddingTop: 15
  },

  button: {
    backgroundColor: theme.buttonColor,
    color: theme.white,
    textTransform: 'uppercase',
    padding: [10, 45],
    border: 'none'
  }
};
