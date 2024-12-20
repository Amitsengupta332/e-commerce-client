import ProductCard from "../ProductCard";

const FeaturedProduct = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2  ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default FeaturedProduct;
