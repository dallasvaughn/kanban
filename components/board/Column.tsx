import { Column } from '../../context/boardContext';
import Card from './Card';

type Props = {
  column: Column;
};

const Column = ({ column }: Props) => {
  return (
    <div className="last:pr-4 min-w-[280px]">
      <div className="text-xs text-medium-grey font-bold tracking-[2.4px] uppercase mb-6">
        {column.name}
      </div>
      <div className="flex flex-col gap-5 pb-6">
        {column.tasks?.map((task, i) => {
          return <Card key={i} column={column} task={task} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Column;
