import React, { useReducer, useEffect } from 'react'
import { AuthProvider } from './context/Auth/AuthContext';
import { AuthReducer } from './context/Auth/AuthReducer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppRouter } from './routes/AppRouter'


function App() {
  const [, getLocalData ] = useLocalStorage()
  const [ user, dispatch] = useReducer(AuthReducer, {}, () => getLocalData("ReactPlaybookLogin") || { logged: false })

  return (
    <AuthProvider value={{user, dispatch}}>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
