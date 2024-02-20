import { useMemo } from "react";
import { Reorder } from "framer-motion";
import useAppState from "../../context/AppState";
import OptionCard from "../option-card/OptionCard";
import { VideoObject } from "../carousel-card/CarouselCard";

const SidePanel = () => {
  // Get data and setCarousel function from app context
  const { data, setCarousel } = useAppState();

  // Memoized songList to optimize rendering
  const songList = useMemo(() => {
    return data?.carousel;
  }, [data?.carousel]);

  return (
    <div className="side-panel lg:ml-[56px] md:mt-[32px] lg:mt-[0] sm:mt-[32px] flex flex-col sm:flex-1">
      {/* Header with "up next" text */}
      <div className="h-[48px] flex items-center text-[15px] font-medium overflow-hidden">
        <div className="relative h-full w-full whitespace-nowrap overflow-hidden">
          <div className="flex flex-row justify-evenly uppercase h-full w-full">
            <div className="h-full w-[120px] inline-flex justify-center items-center cursor-pointer px-3 relative overflow-hidden align-middle">
              <div className="flex flex-row justify-center items-center">up next</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video list with drag-and-drop functionality */}
      <div>
        <Reorder.Group
          axis="y"
          values={songList}
          onReorder={setCarousel}
        >
          {songList.map((item: VideoObject, index: number) => (
            <Reorder.Item key={item.id} value={item}>
              {/* Render OptionCard for each video in the list */}
              <OptionCard video={item} index={index} isSelected={index === data.currentIndex} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}

export default SidePanel;