import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  gnmLogo?: string;
  callIcon?: string;
  wishlistIcon?: string;
  cartIcon?: string;
  userIcon?: string;
}

export const Header: React.FC<HeaderProps> = ({
  gnmLogo = "/logo.png",
  callIcon = "/phone.svg",
  wishlistIcon = "/wishlist.svg",
  cartIcon = "/cart.svg",
  userIcon = "/user.svg",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationItems = [
    { name: "HOME", href: "/", hasDropdown: false },
    { name: "GROCERY", href: "/grocery", hasDropdown: true },
    {
      name: "HOTFRUITS & VEGETABLES",
      href: "/fruits-vegetables",
      hasDropdown: true,
    },
    { name: "FRESH FROZEN FOODS", href: "/frozen-foods", hasDropdown: true },
    { name: "HOSNACKS & SWEETSNACK", href: "/snacks", hasDropdown: true },
    { name: "NONSOFT DRINKS", href: "/drinks", hasDropdown: true },
    { name: "SHOPME", href: "/shop", hasDropdown: false },
    { name: "CONTACT US", href: "/contact", hasDropdown: false },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="w-full h-[30px] bg-[#115530]">
        {/* Content can go here if needed */}
      </div>
      {/* Top Bar */}
      <div className="text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={gnmLogo}
                  alt="GNM"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center text-white">
              <Image
                src={callIcon}
                alt="Call"
                width={20}
                height={20}
                className="mr-2"
              />
              <div className="text-sm">
                <div className="font-medium text-black">
                  Your Daily Newscast
                </div>
                <div className="text-black">+41794750809</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search entire store here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-12 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="text-white hover:text-green-200 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={wishlistIcon}
                    alt="Wishlist"
                    width={24}
                    height={24}
                    className="mb-1"
                  />
                  <span className="text-xs text-black hidden sm:block">
                    Wishlist
                  </span>
                </div>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="text-white hover:text-green-200 transition-colors"
              >
                <div className="flex flex-col items-center relative">
                  <Image
                    src={cartIcon}
                    alt="Cart"
                    width={24}
                    height={24}
                    className="mb-1"
                  />
                  <span className="text-xs text-black hidden sm:block">
                    My Cart
                  </span>
                  {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span> */}
                </div>
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="text-white hover:text-green-200 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={userIcon}
                    alt="Account"
                    width={24}
                    height={24}
                    className="mb-1"
                  />
                  <span className="text-xs hidden  text-black sm:block">
                    Account
                  </span>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-green-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between h-12">
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Subcategory 1
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Subcategory 2
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Subcategory 3
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search entire store here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pr-12 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-md">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-200 block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};