import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';
import theme from '../../theme/theme';
import ToDoContainer from '../ToDo/ToDoContainer';
import Header from '../Header/Header';

const styles = (theme) => ({
  '@global': {
    '*': {
      'margin': 0,
      'padding': 0
    }
  },

  app: {
    background: 'rgba(196,196,196,0.1)',
    display: theme.flex,
    flexDirection: theme.direction,
    height: 100 +'vh'
  }
});

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <ToDoContainer />
  </div>
);

const StyleComp = injectSheet(styles)(App);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default () => (
  <ThemeProvider theme={theme}>
    <StyleComp/>
  </ThemeProvider>
);
