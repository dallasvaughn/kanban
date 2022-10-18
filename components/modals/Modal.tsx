import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;
