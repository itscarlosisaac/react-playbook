import { useState } from "react";

export const useLocalStorage = (initialState = {}) => {

  const [ localData, setData ] = useState(initialState);

  const getLocalData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setLocalData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
    setData(data);
  }

  const deleteLocalData = (key) => {
    localStorage.removeItem(key)
  }

  return [localData, getLocalData, setLocalData, deleteLocalData]
}