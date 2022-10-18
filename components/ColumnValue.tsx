import { useEffect, useState } from 'react';
import Input from './Input';

interface Props {
  updateColumns: (name: string, i: number) => void;
  i: number;
}

const ColumnValue = ({ updateColumns, i }: Props) => {
  const [columnName, setColumnName] = useState('');

  useEffect(() => {
    updateColumns(columnName, i);
  }, [columnName]);

  return (
    <Input
      name="column"
      value={columnName}
      onChange={(e) => {
        const input = e.target as HTMLInputElement;
        setColumnName(input.value);
      }}
    />
  );
};

export default ColumnValue;
