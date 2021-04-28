import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )
}
