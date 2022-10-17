import { motion } from 'framer-motion';
import BoardIcon from '../icons/BoardIcon';
import ReactSwitch from 'react-switch';
import iconLightTheme from '../../public/icon-light-theme.svg';
import iconDarkTheme from '../../public/icon-dark-theme.svg';
import { useState } from 'react';
import Image from 'next/image';

const MobileBoardMenu = () => {
  const [checked, setChecked] = useState(
    localStorage.theme === 'dark' ? true : false
  );

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

  return (
    <div className="fixed z-20 top-16 left-0 w-screen h-screen bg-black/50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-30px)' }}
        animate={{ transform: 'translateY(16px)', opacity: 1 }}
        className="absolute w-[264px] bg-white dark:bg-dark-grey rounded-lg p-4"
      >
        <div className="text-medium-grey text-xs font-bold uppercase tracking-[2.4px] ml-2">
          All Boards
        </div>
        <div className="-ml-4 mt-5">
          <div className="bg-main-purple rounded-r-full p-3 pl-0">
            <div className="flex items-center ml-6 text-md font-bold text-medium-grey fill-medium-grey">
              <BoardIcon />
              <span className="flex items-center ml-3">Platform Launch</span>
            </div>
          </div>
          <div className="rounded-r-full p-3 pl-0">
            <div className="flex items-center ml-6 text-md font-bold text-main-purple fill-main-purple">
              <BoardIcon />
              <span className="flex items-center ml-3">+ Create New Board</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-light-grey dark:bg-very-dark-grey py-[15px] rounded flex gap-5 justify-center">
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
      </motion.div>
    </div>
  );
};

export default MobileBoardMenu;
