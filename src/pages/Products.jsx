import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="my-8 font-semibold text-2xl text-center">All Products</h1>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full mb-6 gap-4">
        <SearchBar />
        <SortByPrice />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filter Bar */}
        <div className="hidden lg:block lg:col-span-2">
          <FilterBar />
        </div>

        {/* Products Grid */}
        <div className="col-span-1 lg:col-span-10">
          {/* Responsive Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Replace the placeholders below with actual product components */}
            <div className="bg-neutral text-neutral-content p-4 rounded-lg shadow-md">
              Product 1
            </div>
            <div className="bg-neutral text-neutral-content p-4 rounded-lg shadow-md">
              Product 2
            </div>
            <div className="bg-neutral text-neutral-content p-4 rounded-lg shadow-md">
              Product 3
            </div>
            <div className="bg-neutral text-neutral-content p-4 rounded-lg shadow-md">
              Product 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
