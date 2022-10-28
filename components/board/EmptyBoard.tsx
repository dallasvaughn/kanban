import { useContext, useState } from 'react';
import { BoardContext, Board } from '../../context/boardContext';
import DeleteBoard from '../modals/DeleteBoard';
import EditBoard from '../modals/EditBoard';
import PrimaryButton from '../PrimaryButton';

const EmptyBoard = () => {
  const [editBoard, setEditBoard] = useState(false);
  const [state] = useContext(BoardContext);
  const [deleteBoard, setDeleteBoard] = useState(false);
  const { boards, activeBoard } = state;

  const handleClose = () => {
    setEditBoard(false);
  };

  const openDelete = () => {
    setDeleteBoard(true);
    setEditBoard(false);
  };

  const closeDelete = () => {
    setDeleteBoard(false);
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
        <EditBoard
          board={activeBoard}
          onClick={handleClose}
          openDelete={openDelete}
        />
      ) : null}
      {deleteBoard ? (
        <DeleteBoard onClick={closeDelete} name={activeBoard.name} />
      ) : null}
    </>
  );
};

export default EmptyBoard;
