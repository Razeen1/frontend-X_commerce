import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  if (items.length === 0) {
    return (
      <div className="text-center text-bold">
        Your Cart is Empty
        <div className="py-4 text-slate-400">
          <Link to="/products">Start Shopping</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="ml-20 mr-20">
      <h3 className="my-2 text-center text-xl text-bold">My Cart</h3>
      <div>
        {products.map((product) => (
          <div className="inline-flex p-3" key={product.id}>
            <div className="mt-10 max-w-xs rounded shadow-lg object-center text-center">
              <img
                className="w-64 h-64"
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
                  <button
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                    className="bg-blue-950 hover:bg-blue-700 text-white rounded-lg font-normal p-[5px]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
