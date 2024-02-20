import CarouselCard, {
  VideoObject,
} from "../../components/carousel-card/CarouselCard";
import useAppState from "../../context/AppState";

const HomePage = () => {
  const { data } = useAppState();
  // TODO: we can use error and loading state to display error pages and loader.
  return (
    <div>
      <h1>Video Player</h1>
      <div className="inline-grid grid-cols-3 gap-4 p-5">
        {
          data.carousel.map((item: VideoObject) => (
            <CarouselCard key={item.id} video={item} />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
