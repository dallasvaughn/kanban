import PrimaryButton from '../PrimaryButton';

const EmptyBoard = () => {
  return (
    <div className="w-full text-center text-lg font-bold text-medium-grey flex flex-col items-center gap-6 m-auto">
      <p className="max-w-[80%]">
        This board is empty. Create a new column to get started.
      </p>
      <div>
        <PrimaryButton>+ Add New Column</PrimaryButton>
      </div>
    </div>
  );
};

export default EmptyBoard;
