import React from "react";
import Link from "next/link";

const Test = () => {

  return (
    <div>
      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-3xl text-black/80">
          Test
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500 text-sm">Home /</p>
          </Link>
          <p className="text-blue-500 text-sm">Tags</p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10  mb-16 w-full">
        <div className="flex flex-col lg:flex-row py-20 px-4 xl:px-12 gap-8">
          {/* main content  */}
          <div className="">
            <h1>No posts found!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
