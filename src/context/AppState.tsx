import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import reducerCase from './Constants';
import { initialState, reducer, AppStateData } from './Reducer';
import { VideoObject } from '../components/carousel-card/CarouselCard';

interface AppContextProps {
  data: AppStateData;
  setCarousel: (carousel: VideoObject[]) => void;
  clearTracklist: () => void;
  setCurrentIndex: (currentIndex: any) => void;
}

const AppContextProps: AppContextProps = {
  data: initialState,
  setCarousel: () => {},
  clearTracklist: () => {},
  setCurrentIndex: () => {},

};

const AppContext = createContext(AppContextProps);

interface AppStateProps {
  children: ReactNode;
}

export const AppState: React.FC<AppStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCarousel = (carousel: VideoObject[]) => {
    dispatch({
      type: reducerCase.SET_CAROUSEL,
      carousel,
    });
  };

  const clearTracklist = () => {
    dispatch({
      type: reducerCase.CLEAR_TRACKLIST,
    });
  };

  const setCurrentIndex = (currentIndex: any) => {
    dispatch({
      type: reducerCase.SET_CURRENTINDEX,
      currentIndex,
    });
  };

  return (
    <AppContext.Provider value={{
      data: state,
      setCarousel,
      clearTracklist,
      setCurrentIndex,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = (): AppContextProps => useContext(AppContext);
export default useAppState;