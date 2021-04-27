import React from 'react'
import { AppLogo } from '../components/common/AppLogo'

export const Login = () => {
  return (
    <div className="app__screen app__screen--login">
      <AppLogo />
      <form className="app__form app__form--login">
        <header className="app__form--login--header">
          <h3>Welcome to Storybook</h3>
          <p>Enter your credentials to access your account. </p>
        </header>
        
        <div className="app__form--control">
          <label htmlFor="username">Username</label>
          <input
            autoComplete="off"
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="app__form--control">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="off"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="app__form--control">
          <button type="submit">Sign in</button>
        </div>
        <p className="app__form--login--note">
          <span>Anything is fine, there's validation</span>
        </p>
      </form>

      <div className="app__form--login--footer">
        <small>
          Forgot your password? <a href="#" className="">Reset Password</a>
        </small>
      </div>
      
    </div>
  )
}
