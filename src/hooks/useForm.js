import { useState } from 'react'
/* 
  @initialState = The inital state of the component hook
  /- reset - Reset the values to the initial state
  /- handleInputChange - Set or update a value in the values object based on the name provided by the form field.
*/
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    });
  }

  return [ values, handleInputChange, reset ]
}
