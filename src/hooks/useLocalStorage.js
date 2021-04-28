import { useState } from "react";

export const useLocalStorage = () => {

  const [ localData, setData ] = useState();

  const getLocalData = (key) => {
    setData(JSON.parse(localStorage.getItem(key)))
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