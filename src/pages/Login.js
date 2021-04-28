import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AppLogo } from '../components/common/AppLogo'
import { AuthContext } from '../context/Auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { types } from '../types/types';



export const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const history = useHistory();

  const [values, handleInputChange  ] = useForm({
    username: "",
    password: "",
  });

  const { username, password } = values;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: types.login,
      payload: {
        username
      }
    })
    history.replace("/")
  }
  
  return (
    <div className="app__screen app__screen--login">
      <AppLogo />
      <form className="app__form app__form--login" onSubmit={handleFormSubmit}>
        <header className="app__form--login--header">
          <h3>Welcome to Storybook</h3>
          <p>Enter your credentials to access your account. </p>
        </header>
        
        <div className="app__form--control">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleInputChange}
            autoComplete="off"
            name="username"
            type="text"
            value={username}
            placeholder="Username"
          />
        </div>

        <div className="app__form--control">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            autoComplete="off"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
          />
        </div>

        <div className="app__form--control">
          <button type="submit">Sign in</button>
        </div>
        <p className="app__form--login--note">
          <span>Anything is fine, there's no validation.</span>
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
