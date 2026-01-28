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

  const filteredBlogs = blogs.filter((_, index) => [1].includes(index));

  return (
    <div>
      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-3xl text-black/80">
          StartUp
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

export default page;
