import { Board, BoardContext, Column, Task } from '../../context/boardContext';
import Modal from './Modal';
import ModalContent from './ModalContent';
import Label from '../Label';
import Input from '../Input';
import { useContext, useState } from 'react';
import Subtask from '../Subtask';
import Image from 'next/image';
import cross from '../../public/icon-cross.svg';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';

type Props = {
  board: Board;
  column: Column;
  task: Task;
  i: number;
  onClick: () => void;
};

const EditTask = ({ board, column, task, i, onClick }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [status, setStatus] = useState(task.status);
  const [error, setError] = useState('');
  const [state, dispatch] = useContext(BoardContext);
  const { activeBoard } = state;

  const updateSubtasks = (title: string, isCompleted: boolean, i: number) => {
    const updatedList = subtasks.map((subtask, index) => {
      if (index === i) {
        return { ...subtask, title, isCompleted };
      }
      return subtask;
    });
    setSubtasks(updatedList);
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, { title: '', isCompleted: false }]);
  };

  const removeSubtask = (i: number) => {
    setSubtasks(subtasks.filter((item, index) => index !== i));
  };

  const saveTask = () => {
    const index = state.activeBoard.columns.findIndex(
      (column) => column.name === status
    );
    const cleanSubtasks = subtasks.filter(
      (subtask) => subtask.title !== '' && subtask.title !== undefined
    );
    if (status !== task.status) {
      const colNum = activeBoard.columns.findIndex(
        (item) => item.name === column.name
      );
      activeBoard.columns[colNum].tasks = activeBoard.columns[
        colNum
      ].tasks.filter((item) => item.title !== task.title);
      const newNum = activeBoard.columns.findIndex(
        (item) => item.name === status
      );
      activeBoard.columns[newNum].tasks.push(task);
    } else {
      activeBoard.columns[index].tasks[i] = {
        title,
        description,
        subtasks: cleanSubtasks,
        status,
      };
    }

    dispatch({
      type: 'UPDATE BOARD',
      payload: activeBoard,
    });
    onClick();
  };

  return (
    <Modal onClick={onClick}>
      <ModalContent>
        <h2 className="text-lg font-bold text-black dark:text-white mb-6">
          Edit Task
        </h2>
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            placeholder="e.g. Take coffee break"
            value={title}
            onChange={(e) => {
              const input = e.target as HTMLInputElement;
              setTitle(input.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="description">Description</Label>
          <textarea
            className="w-full h-[112px] border dark:bg-dark-grey border-lines-light dark:border-lines-dark text-black dark:text-white rounded-[4px] py-2 px-4 text-sm outline-none resize-none"
            name="description"
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
            value={description}
            onChange={(e) => {
              const input = e.target as HTMLTextAreaElement;
              setDescription(input.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <Label>Subtasks</Label>
          {subtasks.map((subtask, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <Subtask
                  subtask={subtask}
                  updateSubtasks={updateSubtasks}
                  i={i}
                />
                <Image src={cross} onClick={() => removeSubtask(i)} />
              </div>
            );
          })}
          <SecondaryButton onClick={addSubtask}>
            + Add New Column
          </SecondaryButton>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="status">Status</Label>
          <select
            value={status}
            className="w-full border dark:bg-dark-grey border-lines-light dark:border-lines-dark text-black dark:text-white rounded-[4px] py-2 px-2 text-sm outline-main-purple"
            onChange={(e) => {
              const input = e.target as HTMLSelectElement;
              setStatus(input.value);
            }}
          >
            {activeBoard.columns.map((column, i) => {
              return (
                <option key={i} value={column.name}>
                  {column.name}
                </option>
              );
            })}
          </select>
        </div>
        {error && (
          <p className="text-sm text-red text-center mb-2 mt-6">
            Make sure all required fields are filled out
          </p>
        )}
        <div className="flex w-full mt-6">
          <PrimaryButton onClick={saveTask}>Save Changes</PrimaryButton>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default EditTask;
