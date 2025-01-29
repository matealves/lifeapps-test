type Props = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

export const FilterItem = ({ label, active, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${
        active ? "bg-orange-500 text-white" : ""
      } p-2 rounded-md text-sm font-medium`}
    >
      {label}
    </div>
  );
};
