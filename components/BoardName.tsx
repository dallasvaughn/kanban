import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';
import Board from './board/Board';
import BoardIcon from './icons/BoardIcon';

type Props = {
  name: string;
};

const BoardName = ({ name }: Props) => {
  const [state] = useContext(BoardContext);
  const { activeBoard } = state;

  return (
    <div
      style={{ backgroundColor: name === activeBoard ? '#635FC7' : undefined }}
      className=" rounded-r-full p-3 md:p-4 pl-0"
    >
      <div
        style={{
          color: name === activeBoard ? 'white' : undefined,
          fill: name === activeBoard ? 'white' : undefined,
        }}
        className="flex items-center ml-6 md:ml-2 text-md font-bold text-medium-grey fill-medium-grey"
      >
        <BoardIcon />
        <span className="flex items-center ml-3">{name}</span>
      </div>
    </div>
  );
};

export default BoardName;
