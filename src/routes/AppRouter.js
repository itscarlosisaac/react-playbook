import React, { useContext} from 'react'
import { 
  BrowserRouter as Router, 
  Switch 
} from 'react-router-dom'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { Login } from '../pages/Login';
import { AuthContext } from '../context/Auth/AuthContext';

export const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={user.logged}
            exact
            path="/login"
            component={Login}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  )
}
