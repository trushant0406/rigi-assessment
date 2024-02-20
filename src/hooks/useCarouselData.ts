import { useState, useEffect } from "react";
import { myApi } from "../utils/helper";
import { VideoObject } from "../components/carousel-card/CarouselCard";

const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState([] as unknown as VideoObject[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    // Simulating an asynchronous API call
  const fetchCarouselData = async () => {
    try {
      setLoading(true);
      const data = await myApi();
      
      // const data = await fetch("http://localhost:8000/videos");
      // const res = await data.json();

      setCarouselData(data);
    } catch (error) {
      console.error(`Error occurred: ${error}`);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  return { carouselData, loading, error, fetchCarouselData };
};

export default useCarouselData;
