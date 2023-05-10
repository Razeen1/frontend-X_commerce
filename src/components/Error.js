import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 text-center font-bold ">
      <p className="text-red-600 text-8xl mb-4">404 Error</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Homepage
      </button>
    </div>
  );
};

export default Error;
