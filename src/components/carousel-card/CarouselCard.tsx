import { useNavigate } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";

// Define the prop types for CarouselCard component
type CarouselCardProps = {
  video: VideoObject;
};

// Define the type for the video object
export interface VideoObject {
  id: number;
  description: string;
  sources: Array<string>;
  subtitle: string;
  thumb: string;
  title: string;
};

const CarouselCard = ({ video }: CarouselCardProps) => {
  // Use the react-router-dom hook for navigation
  const navigate = useNavigate();

  // Click handler for navigating to the video details page
  const clickHandler = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div
      // Responsive container styling
      className="container lg:w-[calc((89vw-424px)/5)] md:w-[calc((89vw-324px)/4)] sm:w-[calc((89vw-2*24px)/3)] mr-[24px]"
      onClick={clickHandler}
    >
      <div className="cursor-pointer relative">
        {/* Display video thumbnail */}
        <img
          src={video.thumb}
          className="h-full w-full object-cover rounded-md"
          alt={video.title}
        />
        <div className="image-overlay">
          <div className="absolute right-[20px] bottom-[20px] left-[45%] top-[45%]">
            {/* Play button overlay */}
            <div className="hover-play-button h-[40px] w-[40px] bg-[rgba(0,0,0,0.6)] rounded-full flex justify-center items-center duration-200 ease-in right-0">
              <IoMdPlay className="h-[22px] w-auto ml-[2px] text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className=" contents mt-[8px] items-baseline ">
        {/* Video title */}
        <div className="lg:text-[16px] md:text-[15px] sm:text-[14px] font-medium leading-[1.2]">
          {video.title}
        </div>
        {/* Video subtitle with line clamp */}
        <div className="line-clamp mt-[3px] font-[200] lg:text-[16px] md:text-[15px] sm:text-[14px]">
          {video.subtitle}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;