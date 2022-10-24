import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  opacity?: string;
  onClick: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  opacity = '1',
  onClick,
  disabled = false,
}: Props) => {
  return (
    <button
      style={{
        opacity: opacity,
      }}
      className="px-4 h-11 w-full text-white text-sm bg-main-purple font-semibold rounded-full flex justify-center items-center md:h-12 md:rounded-full md:px-6"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
