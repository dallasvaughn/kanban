import { useEffect, useState } from 'react';
import Input from './Input';

type Props = {
  subtask: { title: string; isCompleted: boolean };
  updateSubtasks: (title: string, isCompleted: boolean, i: number) => void;
  i: number;
};

const Subtask = ({ subtask, updateSubtasks, i }: Props) => {
  const [subtaskTitle, setSubtaskTitle] = useState(subtask.title);

  useEffect(() => {
    updateSubtasks(subtaskTitle, false, i);
  }, [subtaskTitle]);

  return (
    <Input
      name="subtask"
      value={subtask.title}
      placeholder={
        i === 0
          ? 'e.g. Make Coffee'
          : i === 1
          ? 'e.g. Drink coffee & smile'
          : ''
      }
      onChange={(e) => {
        const input = e.target as HTMLInputElement;
        setSubtaskTitle(input.value);
      }}
    />
  );
};

export default Subtask;
