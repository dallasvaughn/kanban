import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Board = ({ children }: Props) => {
  return (
    <div className="pl-4 pt-6 flex gap-6 max-w-full overflow-hidden overflow-x-auto overflow-y-auto">
      {children}
      <div className="rounded-lg pr-4 pb-6 mt-[42px]">
        <div className="text-medium-grey bg-[#E9EFFA] text-lg md:text-xl font-bold w-[280px] h-full rounded-lg flex justify-center items-center">
          + New Column
        </div>
      </div>
    </div>
  );
};

export default Board;
