import { BrowserRouter } from 'react-router-dom';


import './App.css'
import AppRouter from './routes';
import useAppState from './context/AppState';
import useCarouselData from './hooks/useCarouselData';
import { useEffect } from 'react';

function App() {
  const { setCarousel, clearTracklist } = useAppState();
  const { carouselData, loading: load, error}  = useCarouselData();

  useEffect(() => {
    if (carouselData.length != 0) {
      setCarousel(carouselData);
    }
    clearTracklist();
  }, [carouselData]);

  //TODO: we can make state globle and use for error handling
  if (error){
    return <h1>Something goes Wrong..</h1>
  }

  //TODO: we can make loading state context inside data and use across the application
  if (load)
    return <h1>Loading...</h1>
  
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  )
}

export default App
