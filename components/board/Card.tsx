import { Task } from '../../context/boardContext';

type Props = {
  task: Task;
};

const Card = ({ task }: Props) => {
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

  return (
    <div className="w-[280px] shadow-normal rounded-lg bg-white dark:bg-dark-grey text-xs px-4 py-6">
      <h3 className="text-black dark:text-white text-md font-bold mb-2 leading-[18.9px]">
        {task.title}
      </h3>
      {task.subtasks && task.subtasks.length > 0 && (
        <h4 className="text-medium-grey test-xs font-bold">
          {getNumCompleted()} of {task.subtasks.length} subtasks
        </h4>
      )}
    </div>
  );
};

export default Card;
