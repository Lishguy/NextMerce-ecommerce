"use client";

import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import Arrival7 from "../../../public/images/newarrival7.png";
import Arrival8 from "../../../public/images/newarrival8.png";
import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Check } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const LaptopPc = () => {
  const newarrivals = [
    {
      id: "imac",
      image: Arrival8,
      title: "Apple iMac M4 24-inch 2025",
      desc: "$333",
      sdesc: "$555",
    },
    {
      id: "macbook",
      image: Arrival7,
      title: "MacBook Air M4 chip, 16/256GB",
      desc: "$600",
      sdesc: "$699",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState("Latest Products");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  const {
    addToCart,
    cartItems,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const [showWishlistAlert, setShowWishlistAlert] = useState(false);
  const [wishlistAction, setWishlistAction] = useState<"add" | "remove">("add");

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const selectOption = (value: string) => {
    setSelected(value);
    setOpenDropdown(false);
  };

  return (
    <div className="">
      {showAlert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-lg">
            <div className="bg-green-600 rounded-full p-1">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-sm font-medium text-black">
              Product added to cart
            </p>
          </div>
        </div>
      )}

      {/* wishlist alert   */}
      {showWishlistAlert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-lg">
            <div className="bg-green-600 rounded-full p-1">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-sm font-medium text-black">
              {wishlistAction === "add"
                ? "Product added to wishlist"
                : "Product removed from wishlist"}
            </p>
          </div>
        </div>
      )}

      {/* Header  */}
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-2 md:gap-0 px-2 items-start md:items-center">
        <h1 className="font-semibold text-[21px] md:text-4xl text-black/80">
          Laptop Pc
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500">Home /</p>
          </Link>
          <p>Category /</p>
          <p className="text-blue-500">Laptop Pc</p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10 mb-16 w-full">
        <div className="flex justify-between pt-10 lg:pt-24 px-3 lg:px-0 ">
          <div className="bg-white rounded-md shadow-sm px-4 py-3 w-full flex justify-between relative">
            {/* LEFT CONTENT */}
            <div className="flex flex-col md:flex-row gap-5 items-start md:items-center cursor-pointer">
              {/* DROPDOWN BUTTON */}
              <div
                onClick={toggleDropdown}
                className="flex gap-1 items-center border border-gray-300 text-gray-400 px-5 py-2.5 rounded-md text-sm"
              >
                {selected}
                {openDropdown ? (
                  <ChevronUp size={18} className="mt-1" />
                ) : (
                  <ChevronDown size={18} className="mt-1" />
                )}
              </div>
              <h1>Showing 2 of 2 Products</h1>
            </div>

            {/* DROPDOWN MENU */}
            {openDropdown && (
              <div className="absolute top-16 left-4 bg-white border shadow-md rounded-md w-40 text-sm z-50">
                {["Latest Products", "Best Selling"].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => selectOption(opt)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}

            {/* RIGHT CONTENT */}
            <div className="flex items-center gap-3">
              {/* GRID BUTTON */}
              <div
                onClick={() => setView("grid")}
                className={`cursor-pointer px-2.5 py-1.5 rounded-sm 
              ${
                view === "grid"
                  ? "bg-blue-700/90 hover:bg-blue-700"
                  : "bg-gray-100 hover:bg-blue-700 border"
              }`}
              >
                <LayoutGrid
                  size={20}
                  className={`${view === "grid" ? "text-white" : "text-black hover:text-white"}`}
                />
              </div>

              {/* LIST BUTTON */}
              <div
                onClick={() => setView("list")}
                className={`cursor-pointer px-2.5 py-1.5 rounded-sm 
              ${
                view === "list"
                  ? "bg-blue-700/90 hover:bg-blue-700"
                  : "bg-gray-100 hover:bg-blue-700 border"
              }`}
              >
                <List
                  size={20}
                  className={`${view === "list" ? "text-white" : "text-black hover:text-white"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT LISTING */}
        <div className="mx-5 xl:mx-0 mt-8 pb-28">
          {/* GRID VIEW */}
          {view === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {newarrivals.map((item) => {
                const isInCart = cartItems.some((ci) => ci.id === item.id);
                return (
                  <div key={item.id} className="relative group">
                    <div className="bg-white rounded-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="p-8"
                      />
                    </div>

                    {/* HOVER BUTTONS */}
                    <div
                      className="absolute inset-x-0 bottom-20 flex items-center justify-center gap-3 opacity-0 translate-y-3
                                group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <div className="bg-white text-black rounded-full p-2 shadow">
                        <Eye
                          className="text-gray-600 hover:text-blue-600"
                          size={16}
                        />
                      </div>

                      <Button
                        onClick={() => {
                          if (isInCart) {
                            router.push("/checkout");
                            return;
                          }

                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: Number(item.desc.replace("$", "")),
                            image: item.image.src,
                          });

                          setShowAlert(true);
                          setTimeout(() => setShowAlert(false), 2500);
                        }}
                        className={`rounded-full px-5 py-3 text-white cursor-pointer
                      ${
                        isInCart
                          ? "bg-blue-950 hover:bg-blue-900"
                          : "bg-blue-700/90 hover:bg-blue-700"
                      }
                    `}
                      >
                        {isInCart ? "Checkout" : "Add to Cart"}
                      </Button>

                      {/* Heart Icon  */}
                      {(() => {
                        const isWishlisted = wishlistItems.some(
                          (wi) => wi.id === item.id,
                        );

                        return (
                          <div
                            onClick={() => {
                              if (isWishlisted) {
                                removeFromWishlist(item.id);
                                setWishlistAction("remove");
                              } else {
                                addToWishlist({
                                  id: item.id,
                                  title: item.title,
                                  price: Number(item.desc.replace("$", "")),
                                  image: item.image.src,
                                });
                                setWishlistAction("add");
                              }

                              setShowWishlistAlert(true);
                              setTimeout(
                                () => setShowWishlistAlert(false),
                                2000,
                              );
                            }}
                            className="bg-white rounded-full p-2 shadow cursor-pointer"
                          >
                            <Heart
                              size={16}
                              className={`
                                            transition-all
                                            ${
                                              isWishlisted
                                                ? "fill-blue-950 text-blue-950 hover:fill-blue-700 hover:text-blue-700"
                                                : "text-gray-600 hover:text-blue-600"
                                            }
                                          `}
                            />
                          </div>
                        );
                      })()}
                    </div>

                    <h2 className="font-semibold mt-4 hover:text-blue-700 cursor-pointer">
                      {item.title}
                    </h2>

                    <div className="flex items-center mt-1 gap-1 text-lg">
                      <p className="text-gray-500 font-medium line-through">
                        {item.sdesc}
                      </p>
                      <p className="font-semibold">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* LIST VIEW */}
          {view === "list" && (
            <div className="flex flex-col gap-6">
              {newarrivals.map((item) => {
                const isInCart = cartItems.some((ci) => ci.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white w-full flex px-6 py-10 rounded-md shadow-sm border group relative"
                  >
                    {/* LEFT — PRODUCT IMAGE */}
                    <div className="min-w-0 md:min-w-[220px] flex flex-col items-center justify-start relative">
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-[200px] md:w-[230px]"
                      />

                      {/* HOVER BUTTONS UNDER IMAGE */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center gap-3 
                                  opacity-0 translate-y-3
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300"
                      >
                        <div className="bg-white text-black rounded-full p-2 shadow">
                          <Eye
                            className="text-gray-600 hover:text-blue-600"
                            size={16}
                          />
                        </div>

                        <Button
                          onClick={() => {
                            if (isInCart) {
                              router.push("/checkout");
                              return;
                            }

                            addToCart({
                              id: item.id,
                              title: item.title,
                              price: Number(item.desc.replace("$", "")),
                              image: item.image.src,
                            });

                            setShowAlert(true);
                            setTimeout(() => setShowAlert(false), 2500);
                          }}
                          className={`rounded-full px-5 py-3 text-white cursor-pointer
                      ${
                        isInCart
                          ? "bg-blue-950 hover:bg-blue-900"
                          : "bg-blue-700/90 hover:bg-blue-700"
                      }
                    `}
                        >
                          {isInCart ? "Checkout" : "Add to Cart"}
                        </Button>

                        {/* Heart Icon  */}
                        {(() => {
                          const isWishlisted = wishlistItems.some(
                            (wi) => wi.id === item.id,
                          );

                          return (
                            <div
                              onClick={() => {
                                if (isWishlisted) {
                                  removeFromWishlist(item.id);
                                  setWishlistAction("remove");
                                } else {
                                  addToWishlist({
                                    id: item.id,
                                    title: item.title,
                                    price: Number(item.desc.replace("$", "")),
                                    image: item.image.src,
                                  });
                                  setWishlistAction("add");
                                }

                                setShowWishlistAlert(true);
                                setTimeout(
                                  () => setShowWishlistAlert(false),
                                  2000,
                                );
                              }}
                              className="bg-white rounded-full p-2 shadow cursor-pointer"
                            >
                              <Heart
                                size={16}
                                className={`
                                              transition-all
                                              ${
                                                isWishlisted
                                                  ? "fill-blue-950 text-blue-950 hover:fill-blue-700 hover:text-blue-700"
                                                  : "text-gray-600 hover:text-blue-600"
                                              }
                                            `}
                              />
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* BORDER BETWEEN IMAGE AND TEXT */}
                    <div className="border-r mx-6"></div>

                    {/* RIGHT — TEXT CONTENT */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-sm md:text-lg font-semibold text-black/90 hover:text-blue-700 cursor-pointer">
                        {item.title}
                      </h2>

                      <div className="flex items-center mt-3 gap-3 text-lg">
                        <p className="text-gray-500 font-medium line-through">
                          {item.sdesc}
                        </p>
                        <p className="font-semibold">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaptopPc;
