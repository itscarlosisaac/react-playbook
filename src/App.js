import React, { useReducer } from 'react'
import { AuthProvider } from './context/Auth/AuthContext';
import { AuthReducer } from './context/Auth/AuthReducer';
import { AppRouter } from './routes/AppRouter'

function App() {
  const [user, dispatch] = useReducer(AuthReducer, {logged: false})
  return (
    <AuthProvider value={{user, dispatch}}>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
