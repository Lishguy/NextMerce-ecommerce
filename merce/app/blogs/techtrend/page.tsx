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
import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

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
      name: "Masterclass: Creating Delicious Italian Pasta",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog7,
    },
    {
      name: "Tech Trends 2022: What's Changing in the Digital World",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog4,
    },
    {
      name: "Exploring the Wonders of Modern Art: A Gallery Tour",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog6,
    },
    {
      name: "A Guide to Sustainable Living: Reduce, Reuse, Recycle",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog8,
    },
    {
      name: "The Benefits of Regular Exercise for a Healthy Lifestyle",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog3,
    },
    {
      name: "The Ultimate Guide to Traveling on a Budget",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic totam atque ratione provident minima",
      image: blog1,
    },
    {
      name: "The Psychology of Happiness: Finding Joy in Everyday Life",
      date: "Nov 30 2025",
      views: "100k Views",
      desc: "Read More",
      p: "In the world of web development, staying ahead of the curve is crucial. One technology stack that and more.",
      image: blog2,
    },
    {
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
      name: "Masterclass: Creating Delicious Italian...",
      date: "Nov 30 2025",
      views: "100k Views",
      image: blog7,
    },
    {
      name: "Tech Trends 2022: What's Changing in the...",
      date: "Nov 30 2025",
      views: "100k Views",
      image: blog4,
    },
    {
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

  return (
    <div>
      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-3xl text-black/80 ">
          Blog Details
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500 text-sm">Home /</p>
          </Link>
          <p className="text-blue-500 text-sm">Blog Details</p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10  mb-16 w-full">
        <div className="flex flex-col lg:flex-row py-26 px-4 xl:px-0 gap-8">
          {/* main content  */}
          <div className="w-full justify-center items-center px-2 md:px-52 ">
            {blogs.slice(1, 2).map((blog, index) => (
              <div key={index} className="w-full">
                {/* Image */}
                <div className="w-full overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    alt="Blog image"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Content below image */}
                <div className="mt-7">
                  <div className="flex gap-2 mt-5 mb-2 items-center">
                    <span className="text-md hover:text-blue-700">
                      {blog.date}
                    </span>
                    <div className="border-l-2 gap-1 ">
                      <span className="pl-2 text-md  hover:text-blue-700">
                        {blog.views}
                      </span>
                    </div>
                  </div>
                  <h1 className="text-xl md:text-4xl font-semibold text-black/80">
                    {blog.name}
                  </h1>
                  <div className="mt-6">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Provident eligendi aperiam possimus deleniti illo, sint
                      temporibus autem iure ab nesciunt, architecto, et odio
                      quod! Repellat aliquam optio est quas, nulla dolorum
                      accusamus saepe doloremque consequatur similique eos
                      tempore. Possimus soluta veritatis iusto dolorum.
                      Accusantium eos et impedit tempora! Fuga, dolores.
                    </p>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni vero recusandae id eligendi aspernatur magnam, illo
                      odit facilis earum qui sit reiciendis error, harum fugiat
                      saepe ratione temporibus accusantium consequuntur!
                    </p>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem, incidunt enim repudiandae at eos reiciendis
                      temporibus amet vero ullam est ipsam commodi. Eligendi
                      laudantium culpa ullam, assumenda, eius quidem ipsum
                      perspiciatis animi facere provident aut eum vero fugit rem
                      aliquid. Reiciendis quos corporis eligendi ipsa animi
                      quisquam dignissimos consectetur distinctio, vitae
                      expedita neque olores?
                    </p>

                    <div className="mt-10">
                      <h1 className="text-xl md:text-2xl font-semibold text-black/80">
                        Digital marketplace for Ui/Ux designers.
                      </h1>
                      <div className="mt-5 px-2">
                        <p>● Consectetur adipiscing elit in voluptate velit.</p>
                        <p>● Mattis vulputate cupidatat.</p>
                        <p>
                          ● Vulputate enim nulla aliquet porttitor odio
                          pellentesque
                        </p>
                        <p>● Ligula ullamcorper malesuada proin</p>
                      </div>
                    </div>

                    <div className="bg-white py-7 px-3 md:px-10 rounded-lg italic  mt-16 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In quae accusamus ullam harum nesciunt, molestias aliquam
                      fugiat doloribus blanditiis.
                    </div>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum cum ipsum atque iusto sint et recusandae eligendi
                      nesciunt delectus deserunt.
                    </p>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magnam voluptatibus tenetur unde culpa consequatur
                      nesciunt, dolore debitis veniam ab numquam.
                    </p>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis quod distinctio magnam alias, molestias dolor
                      magni necessitatibus mollitia? Numquam harum veritatis
                      placeat tenetur blanditiis voluptatum quae illo minima!
                      Perferendis eveniet nulla necessitatibus maiores suscipit
                      iure. Quasi culpa quaerat earum laudantium?
                    </p>

                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis quibusdam quisquam laudantium, magni atque
                      vitae ratione officiis error exercitationem! Obcaecati
                      impedit sed quod harum, nostrum voluptatibus sint placeat
                      molestiae repudiandae libero voluptatum a quaerat
                      necessitatibus praesentium ea facilis ipsam velit.
                    </p>

                    <div className="flex justify-between items-center mt-10">
                      <div className="flex items-center ">
                        <h1>Tags:</h1>
                        <Link href="/blogs/tags/tech">
                          <button className="bg-white hover:bg-blue-700 hover:text-white px-4 py-2 border border-gray-200 ml-2 md:ml-4 rounded-full">
                            Tech
                          </button>
                        </Link>
                        <Link href="/blogs/tags/trend">
                          <button className="bg-white hover:bg-blue-700 hover:text-white px-4 py-2 border border-gray-200 ml-1 md:ml-3 rounded-full">
                            Trend
                          </button>
                        </Link>
                      </div>

                      {/* Social  */}
                      <div className="flex items-center gap-2 md:gap-4">
                        {/* Facebook */}
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#0057ad] flex items-center justify-center 
                                        hover:opacity-90 transition"
                        >
                          <Facebook
                            size={18}
                            className="text-white fill-white"
                          />
                        </a>

                        {/* X (Twitter) */}
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-black flex items-center justify-center 
                                        hover:opacity-90 transition"
                        >
                          <FaXTwitter size={18} className="text-white" />
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center 
                                        hover:opacity-90 transition"
                        >
                          <Linkedin
                            size={18}
                            className="text-white fill-white"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
