import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({
    width:  window.innerWidth,
    height:  window.innerHeight,
  });

  const  handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize) 
  },[ ])
  
  return [ windowSize ];
}
