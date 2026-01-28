"use client";

import React from "react";
import Link from "next/link";
import blog1 from "../../../public/images/blog1.jpg";
import blog2 from "../../../public/images/blog2.jpg";
import blog3 from "../../../public/images/blog3.jpg";
import blog4 from "../../../public/images/blog4.jpg";
import blog5 from "../../../public/images/blog5.jpg";
import blog6 from "../../../public/images/blog6.jpg";
import blog7 from "../../../public/images/blog7.jpg";
import blog8 from "../../../public/images/blog8.jpg";
import Image from "next/image";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/newarrival3.png";
import product3 from "../../../public/images/newarrival1.png";
import product4 from "../../../public/images/newarrival7.png";
import product5 from "../../../public/images/newarrival4.png";
import product6 from "../../../public/images/newarrival2.png";
import product7 from "../../../public/images/newarrival6.png";
import product8 from "../../../public/images/newarrival5.png";
import product9 from "../../../public/images/newarrival8.png";
import {
  Menu,
  ChevronDown,
  ChevronUp,
  Search,
  X,
  StarIcon,
  User,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [newQuery, setNewQuery] = useState("");

  const products = [
    {
      name: "Apple AirPros Max",
      price: "$450",
      oldPrice: "$500",
      image: product1,
    },
    {
      name: "Rangs 43 Inch Frameless FHD Double Glass Android TV",
      price: "$700",
      oldPrice: "$800",
      image: product2,
    },
    {
      name: "Portable Electric Grinder Maker",
      price: "$777",
      oldPrice: "$888",
      image: product3,
    },
    {
      name: "MacBook Air M4 chip, 16/256GB",
      price: "$600",
      oldPrice: "$699",
      image: product4,
    },
    {
      name: "iPhone 16 Pro Max",
      price: "$899",
      oldPrice: "$940",
      image: product5,
    },
    {
      name: "iPhone 16 Pro 8/128GB",
      price: "$600",
      oldPrice: "$799",
      image: product5,
    },
    {
      name: "Indoor Steel Adjustable Silent Treadmill Home Fitness",
      price: "$888",
      oldPrice: "$999",
      image: product6,
    },
    {
      name: "Apple Watch Ultra",
      price: "$89",
      oldPrice: "$99",
      image: product7,
    },
    {
      name: "Apple iPad Pro",
      price: "$700",
      oldPrice: "$800",
      image: product8,
    },
    {
      name: "Apple iMac M4 24-inch 2025",
      price: "$1100",
      oldPrice: "$999",
      image: product9,
    },
  ];

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

  const miniblogs = [
    {
      slug: "masterclass",
      name: "Masterclass: Creating Delicious Italian...",
      date: "Nov 30 2025",
      views: "100k Views",
      image: blog7,
    },
    {
      slug: "techtrend",
      name: "Tech Trends 2022: What's Changing in the...",
      date: "Nov 30 2025",
      views: "100k Views",
      image: blog4,
    },
    {
      slug: "exploring",
      name: "Exploring the Wonders of Modern Art: A G...",
      date: "Nov 30 2025",
      views: "100k Views",
      image: blog6,
    },
  ];

  const miniproducts = [
    { name: "Portable Electric Grinder Maker", price: "$777", image: product3 },
    {
      name: "Indoor Steel Adjustable Silent Treadmill Home Fitness",
      price: "$888",
      image: product6,
    },
    {
      name: "Rangs 43 Inch Frameless FHD Double Glass Android TV",
      price: "$700",
      image: product2,
    },
  ];

  // for routing different product
  const router = useRouter();

  // Escapes user input so it is safe to put into a RegExp
  const escapeRegExp = (s: string): string =>
    s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Highlight matches (typed and lint-friendly).
  // NOTE: parameter name `q` avoids shadowing component state like `newQuery`.
  const highlightText = (text: string, q: string): string => {
    if (!q) return text; // nothing to highlight
    const escaped = escapeRegExp(q); // escape special regex chars
    const regex = new RegExp(`(${escaped})`, "gi");
    return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`);
  };

  const filteredProducts = (products || []).filter((p) =>
    p.name.toLowerCase().includes(newQuery.toLowerCase()),
  );

  const filteredBlogs = (blogs || []).filter((b) =>
    b.name.toLowerCase().includes(newQuery.toLowerCase()),
  );

  // Route for product listing
  const getProductRoute = (title: string) => {
    const t = title.toLowerCase();

    if (t.includes("imac")) return "/product/imac";
    if (t.includes("ipad")) return "/product/ipad";

    // ✅ iPhone rules (specific → general)
    if (t.includes("iphone 16 pro max")) return "/product/iphone16promax";

    if (t.includes("iphone 16 pro")) return "/product/iphone14";

    // fallback for other iphones if needed
    if (t.includes("iphone")) return "/product/iphone14";

    if (t.includes("macbook")) return "/product/macbook";
    if (t.includes("treadmill") || t.includes("fitness"))
      return "/product/fitness";
    if (t.includes("frameless") || t.includes("tv") || t.includes("television"))
      return "/product/television";
    if (t.includes("gamepad")) return "/product/gamepad";
    if (t.includes("watch")) return "/product/applewatch";
    if (t.includes("grinder")) return "/product/grinder";

    return "/product";
  };

  return (
    <div>
      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-3xl text-black/80 ">
          Blog Grid Sidebar
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500 text-sm">Home /</p>
          </Link>
          <p className="text-blue-500 text-sm">Blog Grid Sidebar</p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10  mb-16 w-full">
        <div className="flex flex-col lg:flex-row py-26 px-4 xl:px-0 gap-8">
          {/* left content  */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
              {blogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                  <div className="bg-white cursor-pointer flex flex-col p-5 shadow-sm rounded-md hover:shadow-md transition">
                    <Image
                      src={blog.image}
                      className="rounded-sm"
                      alt="Blog Image"
                    />

                    <div className="flex gap-2 mt-5 mb-2 items-center">
                      <span className="text-sm hover:text-blue-700">
                        {blog.date}
                      </span>
                      <div className="border-l">
                        <span className="pl-2 text-sm hover:text-blue-700">
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

          {/* right  */}
          <div className="w-full ">
            {/* Search  */}
            <div className="bg-white shadow-sm py-4 rounded-md">
              <h1 className="px-6 font-medium text-xl text-black/80">Search</h1>
              <hr className="mt-4" />

              {/* search bar  */}
              <div className="relative w-full max-w-2xl px-6 mx-auto mt-7 mb-2">
                <div
                  onClick={() => {
                    setActiveTab("blogs");
                    setSearchOpen(true);
                  }}
                  className="flex items-center justify-between gap-2 border px-6 py-3   rounded-full w-full"
                >
                  <input
                    type="text"
                    className="outline-none border-none text-gray-600 text-[16px] placeholder:text-gray-500/80"
                    placeholder="Search for"
                  />
                  <Search size={20} className="text-gray-600" />
                </div>

                {/* Popup / Modal */}
                {searchOpen && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    {/* Wrapper for the modal and the floating button */}
                    <div className="relative">
                      {/* White modal box */}

                      <div className="bg-white rounded-2xl shadow-xl w-[900px] h-[90vh] overflow-y-auto  my-10">
                        <div className="px-10 pt-10 pb-4">
                          {/* Modal content */}
                          <div className="flex items-center border px-4 py-[15px] rounded-lg mb-4">
                            <Search size={17} className="text-gray-600" />
                            <input
                              type="text"
                              value={newQuery}
                              onChange={(e) => setNewQuery(e.target.value)}
                              className="ml-2 flex-1 outline-none bg-transparent"
                              placeholder="Type anything to search..."
                            />
                          </div>

                          {/* Tabs */}
                          <div className="flex gap-3 mb-4 mt-10">
                            {["all", "products", "blogs"].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-md text-md font-semibold border transition-all duration-200 ${
                                  activeTab === tab
                                    ? "bg-blue-100 text-blue-700 border-blue-700"
                                    : "border-gray-400 text-black hover:bg-blue-100 hover:border-blue-700"
                                }`}
                              >
                                {tab === "all"
                                  ? "All"
                                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Product list */}
                        <hr className="w-full mb-12" />

                        <div className="space-y-3 px-10">
                          {/* PRODUCTS SECTION */}
                          {(activeTab === "all" ||
                            activeTab === "products") && (
                            <>
                              <h3 className="text-[20px] text-black/80 font-bold mb-4">
                                Products
                              </h3>
                              {filteredProducts.length > 0 ? (
                                filteredProducts.map((p, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-4 p-3 hover:bg-gray-100 group cursor-pointer rounded-lg"
                                  >
                                    <Image
                                      src={p.image}
                                      alt={p.name}
                                      className="w-22 h-20 border border-gray-200 rounded-md object-cover bg-gray-100 p-3"
                                    />
                                    <div className="flex-1">
                                      <h4
                                        className="text-gray-800 group-hover:text-blue-700 font-medium text-lg"
                                        dangerouslySetInnerHTML={{
                                          __html: highlightText(
                                            p.name,
                                            newQuery,
                                          ),
                                        }}
                                      />
                                      <div className="text-sm text-gray-500 flex gap-2">
                                        <span className="text-black text-[16px]">
                                          {p.price}
                                        </span>
                                        <span className="line-through text-[16px]">
                                          {p.oldPrice}
                                        </span>
                                        <div className="flex fill-gray-400 items-center border-l-3 gap-1 ">
                                          <Star
                                            size={17}
                                            className="fill-gray-300 text-gray-300 ml-2"
                                          />
                                          <Star
                                            size={17}
                                            className="fill-gray-300 text-gray-300"
                                          />
                                          <Star
                                            size={17}
                                            className="fill-gray-300 text-gray-300"
                                          />
                                          <Star
                                            size={17}
                                            className="fill-gray-300 text-gray-300"
                                          />
                                          <Star
                                            size={17}
                                            className="fill-gray-300 text-gray-300"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-gray-500 italic">
                                  No matching products found.
                                </p>
                              )}
                            </>
                          )}

                          {/* BLOGS SECTION */}
                          {(activeTab === "all" || activeTab === "blogs") && (
                            <>
                              <h3 className="text-[20px] mt-8 mb-5 text-black/80 font-bold">
                                Blogs
                              </h3>
                              {filteredBlogs.length > 0 ? (
                                filteredBlogs.map((b) => (
                                  <Link
                                    key={b.slug}
                                    href={`/blogs/${b.slug}`}
                                    onClick={() => setSearchOpen(false)}
                                    className="block"
                                  >
                                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 group cursor-pointer rounded-lg">
                                      <Image
                                        src={b.image}
                                        alt={b.name}
                                        className="w-52 h-[108px] rounded-md object-cover"
                                      />

                                      <div className="flex flex-col">
                                        <h4
                                          className="text-gray-800 group-hover:text-blue-700 font-medium text-lg"
                                          dangerouslySetInnerHTML={{
                                            __html: highlightText(
                                              b.name,
                                              newQuery,
                                            ),
                                          }}
                                        />
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: highlightText(
                                              b.p,
                                              newQuery,
                                            ),
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </Link>
                                ))
                              ) : (
                                <p className="text-gray-500 italic">
                                  No matching blogs found.
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      {/* Floating X Button */}
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="absolute top-4 -right-3 bg-white border-2 border-gray-300 text-gray-600 
                                    hover:border-gray-500 hover:text-gray-800 
                                    w-10 h-10 flex items-center justify-center rounded-full shadow-lg 
                                    transition-all duration-200 z-10"
                      >
                        <X size={22} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Posts  */}
            <div className="bg-white shadow-sm py-4 rounded-md mt-7">
              <h1 className="px-6 font-medium text-xl text-black/80">
                Recent Posts
              </h1>
              <hr className="mt-4" />
              <div className="mt-5 px-6 flex flex-col">
                {miniblogs.map((mini) => (
                  <Link key={mini.slug} href={`/blogs/${mini.slug}`}>
                    <div className="flex flex-row gap-4 mb-5 cursor-pointer items-center">
                      <Image
                        src={mini.image}
                        className="w-28 h-20 rounded-md"
                        alt="miniblogs"
                      />
                      <div className="flex flex-col">
                        <h1 className="text-[16px] text-black/80 hover:text-blue-700">
                          {mini.name}
                        </h1>
                        <div className="flex gap-2 mt-1 mb-2 items-center">
                          <span className="text-[12px] pt-1">{mini.date}</span>
                          <div className="border-l  ">
                            <span className="pl-2 text-[12px]">
                              {mini.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest Products */}
            <div className="bg-white shadow-sm py-4 rounded-md mt-7">
              <h1 className="px-6 font-medium text-xl text-black/80">
                Latest Products
              </h1>

              <hr className="mt-4" />

              <div className="mt-5 px-6 flex flex-col">
                {miniproducts.map((mini) => (
                  <div
                    key={mini.name}
                    className="flex gap-4 mb-5 cursor-pointer items-center group"
                    onClick={() => router.push(getProductRoute(mini.name))}
                  >
                    <Image
                      src={mini.image}
                      alt={mini.name}
                      className="w-22 h-20 border border-gray-200 rounded-md
                                  object-cover bg-gray-100 p-3"
                    />

                    <div className="flex flex-col">
                      <h1
                        className="text-[15px] text-black/80 font-semibold
                                      group-hover:text-blue-700"
                      >
                        {mini.name}
                      </h1>

                      <div className="flex gap-2 mt-2 items-center">
                        <span className="text-sm">Price:</span>
                        <span className="text-sm font-medium">
                          {mini.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Category  */}
            <div className="bg-white shadow-sm py-4 rounded-md mt-7">
              <h1 className="px-6 font-medium text-xl text-black/80">
                Popular Category
              </h1>
              <hr className="mt-4" />
              <div className="flex flex-col gap-4 px-6 mt-5">
                {/* lifestyle */}
                <Link href="/blogs/category/lifestyle">
                  <div className="flex items-center group justify-between cursor-pointer">
                    <h1 className="text-md  text-black/80 group-hover:text-blue-700">
                      Lifestyle
                    </h1>
                    <div className="bg-gray-100 group-hover:bg-blue-700 group-hover:text-white px-1.5 py-1 text-[13px] rounded-full">
                      05
                    </div>
                  </div>
                </Link>

                {/* business */}
                <Link href="/blogs/category/business">
                  <div className="flex items-center group justify-between cursor-pointer ">
                    <h1 className="text-md  text-black/80 group-hover:text-blue-700">
                      Business
                    </h1>
                    <div className="bg-gray-100 group-hover:bg-blue-700 group-hover:text-white px-1.5 py-1 text-[13px] rounded-full">
                      01
                    </div>
                  </div>
                </Link>

                {/* tech */}
                <Link href="/blogs/category/tech">
                  <div className="flex items-center group justify-between cursor-pointer ">
                    <h1 className="text-md  text-black/80 group-hover:text-blue-700">
                      Tech
                    </h1>
                    <div className="bg-gray-100 group-hover:bg-blue-700 group-hover:text-white px-1.5 py-1 text-[13px] rounded-full">
                      01
                    </div>
                  </div>
                </Link>

                {/* art */}
                <Link href="/blogs/category/art">
                  <div className="flex items-center group justify-between cursor-pointer ">
                    <h1 className="text-md  text-black/80 group-hover:text-blue-700">
                      Art
                    </h1>
                    <div className="bg-gray-100 group-hover:bg-blue-700 group-hover:text-white px-1.5 py-1 text-[13px] rounded-full">
                      01
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white shadow-sm py-4 rounded-md mt-7">
              <h1 className="px-6 font-medium text-xl text-black/80">Tags</h1>
              <hr className="mt-4" />

              <div className="flex flex-wrap gap-4 px-6 mt-5">
                {[
                  "Lifestyle",
                  "Tech",
                  "Trend",
                  "Art",
                  "Test",
                  "Health",
                  "Travel",
                  "Business",
                  "Startup",
                ].map((tag) => {
                  const slug = tag.toLowerCase();

                  return (
                    <Link key={tag} href={`/blogs/tags/${slug}`}>
                      <button
                        className="rounded-full border border-gray-200 px-4 py-2 text-md
                                    hover:bg-blue-700 hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
