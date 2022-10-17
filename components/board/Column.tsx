import Card from './Card';

const Column = () => {
  return (
    <div className="last:pr-4">
      <div className="text-xs text-medium-grey font-bold tracking-[2.4px] uppercase mb-6">
        Todo
      </div>
      <div className="flex flex-col gap-5 pb-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Column;
