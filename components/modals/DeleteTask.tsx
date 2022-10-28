import ModalContent from './ModalContent';
import Modal from './Modal';
import { BoardContext, Column, Task } from '../../context/boardContext';
import SecondaryButton from '../SecondaryButton';
import { useContext } from 'react';

type Props = {
  onClick: () => void;
  task: Task;
  column: Column;
};

const DeleteTask = ({ onClick, task, column }: Props) => {
  const [, dispatch] = useContext(BoardContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE TASK',
      payload: {
        column,
        task,
      },
    });
    onClick();
  };

  return (
    <Modal onClick={onClick}>
      <ModalContent>
        <h2 className="text-lg font-semibold text-red mb-6">
          Delete this task?
        </h2>
        <p className="text-sm text-medium-grey leading-md mb-6">
          Are you sure you want to delete the '{task.title}' task and its
          subtasks? This action cannot be reversed.
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

export default DeleteTask;
