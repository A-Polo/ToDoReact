import theme from '../../../theme/theme';

export default {
  container: {
    maxWidth: 960,
    margin: [0, 'auto'],
    padding: [0, theme.baseSpace],
    boxSizing: 'border-box'
  },

  content: {
    width: 50 + '%',
    margin: [0, 'auto']
  },

  wrap: {
    display: theme.flex,
    flexDirection: theme.direction,
    alignItems: 'center',
    paddingTop: theme.baseSpace
  },

  input: {
    height: 40,
    lineHeight: 40 + 'px',
    padding: [0, theme.baseSpace],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colorBase,
    width: 100 + '%',
    boxSizing: 'border-box',
    outline: 'none'
  },

  buttonWrap: {
    paddingTop: theme.baseSpace
  },

  button: {
    backgroundColor: theme.buttonColor,
    color: theme.white,
    textTransform: 'uppercase',
    padding: [10, 45],
    border: 'none',
    outline: 'none'
  },

  todoList: {
    paddingTop: theme.baseSpace,
    listStyle: 'none'
  }
};
