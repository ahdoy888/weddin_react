import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
// import Post from '../components/Posts/Posts';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ProfileContainer from '../containers/ProfileContainer';
import PostsContainer from '../containers/PostsContainer';

const Routes = ({ setCurrentUser, history, currentUser }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      currentUser
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/register' component={ Register } />
      <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} history={history} />} />
      <PrivateRoute path='/profile' component={ ProfileContainer } />
      <PrivateRoute path='/posts' component={ PostsContainer } />
    </Switch>
  );
};

export default withRouter(Routes);
