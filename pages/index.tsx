import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import ShowSidebar from '../components/ShowSidebar';
import useWindowDimensions from '../helpers/useWindowDimensions';

const Home: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { width, height } = useWindowDimensions();

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
        initial={{ width: 'calc(100% - 260px)' }}
        animate={{ width: !showSidebar ? '100%' : 'calc(100% - 260px)' }}
        className="absolute right-0 h-full z-20 bg-light-grey dark:bg-very-dark-grey flex-1 flex justify-center items-center text-medium-grey text-lg font-bold"
      >
        This board is empty. Create a new column to get started.
      </motion.div>
      {!showSidebar && <ShowSidebar updateSidebar={updateSidebar} />}
    </main>
  );
};

export default Home;
