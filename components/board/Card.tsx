import { useContext, useState } from 'react';
import { BoardContext, Column, Task } from '../../context/boardContext';
import ViewTask from '../modals/ViewTask';
import EditTask from '../modals/EditTask';
import DeleteTask from '../modals/DeleteTask';

type Props = {
  column: Column;
  task: Task;
  i: number;
};

const Card = ({ column, task, i }: Props) => {
  const [viewTask, setViewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [state] = useContext(BoardContext);
  const { activeBoard } = state;

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

  const handleClose = () => {
    setViewTask(false);
  };

  const openEdit = () => {
    setEditTask(true);
  };

  const closeEdit = () => {
    setEditTask(false);
  };

  const openDelete = () => {
    setDeleteTask(true);
    setEditTask(false);
  };

  const closeDelete = () => {
    setDeleteTask(false);
  };

  return (
    <>
      <div
        className="w-[280px] shadow-normal rounded-lg bg-white dark:bg-dark-grey text-xs px-4 py-6"
        onClick={() => setViewTask(true)}
      >
        <h3 className="text-black dark:text-white text-md font-bold mb-2 leading-[18.9px]">
          {task.title}
        </h3>
        {task.subtasks && task.subtasks.length > 0 && (
          <h4 className="text-medium-grey test-xs font-bold">
            {getNumCompleted()} of {task.subtasks.length} subtasks
          </h4>
        )}
      </div>

      {viewTask ? (
        <ViewTask
          onClick={handleClose}
          closeEdit={closeEdit}
          openEdit={openEdit}
          column={column}
          task={task}
          i={i}
        />
      ) : null}
      {editTask ? (
        <EditTask
          board={activeBoard}
          column={column}
          task={task}
          i={i}
          onClick={closeEdit}
          openDelete={openDelete}
        />
      ) : null}
      {deleteTask ? (
        <DeleteTask onClick={closeDelete} task={task} column={column} />
      ) : null}
    </>
  );
};

export default Card;
