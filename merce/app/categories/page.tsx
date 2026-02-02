import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Laptop Pc</h1>
        <div className="flex gap-2">
          <p className="cursor-pointer hover:text-blue-500">Home /</p>
          <p>Category /</p>
          <p className="text-blue-500">Laptop Pc</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
