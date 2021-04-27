import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch 
} from 'react-router-dom'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  const logged = false;
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={logged}
            exact
            path="/login"
            component={Login}
          />
          <PrivateRoute
            isAuthenticated={logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  )
}
