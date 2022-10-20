import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  maxWidth: string;
};

const ModalContent = ({ children, maxWidth }: Props) => {
  return (
    <motion.div
      style={{ maxWidth: maxWidth }}
      className="w-[90%] bg-white rounded-md p-6 md:p-8"
      initial={{ translateX: '-50%', opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
};

export default ModalContent;
