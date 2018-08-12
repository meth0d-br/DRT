import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button/Button';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import appActions from './actions/appActions';
import LandingPage from './views/LandingPage';

import themes from './themes/themes';

const theme = createMuiTheme(themes.default);

const PrivateRoute = ({ component: Component, ...rest }: any) => (

  <Route {...rest} render={(props) => (

    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />

);

const App = props => {

  const actionCallback = () => {
    return props.dispatch(appActions.clearMessaging());
  }

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <main>
              <Switch>
                <Route exact path='/' component={LandingPage} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
        <Snackbar open={props.message ? true : false}
                  message={props.message}
                  autoHideDuration={6000}
                  action={<Button onClick={actionCallback} color="secondary" size="small">Dismiss</Button>}
                  onClose={actionCallback} />
      </MuiThemeProvider>
    </React.Fragment>
  )

}

export { App as App };
