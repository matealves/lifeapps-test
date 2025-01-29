type Props = {
  orderBy: string;
  setOrderBy: (order: string) => void;
};

export const SelectOrderBy = ({ orderBy, setOrderBy }: Props) => {
  return (
    <select
      value={orderBy}
      onChange={(e) => setOrderBy(e.target.value)}
      className="text-sm cursor-pointer"
    >
      <option hidden>Ordenar por</option>
      <option value="asc">Menor preço</option>
      <option value="desc">Maior preço</option>
    </select>
  );
};
