import { useParams } from "react-router-dom";
import useAppState from "../../context/AppState";
import SidePanel from "../side-panel/SidePanel";
import { useEffect } from "react";
import Navbar from "../../pages/navbar/Navabar";

const VideoPlayer = () => {
  // Get video ID from route params and app context
  const { id } = useParams();
  const { setCurrentIndex, data } = useAppState();

  // Find the selected video based on the current index
  const selectedSong = data.carousel.find((_, ind) => ind === data.currentIndex);

  // Function to handle video ending
  const onVideoEnded = () => {
    const currentIndex = data?.currentIndex;
    const nextIndex = currentIndex === data?.carousel.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  // Effect to set the current index when the component mounts or when the carousel changes
  useEffect(() => {
    if (data?.carousel.length) {
      const songIndex = data?.carousel?.findIndex((video) => video.id.toString() === id) ?? 0;
      setCurrentIndex(songIndex);
    }
  }, [data?.carousel, id]);

  return (
    <div id="image-box" className="xl:px-[48px] lg:px-[108px] md:px-[96px] sm:px-[64px] lg:mb-[32px] md:mb-[16px] flex flex-row">
      <div className="relative w-full h-full flex flex-1 px-[90px] flex-col items-center ">
        {/* Navbar component */}
        <Navbar />
        <div>
          {/* Video player with controls */}
          <video className="w-[500px] h-[500px] bg-black" onEnded={onVideoEnded} controls autoPlay src={selectedSong?.sources[0]} />
        </div>
        <div className="flex flex-col mt-[8px] items-baseline">
          {/* Song title */}
          <div className="lg:text-[16px] md:text-[15px] sm:text-[14px] font-medium leading-[1.2]">
            {selectedSong?.title}
          </div>
          {/* Song subtitle with line clamp */}
          <div className="line-clamp mt-[3px] font-[200] lg:text-[16px] md:text-[15px] sm:text-[14px]">
            {selectedSong?.subtitle}
          </div>
        </div>
      </div>
      {/* SidePanel component for displaying the video list */}
      <SidePanel />
    </div>
  );
};

export default VideoPlayer;