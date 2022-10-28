import { Column } from '../../context/boardContext';
import Card from './Card';

type Props = {
  column: Column;
  i: number;
};

const Column = ({ column, i }: Props) => {
  const colors = ['#49C4E5', '#8471F2', '#67E2AE'];

  return (
    <div className="last:pr-4 min-w-[280px]">
      <div className="flex items-center gap-3 text-xs text-medium-grey font-bold tracking-[2.4px] uppercase mb-6">
        <div
          style={{
            backgroundColor:
              (i + 1) % 3 === 0
                ? colors[2]
                : (i + 1) % 2 === 0
                ? colors[1]
                : colors[0],
          }}
          className="w-[15px] h-[15px] rounded-full"
        ></div>
        {column.name} ({column.tasks.length})
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
