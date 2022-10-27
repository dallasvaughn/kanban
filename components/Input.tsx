import { FormEvent, useEffect, useState } from 'react';

interface Props {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = ({ name, placeholder, value, onChange, required }: Props) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (value) {
      setStyle({});
    }
  }, [value]);

  const handleBlur = () => {
    if (!value && required) {
      setStyle({ borderColor: '#EA5555' });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      <input
        name={name}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-lines-light dark:border-lines-dark dark:bg-dark-grey text-black dark:text-white rounded-[4px] py-2 px-4 text-sm outline-none"
        onBlur={handleBlur}
      />
      {required && Object.keys(style).length > 0 && (
        <span className="absolute right-4 text-sm text-red">
          Can't be empty
        </span>
      )}
    </div>
  );
};

export default Input;
