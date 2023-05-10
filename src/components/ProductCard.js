import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  // https://localhost:7166/api/Product

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res);

          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchProduct();
  }, []);
  return (<>
    
    <div class="flex flex-wrap px-20 py-10">
      {products.map((values) => {
        return (
          <div class="w-1/4 px-2 py-5">

                <div class="max-w-sm rounded overflow-hidden shadow-lg h-full">
                    <img class="object-scale-down h-48 w-96" src={values.image} alt="pRODUCTS" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{values.title}
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 ">{values.rating.rate}</span></div>
                    </div>
                    <div class="px-5 pt-4 pb-2">
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-black">${values.price}</span>
                            <Link to={`/products/${values.id}`}><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Detail</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        );
      })}
    </div></>
  );
};

export default ProductCard;
