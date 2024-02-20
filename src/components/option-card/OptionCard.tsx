import { useNavigate } from 'react-router-dom';
import { IoMdPlay } from 'react-icons/io';
import useAppState from '../../context/AppState';
import { VideoObject } from '../carousel-card/CarouselCard';

// Define prop types for OptionCard component
type OptionCardProps = {
  video: VideoObject;
  index: number;
  isSelected: boolean;
}

// OptionCard component
const OptionCard = ({ video, index, isSelected }: OptionCardProps) => {
  // Use context hook to get and set current index
  const { setCurrentIndex } = useAppState();
  const navigate = useNavigate();

  // Click handler for setting current index and navigating to video details page
  const clickHandler = () => {
    setCurrentIndex(index);
    navigate(`/video/${video.id}`);
  }

  return (
    <div className={`pr-[8px] flex items-center h-[48px] flex-row px-2 my-2 ${isSelected && 'bg-gray-300 bg-opacity-50'}`} onClick={clickHandler}>
      <div className="w-[48px] h-[48px] mr-[16px] rounded-sm">
        {/* Display video thumbnail */}
        <img src={video.thumb} alt="thumbnail" className="w-full h-full" />
      </div>
      {/* Play button overlay */}
      <div className="absolute w-[48px] h-[48px] cursor-pointer opacity-0 hover:opacity-100">
        <div className="h-full w-full bg-[rgba(0,0,0,0.8)]"></div>
        <div className="h-full w-full -translate-y-2/3 translate-x-1/3 text-lg"><IoMdPlay /></div>
      </div>
      <div className="flex overflow-hidden flex-wrap w-[calc(100%-48px-16px)] cursor-move">
        {/* Video title */}
        <div className="basis-full mb-[3px] flex justify-between overflow-hidden text-[14px] leading-[1.2] font-medium truncate">
          {video.title}
        </div>
        {/* Video subtitle */}
        <div className="text-[14px] leading-[1.2] font-normal truncate">
          {video.subtitle}
        </div>
      </div>
    </div>
  );
}

export default OptionCard;