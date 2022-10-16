import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width: string;
  bg: string;
  color: string;
  fontSize: string;
  opacity?: string;
}

const Button = ({
  children,
  width,
  bg,
  color,
  fontSize,
  opacity = '100',
}: Props) => {
  return (
    <button
      className={`w-${width} bg-${bg} text-${color} text-${fontSize} opacity-${opacity} h-8 rounded-2xl flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
