import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const SecondaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="px-4 h-11 text-main-purple text-sm bg-main-purple/10 dark:bg-white font-semibold rounded-full flex justify-center items-center md:h-12 md:rounded-full md:px-6"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
