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
import { useContext, useState } from 'react';
import useWindowDimensions from '../helpers/useWindowDimensions';
import { Board, BoardContext } from '../context/boardContext';
import EditBoard from './modals/EditBoard';
import AddTask from './modals/AddTask';
import DeleteBoard from './modals/DeleteBoard';

const Header = () => {
  const [openBoardMenu, setOpenBoardMenu] = useState(false);
  const [state] = useContext(BoardContext);
  const [editBoard, setEditBoard] = useState(false);
  const [deleteBoard, setDeleteBoard] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const { activeBoard } = state;
  const { width } = useWindowDimensions();
  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const handleClose = () => {
    setEditBoard(false);
    setAddTask(false);
  };

  const openDelete = () => {
    setDeleteBoard(true);
    setEditBoard(false);
  };

  const closeDelete = () => {
    setDeleteBoard(false);
  };

  return (
    <>
      <header className="absolute bg-white dark:bg-dark-grey w-full top-0 h-16 p-4 flex gap-4 items-center md:h-20 md:py-0 md:px-6 md:border-b border-lines-light dark:border-lines-dark">
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
          {activeBoard.name}
          <motion.span
            className="flex items-center fill-main-purple md:hidden"
            variants={variants}
            animate={openBoardMenu ? 'open' : 'closed'}
          >
            <Image src={chevronDown} />
          </motion.span>
        </h1>
        {width && width < 768 ? (
          <button
            style={{
              opacity:
                activeBoard && activeBoard.columns.length === 0 ? '0.25' : '1',
            }}
            className="bg-main-purple h-8 rounded-2xl px-2"
            onClick={() => setAddTask(true)}
          >
            <span className="w-8 text-xl flex items-center justify-center">
              <Image className="rotate-45" src={add} />
            </span>
          </button>
        ) : (
          <div>
            <PrimaryButton
              opacity={
                activeBoard && activeBoard.columns.length === 0 ? '0.25' : '1'
              }
              onClick={() => setAddTask(true)}
              disabled={activeBoard && activeBoard.columns.length === 0}
            >
              <span className="hidden md:flex">+ Add New Task</span>
            </PrimaryButton>
          </div>
        )}
        <span className="flex items-center justify-center cursor-pointer w-3">
          <Image src={edit} onClick={() => setEditBoard(true)} />
        </span>
        {openBoardMenu ? <MobileBoardMenu /> : null}
      </header>

      {editBoard && activeBoard ? (
        <EditBoard
          board={activeBoard}
          openDelete={openDelete}
          onClick={handleClose}
        />
      ) : null}
      {addTask && activeBoard ? (
        <AddTask board={activeBoard} onClick={handleClose} />
      ) : null}
      {deleteBoard ? (
        <DeleteBoard onClick={closeDelete} name={activeBoard.name} />
      ) : null}
    </>
  );
};

export default Header;
