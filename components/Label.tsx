import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  htmlFor?: string | undefined;
}

const Label = ({ children, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className="text-xs text-medium-grey font-medium">
      {children}
    </label>
  );
};

export default Label;
