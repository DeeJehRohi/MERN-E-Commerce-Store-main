import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import "../../src/custom.css";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    
    <>

<section className="mb-16">
               <div>
                  <div className="bg_image"></div>
                  <div className="onboard">
                      <div className="text">
                        <h1>Enjoy A Healthy Life,</h1>
                        <h1> Get A Fresh Grocery Today</h1>
                      </div>
                    <div className="para">
                       <p>Shop Fresh is an Emergency sales platform that serves its users with fresh farm produce</p>
                        <p> and notifies user of fresh produce on availability.</p>
                    </div>
                     <div className="flex justify-center btn55">
                        <Link to="/shop">
                          <button className="bg-pink-600 font-bold rounded-full py-2 px-10  start55">Goto Shop
                          </button>
                        </Link>
                      </div>
                      </div>
              </div>
          </section>

      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
            <hr className="w-50 h-1 mx-auto my-4 bg-pink-100 border-0 rounded md:my-10 dark:bg-pink-700"/>

          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem]  text-[3rem] font-bold">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] "
            >
              Shop
            </Link>
          </div>
          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
