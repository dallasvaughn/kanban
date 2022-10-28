import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ModalContent = ({ children }: Props) => {
  return (
    <motion.div
      className="w-[90%] max-w-[480px] max-h-[75%] overflow-hidden overflow-y-auto bg-white dark:bg-dark-grey rounded-md p-6 md:p-8"
      initial={{ translateX: '-50%', opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
};

export default ModalContent;
