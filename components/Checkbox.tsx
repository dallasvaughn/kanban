import { useState } from 'react';

type Props = {
  index: number;
  subtask: { isCompleted: boolean; title: string };
  onClick: (
    index: number,
    subtask: { isCompleted: boolean; title: string },
    checked: boolean
  ) => void;
};

const Checkbox = ({ index, subtask, onClick }: Props) => {
  const [checked, setChecked] = useState(subtask.isCompleted);

  const handleClick = () => {
    setChecked(!checked);
    onClick(index, subtask, !checked);
  };

  return (
    <div className="bg-light-grey dark:bg-very-dark-grey rounded-[4px] p-3 flex items-center gap-4">
      <input
        type="checkbox"
        className="w-4 h-4 checked:bg-main-purple rounded-sm border-lines-light bg-white focus:ring-main-purple text-main-purple"
        checked={checked}
        onChange={handleClick}
      />
      <p
        style={
          checked
            ? { color: '#828FA3', textDecoration: 'line-through' }
            : undefined
        }
        className="text-xs font-semibold text-black dark:text-white"
      >
        {subtask.title}
      </p>
    </div>
  );
};

export default Checkbox;
