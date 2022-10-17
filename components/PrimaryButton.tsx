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
      className="h-8 text-white bg-main-purple font-bold rounded-2xl flex justify-center items-center md:h-12 md:rounded-full md:px-6 md:text-md"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
