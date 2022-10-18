import { useState } from 'react';
import ColumnValue from '../ColumnValue';
import Input from '../Input';
import Label from '../Label';
import Modal from './Modal';
import cross from '../../public/icon-cross.svg';
import Image from 'next/image';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';

const AddBoard = () => {
  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState([{}]);

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
    setColumns([...columns, { name: '' }]);
  };

  console.log(columns);

  return (
    <Modal>
      <div className="w-[90%] max-w-[343px] bg-white rounded-md p-6">
        <h2 className="text-lg font-bold text-black mb-6">Add New Board</h2>
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
          />
        </div>
        <div className="mt-6 flex flex-col gap-3 mb-6">
          <Label>Board Columns</Label>
          {columns.map((column, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <ColumnValue updateColumns={updateColumns} i={i} />
                <Image src={cross} />
              </div>
            );
          })}
          <SecondaryButton onClick={addColumn}>
            + Add New Column
          </SecondaryButton>
        </div>
        <div className="flex w-full">
          <PrimaryButton>Create New Board</PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default AddBoard;
