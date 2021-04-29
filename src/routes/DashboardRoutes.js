import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container mt-5">
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </>
  )
}
