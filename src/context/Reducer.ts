import { VideoObject } from "../components/carousel-card/CarouselCard";
export interface AppStateData {
    carousel: VideoObject[];
    selectedvideo: any | null;
    currentIndex: number;
    tracklist: any[];
  }
  
  type SetCarouselAction = { type: 'SET_CAROUSEL'; carousel: VideoObject[] };
  type ClearTracklistAction = { type: 'CLEAR_TRACKLIST' };
  type SetCurrentIndexAction = { type: 'SET_CURRENTINDEX'; currentIndex: number };
  
  type AppAction =
    | SetCarouselAction
    | ClearTracklistAction
    | SetCurrentIndexAction
  
  const initialState: AppStateData = {
    carousel: [],
    selectedvideo: null,
    currentIndex: 0,
    tracklist: [],
  };
  
  const reducer = (state: AppStateData, action: AppAction): AppStateData => {
    switch (action.type) {
      case 'SET_CAROUSEL':
        return { ...state, carousel: action.carousel };
      case 'CLEAR_TRACKLIST':
        return { ...state, tracklist: [] };
      case 'SET_CURRENTINDEX':
        return { ...state, currentIndex: action.currentIndex };
      default:
        return state;
    }
  };
  
  export { initialState, reducer, type AppAction };