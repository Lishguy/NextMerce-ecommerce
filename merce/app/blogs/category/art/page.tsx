"use client";

import React from "react";
import Link from "next/link";
import blog1 from "../../../../public/images/blog1.jpg";
import blog2 from "../../../../public/images/blog2.jpg";
import blog3 from "../../../../public/images/blog3.jpg";
import blog4 from "../../../../public/images/blog4.jpg";
import blog5 from "../../../../public/images/blog5.jpg";
import blog6 from "../../../../public/images/blog6.jpg";
import blog7 from "../../../../public/images/blog7.jpg";
import blog8 from "../../../../public/images/blog8.jpg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const page = () => {
  const blogs = [
    {
      slug: "masterclass",
      name: "Masterclass: Creating Delicious Italian Pasta",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog7,
    },
    {
      slug: "techtrend",
      name: "Tech Trends 2022: What's Changing in the Digital World",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog4,
    },
    {
      slug: "exploring",
      name: "Exploring the Wonders of Modern Art: A Gallery Tour",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog6,
    },
    {
      slug: "guide",
      name: "A Guide to Sustainable Living: Reduce, Reuse, Recycle",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog8,
    },
    {
      slug: "benefit",
      name: "The Benefits of Regular Exercise for a Healthy Lifestyle",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog3,
    },
    {
      slug: "ultimate",
      name: "The Ultimate Guide to Traveling on a Budget",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog1,
    },
    {
      slug: "psychology",
      name: "The Psychology of Happiness: Finding Joy in Everyday Life",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog2,
    },
    {
      slug: "ecommerce",
      name: "How to Start a Successful E-commerce Business",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog5,
    },
  ];

  const filteredBlogs = blogs.filter((_, index) => [2].includes(index));

  return (
    <div>
      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-3xl text-black/80">
          Art
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500 text-sm">Home /</p>
          </Link>
          <p className="text-blue-500 text-sm">Category </p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10  mb-16 w-full">
        <div className="flex flex-col lg:flex-row py-20 px-4 xl:px-0 gap-8">
          {/* main content  */}
          <div className="">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredBlogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                  <div className="bg-white cursor-pointer flex flex-col p-5 shadow-sm rounded-md">
                    <Image
                      src={blog.image}
                      className="rounded-sm"
                      alt="Blog Image"
                    />
                    <div className="flex gap-2 mt-5 mb-2 items-center">
                      <span className="text-sm hover:text-blue-700">
                        {blog.date}
                      </span>
                      <div className="border-l gap-1 ">
                        <span className="pl-2 text-sm  hover:text-blue-700">
                          {blog.views}
                        </span>
                      </div>
                    </div>
                    <h1 className="text-xl text-black/80 font-semibold hover:text-blue-700">
                      {blog.name}
                    </h1>
                    <div className="flex mt-6 items-center mb-1 hover:text-blue-700">
                      <p className="text-sm">{blog.desc}</p>
                      <ArrowRight size={15} className="ml-2 mt-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
