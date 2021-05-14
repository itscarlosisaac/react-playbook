import { useState, useEffect} from 'react';
import { MediaQueries } from '../utils/constants';
import { useWindowSize } from './useWindowSize';

const Medias = {
  "MOBILE": "mobile",
  "TABLET": "tablet",
  "DESKTOP": "desktop",
}

export const useResponsive = () => {

  const [responsiveState, setState] = useState(Medias.DESKTOP);

  const [ { width } ] = useWindowSize();
  let newState, prevState;
  
  const updateState = () => {
    prevState = responsiveState;

    width <= MediaQueries.mobile ?
        newState = Medias.MOBILE :
      width <= MediaQueries.tablet ?
        newState = Medias.TABLET :
        newState = Medias.DESKTOP
    // switch (true) {
    //   case width <= MediaQueries.mobile:
    //     newState = Medias.MOBILE
    //     break;

    //   case width <= MediaQueries.tablet:
    //     newState = Medias.TABLET
    //     break;
    
    //   default:
    //     newState = Medias.DESKTOP
    //     break;
    // }
    
    return prevState === newState ? prevState : setState(newState);
    
  }

  useEffect(() => {
    updateState();
    return () => { }
  }, [ width ])

  return [ responsiveState ];
}