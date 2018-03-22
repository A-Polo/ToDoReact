import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';
import theme from '../../theme/theme';
import ToDo from '../ToDo/ToDo';
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
    <ToDo />
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
