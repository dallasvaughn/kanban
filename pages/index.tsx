import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import ShowSidebar from '../components/ShowSidebar';
import useWindowDimensions from '../helpers/useWindowDimensions';
import EmptyBoard from '../components/board/EmptyBoard';
import Board from '../components/board/Board';
import Column from '../components/board/Column';
import AddBoard from '../components/modals/AddBoard';
import { BoardContext } from '../context/boardContext';

const Home: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [state, dispatch] = useContext(BoardContext);
  const { boards, activeBoard } = state;
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  useEffect(() => {
    if (width && width < 768) {
      setShowSidebar(false);
    }
  }, [width]);

  const updateSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <main className="mt-16 md:mt-20 flex flex-1 relative">
      <div className="hidden md:block absolute h-full">
        <Sidebar updateSidebar={updateSidebar} />
      </div>
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: !showSidebar ? '100%' : 'calc(100% - 260px)' }}
        className="absolute right-0 h-full bg-light-grey dark:bg-very-dark-grey flex-1 flex"
      >
        {activeBoard && activeBoard.columns.length > 0 ? (
          <Board>
            {activeBoard.columns.map((column, i) => {
              return <Column key={i} column={column} />;
            })}
          </Board>
        ) : (
          <EmptyBoard />
        )}
      </motion.div>
      {!showSidebar && <ShowSidebar updateSidebar={updateSidebar} />}
    </main>
  );
};

export default Home;
