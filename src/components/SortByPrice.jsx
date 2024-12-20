const SortByPrice = () => {
  return (
    <select className="p-[11px] max-w-md border border-black rounded-md">
      <option value="asc">Low to High</option>
      <option value="dsc">High to Low</option>
    </select>
  );
};

export default SortByPrice;
