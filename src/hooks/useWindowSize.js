import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {

    const  handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize) 
  },[ ])
  
  return [ windowSize ];
}
