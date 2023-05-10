import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="ml-20 mr-20">
      {isLoading ? (
        <h1 className="text-center text-xl">Loading....</h1>
      ) : (
        <section>
          <div className="container px-2 py-4">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="product-img"
                className="lg:w-1/2 h-96 w-full object-contain object-center"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-2 lg:py-6 mt-4">
                <h2 className="capitalize text-xl title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-justify">
                  {product.title}
                </h1>
                <p className="text-justify">{product.description}</p>
                <div className="flex">
                  <span className="title-font font-medium text-3xl text-gray-900">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => handleAdd(product)}
                  className="mt-3 ml-auto py-2 px-3 bg-blue-950 hover:bg-bg-blue-500 text-white rounded-lg font-normal p-[5px]"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="mt-3 ml-5 bg-blue-500 hover:bg-blue-950 py-2 px-3 text-white rounded-lg font-normal p-[5px]"
                >
                  Go To Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
