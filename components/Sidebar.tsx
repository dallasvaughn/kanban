import BoardIcon from './icons/BoardIcon';
import ReactSwitch from 'react-switch';
import hideSidebar from '../public/icon-hide-sidebar.svg';
import iconLightTheme from '../public/icon-light-theme.svg';
import iconDarkTheme from '../public/icon-dark-theme.svg';
import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import AddBoard from './modals/AddBoard';
import { BoardContext } from '../context/boardContext';
import BoardName from './BoardName';

interface Props {
  updateSidebar: () => void;
}

const Sidebar = ({ updateSidebar }: Props) => {
  const [checked, setChecked] = useState(false);
  const [addBoard, setAddBoard] = useState(false);
  const [state, dispatch] = useContext(BoardContext);
  const { boards } = state;

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setChecked(true);
    }
  }, []);

  const handleChange = (): void => {
    setChecked(!checked);
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  };

  const handleClose = () => {
    setAddBoard(false);
  };

  return (
    <aside className="bg-white dark:bg-dark-grey w-[260px] border-r border-lines-light dark:border-lines-dark h-full p-3 pb-20">
      <div className="mt-4 flex flex-col h-full">
        <div className="text-medium-grey text-xs font-bold uppercase tracking-[2.4px] ml-2">
          All Boards
        </div>
        <div className="-ml-4 mt-5 mb-auto">
          {boards.map((board, i) => {
            return <BoardName key={i} board={board} />;
          })}
          <div
            className="rounded-r-full p-4 pl-0 cursor-pointer"
            onClick={() => setAddBoard(true)}
          >
            <div className="flex items-center ml-6 text-md font-bold text-main-purple fill-main-purple">
              <BoardIcon />
              <span className="flex items-center ml-3">+ Create New Board</span>
            </div>
          </div>
        </div>
        <div className="bg-light-grey dark:bg-very-dark-grey py-[15px] rounded flex gap-5 justify-center">
          <span className="flex items-center">
            <Image src={iconLightTheme} />
          </span>
          <span className="flex items-center">
            <ReactSwitch
              checked={checked}
              onChange={handleChange}
              offColor="#635FC7"
              onColor="#635FC7"
              handleDiameter={14}
              uncheckedIcon={false}
              checkedIcon={false}
              width={40}
              height={20}
            />
          </span>
          <span className="flex items-center">
            <Image src={iconDarkTheme} />
          </span>
        </div>
        <div
          className="flex items-center text-medium-grey font-bold text-md mt-[30px] ml-4 cursor-pointer"
          onClick={updateSidebar}
        >
          <span className="flex items-center mr-[10px]">
            <Image src={hideSidebar} />
          </span>{' '}
          Hide Sidebar
        </div>
      </div>

      {addBoard ? <AddBoard onClick={handleClose} /> : null}
    </aside>
  );
};

export default Sidebar;
