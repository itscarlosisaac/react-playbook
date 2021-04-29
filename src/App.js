import React, { useReducer } from 'react'
import { AuthProvider } from './context/Auth/AuthContext';
import { AuthReducer } from './context/Auth/AuthReducer';
import { ViewContextProvider } from './context/View/ViewContext';
import { ViewReducer } from './context/View/ViewReducer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppRouter } from './routes/AppRouter'

function App() {
  const [, getLocalData ] = useLocalStorage()
  const [ user, dispatchAuthReducer ] = useReducer(AuthReducer, {}, () => getLocalData("ReactPlaybookLogin") || { logged: false })

  const [ view, dispatchViewReducer ] = useReducer(ViewReducer, {view: "component"})

  return (
      <ViewContextProvider value={{view, dispatchViewReducer}}>
        <AuthProvider value={{user, dispatchAuthReducer}}>
          <AppRouter />
        </AuthProvider>
      </ViewContextProvider>
  );
}

export default App;
