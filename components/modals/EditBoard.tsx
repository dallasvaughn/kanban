import { useContext, useEffect, useState } from 'react';
import ColumnValue from '../ColumnValue';
import Input from '../Input';
import Label from '../Label';
import Modal from './Modal';
import ModalContent from './ModalContent';
import cross from '../../public/icon-cross.svg';
import Image from 'next/image';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';
import { Board, BoardContext, Column } from '../../context/boardContext';

type Props = {
  board: Board;
  onClick: () => void;
};

const EditBoard = ({ board, onClick }: Props) => {
  const [boardName, setBoardName] = useState(board.name);
  const [columns, setColumns] = useState<Column[]>(board.columns);
  const [error, setError] = useState(false);
  const [, dispatch] = useContext(BoardContext);

  useEffect(() => {
    setError(false);
  }, [boardName, columns]);

  const updateColumns = (name: string, i: number) => {
    const updatedList = columns.map((column, index) => {
      if (index === i) {
        return { ...column, name };
      }
      return column;
    });
    setColumns(updatedList);
  };

  const addColumn = () => {
    setColumns([...columns, { name: '', tasks: [] }]);
  };

  const removeColumn = (i: number) => {
    if (columns.length === 1) return;
    setColumns(columns.filter((item, index) => index !== i));
  };

  const saveChanges = () => {
    dispatch({
      type: 'EDIT BOARD',
      payload: {
        name: boardName,
        columns: columns,
      },
    });
    onClick();
  };

  return (
    <Modal onClick={onClick}>
      <ModalContent maxWidth="480px">
        <h2 className="text-lg font-bold text-black mb-6">Edit Board</h2>
        <div className="flex flex-col gap-2">
          <Label htmlFor="board-name">Board Name</Label>
          <Input
            name="board-name"
            placeholder="e.g. Web Design"
            value={boardName}
            onChange={(e) => {
              const input = e.target as HTMLInputElement;
              setBoardName(input.value);
            }}
            required
          />
        </div>
        <div className="mt-6 flex flex-col gap-3 mb-6">
          <Label>Board Columns</Label>
          {columns.map((column, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <ColumnValue
                  column={column}
                  updateColumns={updateColumns}
                  i={i}
                />
                <Image src={cross} onClick={() => removeColumn(i)} />
              </div>
            );
          })}
          <SecondaryButton onClick={addColumn}>
            + Add New Column
          </SecondaryButton>
        </div>
        {error && (
          <p className="text-sm text-red text-center mb-2">
            Make sure all required fields are filled out
          </p>
        )}
        <div className="flex w-full">
          <PrimaryButton onClick={saveChanges}>Save Changes</PrimaryButton>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default EditBoard;
