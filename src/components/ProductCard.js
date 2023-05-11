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

    <div class="flex flex-wrap px-20 py-10 ">
     

          <div className="ml-20 mr-20">
            {products.map((product) => {
              return (
                <div className="inline-flex p-4" key={product.id}>
                  <div className="mt-10 max-w-xs rounded overflow-hidden shadow-lg object-center text-center">
                    <img
                      className="rounded-t-lg p-8 object-scale-down h-48 w-96"
                      src={product.image}
                      alt="Sunset in the mountains"
                    />

                    <div className="px-4 py-2">
                      <div className="font-bold text-xl mb-2 truncate">
                        {product.title}
                      </div>
                      <p className="text-gray-700 text-base truncate ...">
                        {product.description}
                      </p>
                      <p className="text-gray-900 text-base capitalize">
                        {product.category}
                      </p>
                      <p className="font-bold">${product.price}</p>
                      <div className=" p-3 text-center">
                        <Link to={`/products/${product.id}`}>
                          <button className="bg-blue-950 hover:bg-blue-700 text-white rounded-lg font-normal p-[5px]">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        
      
    </div></>
  );
};

export default ProductCard;
