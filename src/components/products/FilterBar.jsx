import { LuFilter } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
const FilterBar = () => {
  return (
    <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md">
      <div className="flex items-center gap-1">
        <LuFilter size={24} />
        <h2 className="text-xl font-semibold">Filter Bar</h2>
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center">
        <div className="w-full">
          <select className="p-[11px]  w-full border border-black rounded-md">
            <option disabled selected>
              Brand
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <div className="w-full">
          <select className="p-[11px] w-full border border-black rounded-md">
            <option disabled selected>
              Category
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>
      <button className="btn mt-4 w-full btn-primary flex items-center">
        <p>Reset</p>
        <RiResetLeftFill />
      </button>
    </div>
  );
};

export default FilterBar;
