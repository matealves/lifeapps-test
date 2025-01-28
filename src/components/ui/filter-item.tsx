type Props = {
  label: string;
  active?: boolean;
};

export const FilterItem = ({ label, active }: Props) => {
  return (
    <div
      className={`${
        active ? "bg-orange-500 text-white" : ""
      } p-2 rounded-md text-sm font-medium`}
    >
      {label}
    </div>
  );
};
