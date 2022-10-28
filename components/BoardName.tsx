import { useContext } from 'react';
import { Board, BoardContext } from '../context/boardContext';
import BoardIcon from './icons/BoardIcon';

type Props = {
  board: Board;
};

const BoardName = ({ board }: Props) => {
  const [state, dispatch] = useContext(BoardContext);
  const { activeBoard } = state;

  const handleClick = () => {
    dispatch({
      type: 'CHANGE BOARD',
      payload: board,
    });
  };

  return (
    <div
      style={{
        backgroundColor:
          board && board.name === activeBoard.name ? '#635FC7' : undefined,
      }}
      className="rounded-r-full p-3 md:p-4 pl-0 cursor-pointer"
      onClick={handleClick}
    >
      <div
        style={{
          color: board && board.name === activeBoard.name ? 'white' : undefined,
          fill: board && board.name === activeBoard.name ? 'white' : undefined,
        }}
        className="flex items-center ml-6 md:ml-2 text-md font-bold text-medium-grey fill-medium-grey"
      >
        <BoardIcon />
        <span className="flex items-center ml-3">{board && board.name}</span>
      </div>
    </div>
  );
};

export default BoardName;
