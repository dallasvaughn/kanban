import { useEffect, useState } from 'react';
import Input from './Input';
import { Column } from '../context/boardContext';

interface Props {
  column: Column;
  updateColumns: (name: string, i: number) => void;
  i: number;
}

const ColumnValue = ({ column, updateColumns, i }: Props) => {
  const [columnName, setColumnName] = useState(column.name);

  useEffect(() => {
    updateColumns(columnName, i);
  }, [columnName]);

  return (
    <Input
      name="column"
      value={column.name}
      onChange={(e) => {
        const input = e.target as HTMLInputElement;
        setColumnName(input.value);
      }}
      required
    />
  );
};

export default ColumnValue;
