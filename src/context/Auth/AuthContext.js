import { createContext } from 'react'

export const AuthContext = createContext();
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;