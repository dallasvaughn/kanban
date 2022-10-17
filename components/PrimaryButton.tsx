import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  opacity?: string;
}

const PrimaryButton = ({ children, opacity = '1' }: Props) => {
  return (
    <button
      style={{
        opacity: opacity,
      }}
      className="px-4 h-12 text-white text-md bg-main-purple font-bold rounded-full flex justify-center items-center md:h-12 md:rounded-full md:px-6"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
