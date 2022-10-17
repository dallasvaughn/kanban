import Image from 'next/image';
import logoMobile from '../public/logo-mobile.svg';
import logoLight from '../public/logo-light.svg';
import logoDark from '../public/logo-dark.svg';
import chevronDown from '../public/icon-chevron-down.svg';
import add from '../public/icon-add.svg';
import edit from '../public/icon-vertical-ellipsis.svg';
import PrimaryButton from './PrimaryButton';
import MobileBoardMenu from './modals/MobileBoardMenu';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useWindowDimensions from '../helpers/useWindowDimensions';

const Header = () => {
  const [openBoardMenu, setOpenBoardMenu] = useState(false);
  const { width } = useWindowDimensions();
  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <header className="absolute z-50 bg-white dark:bg-dark-grey w-full top-0 h-16 p-4 flex gap-4 items-center md:h-20 md:py-0 md:px-6 md:border-b border-lines-light dark:border-lines-dark">
      <span className="flex items-center md:hidden">
        <Image src={logoMobile} />
      </span>
      <span className="hidden w-[236px] h-full md:dark:flex items-center border-r border-lines-dark">
        <Image src={logoLight} />
      </span>
      <span className="hidden dark:hidden w-[236px] h-full md:flex items-center border-r border-lines-light">
        <Image src={logoDark} />
      </span>
      <h1
        className="text-lg font-bold leading-md flex items-center gap-2 mr-auto text-black dark:text-white md:text-[20px] xl:text-xl"
        onClick={() => setOpenBoardMenu(!openBoardMenu)}
      >
        Platform Launch
        <motion.span
          className="flex items-center fill-main-purple md:hidden"
          variants={variants}
          animate={openBoardMenu ? 'open' : 'closed'}
        >
          <Image src={chevronDown} />
        </motion.span>
      </h1>
      {width && width < 768 ? (
        <button className="bg-main-purple h-8 rounded-2xl px-2">
          <span className="w-8 text-xl flex items-center justify-center">
            <Image className="rotate-45" src={add} />
          </span>
        </button>
      ) : (
        <PrimaryButton opacity="0.25">
          <span className="hidden md:flex">+ Add New Task</span>
        </PrimaryButton>
      )}
      <Image src={edit} />
      {openBoardMenu ? <MobileBoardMenu /> : null}
    </header>
  );
};

export default Header;
