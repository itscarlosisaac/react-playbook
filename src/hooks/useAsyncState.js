import { useState } from "react";
export const useAsyncState = (initialState) => {
  const [state, setState] = useState(initialState)

  const getAsyncState = async () => {
    let temporalState = null;
    await setState((currentState) => {
      temporalState = currentState;
      return currentState;
    })
    return temporalState;
  }
  return [ state, setState, getAsyncState ]
}