import { useContext, useState } from 'react';
import { BoardContext, Board } from '../../context/boardContext';
import EditBoard from '../modals/EditBoard';
import PrimaryButton from '../PrimaryButton';

const EmptyBoard = () => {
  const [editBoard, setEditBoard] = useState(false);
  const [state] = useContext(BoardContext);
  const { boards, activeBoard } = state;

  const handleClose = () => {
    setEditBoard(false);
  };

  return (
    <>
      <div className="w-full text-center text-lg font-bold text-medium-grey flex flex-col items-center gap-6 m-auto">
        <p className="max-w-[80%]">
          This board is empty. Create a new column to get started.
        </p>
        <div>
          <PrimaryButton onClick={() => setEditBoard(true)}>
            + Add New Column
          </PrimaryButton>
        </div>
      </div>

      {editBoard && activeBoard ? (
        <EditBoard board={activeBoard} onClick={handleClose} />
      ) : null}
    </>
  );
};

export default EmptyBoard;
