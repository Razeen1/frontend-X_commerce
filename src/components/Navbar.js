import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <TopBar />
    
      <div>
        <header class="w-full mt-0 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
            <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
                <Link class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" to="/">
                    X-commerce
                </Link>
             
                <div class="items-center h-full">
                   
                    <Link to="/cart"
                        class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 dark:bg-blue-950 rounded shadow outline-none active:bg-blue-500 hover:shadow-md focus:outline-none ease">
                        Cart ({items.length})
                    </Link>
                </div>
            </div>
        </header>
    </div >
        
      
    </>
  );
};

export default Navbar;
