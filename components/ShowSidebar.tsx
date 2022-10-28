import showSidebar from '../public/icon-show-sidebar.svg';
import Image from 'next/image';

interface Props {
  updateSidebar: () => void;
}

const ShowSidebar = ({ updateSidebar }: Props) => {
  return (
    <div
      className="hidden fixed z-30 left-0 bottom-8 w-14 h-12 bg-main-purple rounded-r-full md:flex items-center justify-center cursor-pointer"
      onClick={updateSidebar}
    >
      <span className="mr-2">
        <Image src={showSidebar} />
      </span>
    </div>
  );
};

export default ShowSidebar;
