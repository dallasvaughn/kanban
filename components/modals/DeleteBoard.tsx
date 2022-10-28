import { useContext } from 'react';
import { BoardContext } from '../../context/boardContext';
import SecondaryButton from '../SecondaryButton';
import Modal from './Modal';
import ModalContent from './ModalContent';

type Props = {
  onClick: () => void;
  name: string;
};

const DeleteBoard = ({ onClick, name }: Props) => {
  const [state, dispatch] = useContext(BoardContext);
  const { activeBoard } = state;

  const handleDelete = () => {
    state.boards = state.boards.filter((board) => board !== activeBoard);
    dispatch({
      type: 'DELETE BOARD',
      payload: {
        boards: state.boards,
        activeBoard: state.boards[0],
      },
    });
    onClick();
  };

  return (
    <Modal onClick={onClick}>
      <ModalContent>
        <h2 className="text-lg font-semibold text-red mb-6">
          Delete this board?
        </h2>
        <p className="text-sm text-medium-grey leading-md mb-6">
          Are you sure you want to delete the '{name}' board? This action will
          remove all columns and tasks and cannot be reversed.
        </p>
        <button
          className="px-4 mb-4 h-11 w-full text-white text-sm bg-red hover:bg-red-hover font-semibold rounded-full flex justify-center items-center md:h-12 md:rounded-full md:px-6"
          onClick={handleDelete}
        >
          Delete
        </button>
        <SecondaryButton onClick={onClick}>Cancel</SecondaryButton>
      </ModalContent>
    </Modal>
  );
};

export default DeleteBoard;
