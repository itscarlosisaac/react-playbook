import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AppLogo } from '../components/common/AppLogo'
import { PageContainer } from '../components/PageContainer';
import { AuthContext } from '../context/Auth/AuthContext';
import { useAsyncState } from '../hooks/useAsyncState';
import { useForm } from '../hooks/useForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { types } from '../types/types';

export const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const [ state, setState, getAsyncState ] = useAsyncState({ userError:null, passError:null })
  const [, , setLocalData] = useLocalStorage();
  const history = useHistory();

  const [values, handleInputChange  ] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = values;
  const { userError, passError } = state;

  const validateForm = () => {
    !username ? 
      setState((prevState) => ({...prevState, userError:"Username can't be empty"})) : 
      setState((prevState) => ({...prevState, userError:null}));

    !password ? 
      setState((prevState) => ({...prevState, passError:"Password can't be empty"})) : 
      setState((prevState) => ({...prevState, passError: null }));
    return getAsyncState()
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm().then(({userError, passError}) =>{
      if( !userError && !passError ) {
        setLocalData("ReactPlaybookLogin", {username, logged: true})
        dispatch({
          type: types.login,
          payload: { username }
        });
        history.replace("/")
      }
    })

  }
  
  return (
    <PageContainer className="app__screen app__screen--login">
      <AppLogo />
      <form className="app__form app__form--login" onSubmit={handleFormSubmit}>
        <header className="app__form--login--header">
          <h3>Welcome to Storybook</h3>
          <p>Enter your credentials to access your account. </p>
        </header>
        
        <div className="app__form--control">
          <label htmlFor="username">Username</label>
          <input
            className={userError ? 'not-valid' : ''}
            onChange={handleInputChange}
            autoComplete="off"
            name="username"
            type="text"
            value={username}
            placeholder="Username"
          />
          {userError && <span className="form--error--note">Username can't be empty</span>}
        </div>

        <div className="app__form--control">
          <label htmlFor="password">Password</label>
          <input
            className={passError ? 'not-valid' : ''}
            onChange={handleInputChange}
            autoComplete="off"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
          />
          {passError && <span className="form--error--note">Password can't be empty</span>}
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
          Forgot your password? <span>Reset password</span>
        </small>
      </div>
      
    </PageContainer>
  )
}
