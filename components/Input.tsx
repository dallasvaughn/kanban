import { FormEvent } from 'react';

interface Props {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ name, placeholder, value, onChange }: Props) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-lines-light text-black rounded-[4px] py-2 px-4 text-sm"
    />
  );
};

export default Input;
