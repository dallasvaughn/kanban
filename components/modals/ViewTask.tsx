import { BoardContext, Column, Task } from '../../context/boardContext';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ellipsis from '../../public/icon-vertical-ellipsis.svg';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import Label from '../Label';
import EditTask from './EditTask';

type Props = {
  column: Column;
  task: Task;
  i: number;
  onClick: () => void;
  closeEdit: () => void;
  openEdit: () => void;
};

const ViewTask = ({ column, task, i, onClick, openEdit, closeEdit }: Props) => {
  const getNumCompleted = (): number => {
    let count: number = 0;

    if (task.subtasks) {
      for (let subtask of task.subtasks) {
        if (subtask.isCompleted) {
          count += 1;
        }
      }
    }

    return count;
  };

  const [subtasks] = useState(task.subtasks.length);
  const [completed, setCompleted] = useState(getNumCompleted());
  const [status, setStatus] = useState(column.name);
  const [state, dispatch] = useContext(BoardContext);
  const { activeBoard } = state;

  const updateSubtasks = (
    index: number,
    subtask: { isCompleted: boolean; title: string },
    checked: boolean
  ): void => {
    const colNum = activeBoard.columns.findIndex((item) => item === column);
    activeBoard.columns[colNum].tasks[i].subtasks[index] = {
      isCompleted: checked,
      title: subtask.title,
    };
    setCompleted(getNumCompleted());
  };

  const updateStatus = (newStatus: string) => {
    const colNum = activeBoard.columns.findIndex(
      (item) => item.name === column.name
    );
    activeBoard.columns[colNum].tasks = activeBoard.columns[
      colNum
    ].tasks.filter((item) => item.title !== task.title);
    const newNum = activeBoard.columns.findIndex(
      (item) => item.name === newStatus
    );
    task.status = newStatus;
    activeBoard.columns[newNum].tasks.push(task);
    dispatch({
      type: 'UPDATE BOARD',
      payload: activeBoard,
    });
    onClick();
  };

  const handleClick = () => {
    openEdit();
    onClick();
  };

  return (
    <Modal onClick={onClick}>
      <ModalContent>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-black dark:text-white flex-1">
            {task.title}
          </h2>
          <span className="cursor-pointer" onClick={handleClick}>
            <Image src={ellipsis} />
          </span>
        </div>
        <p className="text-sm text-medium-grey leading-md mb-6">
          {task.description}
        </p>
        <div className="text-xs text-medium-grey dark:text-white font-semibold mb-4">
          Subtasks ({completed} of {subtasks})
        </div>
        <div className="flex flex-col gap-2 mb-6">
          {task.subtasks.map((subtask, index) => {
            return (
              <Checkbox
                key={index}
                index={index}
                subtask={subtask}
                onClick={updateSubtasks}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="status">Status</Label>
          <select
            value={status}
            className="w-full border dark:bg-dark-grey border-lines-light dark:border-lines-dark text-black dark:text-white rounded-[4px] py-2 px-2 text-sm outline-main-purple"
            onChange={(e) => {
              const input = e.target as HTMLSelectElement;
              setStatus(input.value);
              updateStatus(input.value);
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
      </ModalContent>
    </Modal>
  );
};

export default ViewTask;
