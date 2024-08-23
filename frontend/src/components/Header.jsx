import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex flex-col"><h1 className="text-5xl font-bold text-center">See Our Top Products</h1>
        <p className="text-center text-2xl mt-5 ">See what our customers order, our top fresh products <br/> The reviews and the numbers dont lie</p>
      </div>
       <hr className="w-48 h-2 mx-auto my-4 bg-pink-100 border-0 rounded md:my-10 dark:bg-pink-700"/>
      <div className="flex justify-around">
        <div className="xl:block lg:hidden md:hidden:sm:hidden">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
