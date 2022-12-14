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
  const [, dispatch] = useContext(BoardContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE BOARD',
      payload: {},
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
        <div className="flex flex-col gap-4 md:flex-row">
          <button
            className="px-4 h-11 w-full text-white text-sm bg-red hover:bg-red-hover font-semibold rounded-full flex justify-center items-center md:h-12 md:rounded-full md:px-6"
            onClick={handleDelete}
          >
            Delete
          </button>
          <SecondaryButton onClick={onClick}>Cancel</SecondaryButton>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteBoard;
