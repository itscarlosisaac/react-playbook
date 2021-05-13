import { useState, useEffect } from 'react';
import { MediaQueries } from '../utils/constants';
import { useWindowSize } from './useWindowSize';

export const useResponsive = () => {

  const [responsiveState, setState] = useState({
    isTablet: false,
    isMobile: false,
    isDesktop: false
  });

  const [ windowSize ] = useWindowSize();

  useEffect(() => {
    switch (true) {
      case windowSize.width <= MediaQueries.mobile:
        setState({isDesktop: false, isTablet: false, isMobile: true})
        break;

      case windowSize.width <= MediaQueries.tablet:
        setState({isDesktop: false, isTablet: true, isMobile: false })
        break;
    
      default:
        setState({isDesktop: true, isTablet: false, isMobile: false })
        break;
    }
    return () => { }
  }, [windowSize])

  return [ responsiveState ];
}