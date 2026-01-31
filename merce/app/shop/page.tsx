"use client";

import React from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Arrival1 from "../../public/images/newarrival1.png";
import Arrival2 from "../../public/images/newarrival2.png";
import Arrival3 from "../../public/images/newarrival3.png";
import Arrival4 from "../../public/images/newarrival4.png";
import Arrival5 from "../../public/images/newarrival5.png";
import Arrival6 from "../../public/images/newarrival6.png";
import Arrival7 from "../../public/images/newarrival7.png";
import Arrival8 from "../../public/images/newarrival8.png";
import Arrival9 from "../../public/images/console.png";
import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const page = () => {
  const newarrivals = [
    {
      id: "imac",
      image: Arrival8,
      title: "Apple iMac M4 24-inch 2025",
      desc: "$333",
      sdesc: "$555",
    },

    {
      id: "ipad",
      image: Arrival5,
      title: "Apple iPad Pro Max",
      desc: "$450",
      sdesc: "$500",
    },
    {
      id: "16promax",
      image: Arrival4,
      title: "iPhone 16 Pro Max",
      desc: "$899",
      sdesc: "$930",
    },
    {
      id: "macbook",
      image: Arrival7,
      title: "MacBook Air M4 chip, 16/256GB",
      desc: "$600",
      sdesc: "$699",
    },
    {
      id: "fitness",
      image: Arrival2,
      title: "Indoor Steel Adjustable Silent Treadmill",
      desc: "$888",
      sdesc: "$999",
    },
    {
      id: "television",
      image: Arrival3,
      title: "Range 43 inch Frameless FHD Double...",
      desc: "$700",
      sdesc: "$800",
    },
    {
      id: "gamepad",
      image: Arrival9,
      title: "Havic HV-G69 USB Gamepad",
      desc: "$26",
      sdesc: "$54",
    },
    {
      id: "16pro",
      image: Arrival4,
      title: "iPhone 16 Pro - 8/128GB",
      desc: "$600",
      sdesc: "$899",
    },
    {
      id: "applewatch",
      image: Arrival6,
      title: "Apple Watch Ultra",
      desc: "$89",
      sdesc: "$99",
    },
    {
      id: "grinder",
      image: Arrival1,
      title: "Portable Electric Grinder Maker",
      desc: "$777",
      sdesc: "$800",
    },
  ];

  const colorOptions = [
    { key: "black", class: "bg-black" },
    { key: "white", class: "bg-white border border-black" },
    { key: "green", class: "bg-green-600" },
    { key: "blue", class: "bg-blue-600" },
    { key: "lightblue", class: "bg-blue-300" },
    { key: "gray", class: "bg-gray-500" },
    { key: "red", class: "bg-red-500" },
    { key: "pink", class: "bg-red-200" },
  ];

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState("Latest Products");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(true);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [openSize, setOpenSize] = useState(true); // default open
  const [activeSizes, setActiveSizes] = useState<string[]>([]); // default selected (optional)
  const [openColor, setOpenColor] = useState(true);
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [openPrice, setOpenPrice] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);
  const {
    addToCart,
    cartItems,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const [showWishlistAlert, setShowWishlistAlert] = useState(false);
  const [wishlistAction, setWishlistAction] = useState<"add" | "remove">("add");
  const [showAlert, setShowAlert] = useState(false);

  // for routing different product
  const router = useRouter();

  const categoryMap: Record<string, string[]> = {
    "Laptop & PC": ["imac", "macbook"],
    Watches: ["applewatch"],
    "Mobile & Tablets": ["ipad", "16promax", "16pro"],
    "Health & Sports": ["fitness"],
    "Home Appliances": ["grinder"],
    "Games & Videos": ["gamepad"],
    Televisions: ["television"],
  };

  const colorMap: Record<string, string[] | "none"> = {
    black: ["fitness", "television", "gamepad"],
    white: ["grinder"],
    green: "none",
    blue: ["ipad", "macbook"],
    lightblue: ["ipad", "16pro"],
    gray: ["applewatch"],
    red: "none",
    pink: "none",
  };

  const sizeMap: Record<string, string[]> = {
    XL: ["applewatch", "macbook", "gamepad"],
    XXL: ["applewatch", "macbook"],
    SM: ["gamepad"],
    XM: ["gamepad"],
  };

  let filteredProducts = newarrivals.slice();

  /* 1. COLOR FILTER — overrides everything */
  if (activeColors.length > 0) {
    let combinedIds: string[] = [];

    activeColors.forEach((c) => {
      const ids = colorMap[c];
      if (ids && ids !== "none") {
        combinedIds.push(...ids);
      }
    });

    const unique = [...new Set(combinedIds)];
    filteredProducts =
      unique.length > 0 ? newarrivals.filter((p) => unique.includes(p.id)) : [];
  }

  /* 2. SIZE FILTER — only runs if NO color override */
  if (activeColors.length === 0 && activeSizes.length > 0) {
    let combinedSizeIds: string[] = [];

    activeSizes.forEach((s) => {
      const ids = sizeMap[s];
      if (ids) combinedSizeIds.push(...ids);
    });

    const unique = [...new Set(combinedSizeIds)];
    filteredProducts =
      unique.length > 0
        ? filteredProducts.filter((p) => unique.includes(p.id))
        : [];
  }

  /* 3. CATEGORY FILTER — runs after size (if no color override) */
  if (activeColors.length === 0 && activeCategories.length > 0) {
    let combinedCatIds: string[] = [];

    activeCategories.forEach((cat) => {
      const ids = categoryMap[cat];
      if (ids) combinedCatIds.push(...ids);
    });

    const unique = [...new Set(combinedCatIds)];
    filteredProducts =
      unique.length > 0
        ? filteredProducts.filter((p) => unique.includes(p.id))
        : [];
  }

  // 4. PRICE FILTER — always last
  filteredProducts = filteredProducts.filter((item) => {
    // use desc field, like "$333"
    const raw = item.desc;

    // remove "$" and convert to number
    const price = Number(raw.replace(/[^0-9.-]/g, ""));

    // if parsing failed, skip item
    if (isNaN(price)) return false;

    return price >= minPrice && price <= maxPrice;
  });

  // 5. PAGINATION
  const itemsPerPage = 9;

  const paginatedProducts = filteredProducts.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage,
  );

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const selectOption = (value: string) => {
    setSelected(value);
    setOpenDropdown(false);
  };

  const handleCleanAll = () => {
    // Reset filters
    setActiveCategories([]);
    setActiveSizes([]);
    setActiveColors([]);

    // Reset price
    setMinPrice(0);
    setMaxPrice(999);

    // Reset dropdowns (optional)
    setOpen(true);
    setOpenSize(true);
    setOpenColor(true);
    setOpenPrice(true);

    // Reset sorting
    setSelected("Latest Products");

    // Reset page number
    setPageNumber(1);
  };

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
          Eplore All Products
        </h1>
        <div className="flex gap-2">
          <Link href="/">
            <p className="cursor-pointer hover:text-blue-500">Home /</p>
          </Link>
          <p>Shop /</p>
          <p className="text-blue-500">Shop With Sidebar</p>
        </div>
      </div>

      {/* Body  */}
      <div className="bg-gray-100/90 mt-10 mb-16 w-full">
        <div className="flex gap-8 ">
          {/* Main Left Content  */}
          <div className="w-[25%] hidden xl:block ">
            {/* Filters  */}
            <div className="bg-white px-5 py-4 mb-5 w-full rounded-sm flex justify-between items-center  mt-10 lg:mt-24">
              <h1>Filters:</h1>
              <button
                onClick={handleCleanAll}
                className="text-blue-700 cursor-pointer"
              >
                Clean All
              </button>
            </div>

            {/* Category  */}
            <div
              onClick={() => setOpen(!open)}
              className="bg-white px-5 py-4 mb-2 w-full flex justify-between items-center cursor-pointer select-none"
            >
              <h1 className="">Category</h1>

              <ChevronDown
                size={18}
                className={`text-black/80 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown Content */}
            <div
              className={`bg-white overflow-hidden transition-all duration-300 mt-[-5px] mb-5
                ${open ? "max-h-[500px] opacity-100 px-5 py-7" : "max-h-0 opacity-0 px-5 py-0"}
              `}
            >
              <div className="space-y-3">
                {Object.entries(categoryMap).map(([name, ids]) => {
                  const isActive = activeCategories.includes(name);

                  return (
                    <div
                      key={name}
                      onClick={(e) => {
                        e.stopPropagation(); // prevents closing dropdown when selecting category
                        setActiveCategories((prev) =>
                          isActive
                            ? prev.filter((item) => item !== name)
                            : [...prev, name],
                        );
                        setPageNumber(1);
                      }}
                      className={`flex cursor-pointer justify-between items-center group px-2 py-1 rounded
                        ${isActive ? "bg-blue-50" : ""}`}
                    >
                      <label
                        className={`flex items-center gap-2 text-[15px] cursor-pointer
                        ${isActive ? "text-blue-700 font-medium" : "group-hover:text-blue-700"}`}
                      >
                        <input
                          type="checkbox"
                          checked={isActive}
                          readOnly
                          className="cursor-pointer"
                        />
                        {name}
                      </label>

                      <div
                        className={`rounded-full px-2 py-0.5 text-[11px] transition
                        ${
                          isActive
                            ? "bg-blue-700 text-white"
                            : "bg-gray-100 group-hover:bg-blue-700 group-hover:text-white"
                        }`}
                      >
                        {ids.length}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Size */}
            <div
              onClick={() => setOpenSize(!openSize)}
              className="bg-white px-5 py-4 mb-2 w-full flex justify-between items-center cursor-pointer select-none"
            >
              <h1 className="">Size</h1>

              <ChevronDown
                size={18}
                className={`text-black/80 transition-transform duration-300 ${
                  openSize ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Sizes Dropdown */}
            <div
              className={`bg-white overflow-hidden transition-all duration-300 mb-5 -mt-1.5 
              ${openSize ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex items-center justify-between px-12 py-4 ">
                {["XL", "XXL", "SM", "XM"].map((size) => {
                  const selected = activeSizes.includes(size);

                  return (
                    <div
                      key={size}
                      onClick={(e) => {
                        e.stopPropagation();

                        setActiveSizes((prev) =>
                          selected
                            ? prev.filter((s) => s !== size)
                            : [...prev, size],
                        );

                        setPageNumber(1);
                      }}
                      className={`px-3 py-1 rounded-full text-[14px] cursor-pointer transition
                        ${
                          selected
                            ? "bg-blue-700 text-white"
                            : "bg-gray-100 text-black hover:bg-gray-200"
                        }
                      `}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Colors */}
            <div
              onClick={() => setOpenColor(!openColor)}
              className="bg-white px-5 py-4 mb-2 w-full flex justify-between items-center cursor-pointer select-none"
            >
              <h1 className="">Colors</h1>

              <ChevronDown
                size={18}
                className={`text-black/80 transition-transform duration-300 ${openColor ? "rotate-180" : ""}`}
              />
            </div>

            {/* Colors Dropdown */}
            <div
              className={`bg-white overflow-hidden transition-all duration-300 mb-5 -mt-1.5 ${openColor ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex items-center justify-between gap-3 px-8 py-4">
                {colorOptions.map((c) => {
                  const isSelected = activeColors.includes(c.key);

                  return (
                    <div
                      key={c.key}
                      // Prevent parent toggle (openColor) from triggering when clicking a color
                      onClick={(e) => {
                        e.stopPropagation();

                        // Toggle selection in activeColors array
                        setActiveColors((prev) => {
                          if (prev.includes(c.key)) {
                            // remove
                            return prev.filter((col) => col !== c.key);
                          } else {
                            // add
                            return [...prev, c.key];
                          }
                        });

                        // reset to first page when changing filters
                        setPageNumber(1);
                      }}
                      // Add accessible role/tabindex
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          // duplicate click handler for keyboard
                          setActiveColors((prev) => {
                            if (prev.includes(c.key))
                              return prev.filter((col) => col !== c.key);
                            return [...prev, c.key];
                          });
                          setPageNumber(1);
                        }
                      }}
                      className={`w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-all
                      ${c.key === "white" ? "border border-black" : ""} 
                      ${isSelected ? "transform scale-105" : "hover:scale-105"} ${c.class}`}
                      title={c.key}
                    >
                      {/* show check only when selected */}
                      {isSelected && (
                        <Check
                          size={14}
                          className={
                            c.key === "white" ? "text-black" : "text-white"
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price */}
            <div
              onClick={() => setOpenPrice(!openPrice)}
              className="bg-white px-5 py-4 mb-2 w-full flex justify-between items-center cursor-pointer select-none"
            >
              <h1 className="">Price</h1>

              <ChevronDown
                size={18}
                className={`text-black/80 transition-transform duration-300 ${
                  openPrice ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Price Dropdown */}
            <div
              className={`bg-white overflow-hidden transition-all duration-300 -mt-1.5 mb-7 rounded-sm
              ${openPrice ? "max-h-[300px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"}
            `}
            >
              <div className="px-6 space-y-5">
                {/* Range Labels */}
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>{minPrice}</span>
                  <span>{maxPrice}</span>
                </div>

                {/* Slider */}
                <div className="relative h-1 w-full">
                  {/* Gray Track */}
                  <div className="absolute inset-0 bg-gray-300  rounded-full" />

                  {/* Blue Fill */}
                  <div
                    className="absolute h-2 -mt-0.5 bg-blue-600 rounded-full"
                    style={{
                      left: `${(minPrice / 999) * 100}%`,
                      right: `${100 - (maxPrice / 999) * 100}%`,
                    }}
                  />

                  {/* Min Slider */}
                  <input
                    type="range"
                    min="0"
                    max="999"
                    value={minPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value <= maxPrice) setMinPrice(value);
                    }}
                    className="range-thumb absolute w-full pointer-events-auto"
                  />

                  {/* Max Slider */}
                  <input
                    type="range"
                    min="0"
                    max="999"
                    value={maxPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= minPrice) setMaxPrice(value);
                    }}
                    className="range-thumb absolute w-full pointer-events-auto"
                  />
                </div>

                {/* Input Boxes */}
                <div className="flex justify-between mt-10">
                  <div className="flex">
                    <div className="border px-3 py-2 text-sm text-gray-400">
                      $
                    </div>
                    <div className="border px-3 py-2 text-sm text-gray-400">
                      {minPrice}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="border px-3 py-2 text-sm text-gray-400">
                      $
                    </div>
                    <div className="border px-3 py-2 text-sm text-gray-400">
                      {maxPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Right Content  */}
          <div className="w-full xl:w-[75%]">
            <div className="flex justify-between pt-10 lg:pt-24 px-3 xl:px-0 ">
              <div className="bg-white rounded-md shadow-sm px-3 py-3 w-full flex justify-between relative">
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

                  <h1>Showing 10 of 10 Products</h1>
                </div>

                {/* DROPDOWN MENU */}
                {openDropdown && (
                  <div className="absolute top-16 left-4 bg-white border shadow-md rounded-md w-40 text-sm z-50">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectOption("Latest Products")}
                    >
                      Latest Products
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectOption("Best Selling")}
                    >
                      Best Selling
                    </div>
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
            <div className="mx-5 xl:mx-0 mt-8 pb-10">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-xl font-semibold text-gray-600 py-20">
                  No Product Found!
                </p>
              ) : view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {paginatedProducts.map((item) => {
                    const isInCart = cartItems.some((ci) => ci.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className="relative group cursor-pointer"
                        onClick={() => router.push(getProductRoute(item.title))}
                      >
                        <div className="bg-white rounded-md">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="p-8"
                          />
                        </div>

                        {/* Hover buttons */}
                        <div
                          className="absolute inset-x-0 bottom-24 flex items-center justify-center gap-3
                                  opacity-0 translate-y-3
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-white rounded-full p-2 shadow">
                            <Eye size={16} />
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

                        <h2 className="font-semibold mt-4 hover:text-blue-700">
                          {item.title}
                        </h2>

                        <div className="flex items-center mt-1 gap-1 text-lg">
                          <p className="text-gray-500 line-through">
                            {item.sdesc}
                          </p>
                          <p className="font-semibold">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // list view
                <div className="flex flex-col gap-6">
                  {paginatedProducts.map((item) => {
                    const isInCart = cartItems.some((ci) => ci.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className="bg-white w-full flex px-6 py-10 rounded-md shadow-sm border
                              group relative cursor-pointer"
                        onClick={() => router.push(getProductRoute(item.title))}
                      >
                        {/* IMAGE */}
                        <div className="min-w-0 md:min-w-[220px] flex items-center relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="object-contain w-[150px] md:w-[230px]"
                          />

                          {/* Hover buttons */}
                          <div
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-3
                                  opacity-0 translate-y-3
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="bg-white rounded-full p-2 shadow">
                              <Eye size={16} />
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
                                        price: Number(
                                          item.desc.replace("$", ""),
                                        ),
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

                        <div className="border-r mx-6" />

                        {/* TEXT */}
                        <div className="flex flex-col justify-center">
                          <h2 className="text-sm md:text-lg font-semibold hover:text-blue-700">
                            {item.title}
                          </h2>

                          <div className="flex items-center mt-3 gap-3 text-lg">
                            <p className="text-gray-500 line-through">
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

            {/* FOOTER BUTTONS */}
            <div className="flex items-center justify-center gap-2 mt-0 pb-28">
              {/* PREV */}
              <button
                onClick={() => setPageNumber(1)}
                disabled={pageNumber === 1}
                className={`py-2 px-4 rounded-sm border cursor-pointer 
                ${
                  pageNumber === 1
                    ? "text-gray-400 border-gray-200 bg-white"
                    : "text-black border-gray-300 bg-white"
                }`}
              >
                Prev
              </button>

              {/* PAGE 1 */}
              <div
                onClick={() => setPageNumber(1)}
                className={`py-2 px-4 rounded-sm cursor-pointer border 
                ${
                  pageNumber === 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                1
              </div>

              {/* PAGE 2 */}
              <div
                onClick={() => setPageNumber(2)}
                className={`py-2 px-4 rounded-sm cursor-pointer border 
                ${
                  pageNumber === 2
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                2
              </div>

              {/* NEXT */}
              <button
                onClick={() => setPageNumber(2)}
                disabled={pageNumber === 2}
                className={`py-2 px-4 rounded-sm border cursor-pointer
                ${
                  pageNumber === 2
                    ? "text-gray-400 border-gray-200 bg-white"
                    : "text-black border-gray-300 bg-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
