import React from 'react'
import { Link } from 'react-router-dom'


export const Welcome = () => {
  return (
    <div className="app__welcome">
      <div className="app__welcome--message">
        <h1>React Playbook</h1>
        <h3>Welcome, thank you for visiting.</h3>
        <button>Get Started</button>
        <hr />
        <div className="app__welcome--list">
          <h4>Here is the detailed list of the components.</h4>
          <ul>
            <li>Property Card <Link to="/component/property-card">[Link]</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
