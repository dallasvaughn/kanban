import { ReactNode, useContext, useState } from 'react';
import { BoardContext } from '../../context/boardContext';
import EditBoard from '../modals/EditBoard';

interface Props {
  children: ReactNode;
}

const Board = ({ children }: Props) => {
  const [editBoard, setEditBoard] = useState(false);
  const [state] = useContext(BoardContext);
  const { activeBoard } = state;

  const handleClose = () => {
    setEditBoard(false);
  };

  return (
    <>
      <div className="pl-4 pt-6 flex gap-6 max-w-full overflow-hidden overflow-x-auto overflow-y-auto">
        {children}
        <div className="rounded-lg pr-4 pb-6 mt-[42px]">
          <div
            className="text-medium-grey bg-[#E9EFFA] dark:bg-[#2B2C37]/25 text-lg md:text-xl font-bold w-[280px] h-full rounded-lg flex justify-center items-center"
            onClick={() => setEditBoard(true)}
          >
            + New Column
          </div>
        </div>
      </div>

      {editBoard && activeBoard ? (
        <EditBoard board={activeBoard} onClick={handleClose} />
      ) : null}
    </>
  );
};

export default Board;
