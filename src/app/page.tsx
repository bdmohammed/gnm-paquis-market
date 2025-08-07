"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  ArrowRight,
  Truck,
  Headphones,
  Shield,
  Star,
} from "lucide-react";
import { Header } from "gnm/layouts/Header";
import { Footer } from "gnm/layouts/Footer";

interface HeroSectionProps {
  groceryBagImage?: string;
  websiteUrl?: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({
  groceryBagImage = "/hero_section.png",
  websiteUrl = "www.gnm.ch",
}) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            {/* Grand Opening Badge */}
            <div className="inline-block">
              <span className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Grand Opening
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Best Geneva
                <span className="text-green-700 block">Grocery</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Best of Geneva Grocery From Fresh Fruits And Vegetables To
                Pickles And Papads
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </div>

            {/* Website URL */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 font-medium">{websiteUrl}</p>
            </div>
          </div>

          {/* Right Content - Grocery Bag Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main grocery bag image */}
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src={groceryBagImage}
                  alt="Fresh Geneva Grocery Bag with Fruits and Vegetables"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-12 h-12 bg-red-200 rounded-full opacity-60 animate-ping"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-green-50 to-transparent rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-orange-50 to-transparent rounded-full opacity-50"></div>
      </div>

      {/* Optional: Floating vegetables/fruits elements */}
      <div className="hidden lg:block absolute top-20 right-1/4 animate-float">
        <div className="w-8 h-8 bg-red-400 rounded-full opacity-70"></div>
      </div>
      <div className="hidden lg:block absolute bottom-32 right-1/3 animate-float-delayed">
        <div className="w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
      </div>
      <div className="hidden lg:block absolute top-1/3 right-10 animate-bounce">
        <div className="w-4 h-4 bg-orange-400 rounded-full opacity-70"></div>
      </div>
    </section>
  );
};

interface Product {
  id: number;
  name: string;
  brand?: string;
  price: string;
  image: string;
  isWishlisted?: boolean;
}

interface FeaturedProductsProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: "RED LABEL LOOSE TEA 450G",
    price: "CHF7.80",
    image: "/products/red-label-tea.png",
    isWishlisted: false,
  },
  {
    id: 2,
    name: "MDH PANI PURI MASALA 100G",
    price: "CHF2.90",
    image: "/products/mdh-pani-puri.png",
    isWishlisted: false,
  },
  {
    id: 3,
    name: "MDH KASHMIRI MIRCH 100G",
    price: "CHF2.90",
    image: "/products/mdh-kashmiri-mirch.png",
    isWishlisted: false,
  },
  {
    id: 4,
    name: "Gits Idly & Dosa Mix",
    price: "CHF7.80",
    image: "/products/gits-dosa-mix.png",
    isWishlisted: false,
  },
  {
    id: 5,
    name: "HR DAL TADKA 300G",
    price: "CHF3.90",
    image: "/products/hr-dal-tadka.png",
    isWishlisted: false,
  },
  {
    id: 6,
    name: "Tata Sampann Unpolished",
    price: "CHF4.80",
    image: "/products/tata-sampann.png",
    isWishlisted: false,
  },
];

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products = defaultProducts,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage.desktop >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, products.length - itemsPerPage.desktop)
        : prevIndex - 1
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    // Add your cart logic here
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FEATURED PRODUCTS
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Products Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            disabled={currentIndex + itemsPerPage.desktop >= products.length}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage.desktop)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 group relative">
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Product Image */}
                    <div className="relative h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">
                          {product.price}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-gray-100 hover:bg-green-600 text-gray-700 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to basket</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage.desktop),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage.desktop)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / itemsPerPage.desktop) === index
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface VegetablesBannerProps {
  basketImage?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const VegetablesBanner: React.FC<VegetablesBannerProps> = ({
  basketImage = "/vegetables-basket.png",
  title = "SUPER SALE VEGETABLES",
  description = "Don't Miss Out On Our Super Sale! Fresh, High-Quality Vegetables At Unbeatable Prices. Stock Up While Supplies Last",
  buttonText = "Shop Now",
  buttonLink = "/vegetables",
}) => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {/* Main Banner Container */}
          <div className="relative bg-gradient-to-r from-green-400 via-teal-500 to-teal-700 min-h-[300px] md:min-h-[400px]">
            {/* Background Pattern/Decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Curved Background Element */}
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-green-200/20 to-transparent rounded-r-full"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-800/20 to-transparent"></div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full px-8 py-12">
              {/* Left Side - Vegetables Basket Image */}
              <div className="relative">
                {/* Circular Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-green-100/30 rounded-full"></div>
                </div>

                {/* Vegetables Basket */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                    <Image
                      src={basketImage}
                      alt="Fresh Vegetables Basket"
                      fill
                      className="object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-12 right-12 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute bottom-16 left-8 w-6 h-6 bg-red-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-1/3 left-4 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-60"></div>
              </div>

              {/* Right Side - Content */}
              <div className="text-white space-y-6 lg:pl-8">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-lg">
                  {description}
                </p>

                {/* Call to Action Button */}
                <div className="pt-4">
                  <Link
                    href={buttonLink}
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <span className="mr-2">{buttonText}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Alternative Compact Version
// const CompactVegetablesBanner: React.FC<VegetablesBannerProps> = ({
//   basketImage = "/vegetables-basket.png",
//   title = "SUPER SALE VEGETABLES",
//   description = "Don't Miss Out On Our Super Sale! Fresh, High-Quality Vegetables At Unbeatable Prices.",
//   buttonText = "Shop Now",
//   buttonLink = "/vegetables",
// }) => {
//   return (
//     <section className="py-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-gradient-to-r from-green-400 to-teal-600 rounded-xl overflow-hidden shadow-lg">
//           <div className="grid grid-cols-1 md:grid-cols-3 items-center">
//             {/* Image Section */}
//             <div className="relative p-6 flex justify-center">
//               <div className="w-32 h-32 md:w-40 md:h-40 relative">
//                 <div className="absolute inset-0 bg-green-200/20 rounded-full"></div>
//                 <Image
//                   src={basketImage}
//                   alt="Fresh Vegetables"
//                   fill
//                   className="object-contain relative z-10"
//                 />
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="col-span-2 p-6 text-white">
//               <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
//               <p className="text-sm md:text-base opacity-90 mb-4 leading-relaxed">
//                 {description}
//               </p>
//               <Link
//                 href={buttonLink}
//                 className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-sm"
//               >
//                 {buttonText}
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

interface Product {
  id: number;
  name: string;
  brand?: string;
  weight?: string;
  price: string;
  image: string;
  isWishlisted?: boolean;
}

interface PopularProductsProps {
  products?: Product[];
  title?: string;
}

const defaultPopularProducts: Product[] = [
  {
    id: 1,
    name: "Haldiram's Masala Moong Dal 200g",
    price: "CHF7.80",
    image: "/products/haldiram-moong-dal.png",
    isWishlisted: true,
  },
  {
    id: 2,
    name: "Haldiram's Dakshin Madras Mixture 200g",
    price: "CHF7.80",
    image: "/products/haldiram-madras-mixture.png",
    isWishlisted: false,
  },
  {
    id: 3,
    name: "Haldiram's Ready To Eat - Panipuri, 360 g",
    price: "CHF7.80",
    image: "/products/haldiram-panipuri.png",
    isWishlisted: false,
  },
  {
    id: 4,
    name: "Haldiram's Ready To Eat - Dal Palak, 300 g",
    price: "CHF7.80",
    image: "/products/haldiram-dal-palak.png",
    isWishlisted: false,
  },
  {
    id: 5,
    name: "Potato Crackers - Bombay Sweets",
    price: "CHF7.80",
    image: "/products/potato-crackers.png",
    isWishlisted: false,
  },
  {
    id: 6,
    name: "Fried Vermicelli (Pheni) - Ahmed Foods",
    price: "CHF7.80",
    image: "/products/fried-vermicelli.png",
    isWishlisted: false,
  },
  {
    id: 7,
    name: "Nellara Idly & Dosa Batter 1kg",
    price: "CHF7.80",
    image: "/products/nellara-batter.png",
    isWishlisted: false,
  },
  {
    id: 8,
    name: "Bikano Laddu Delight, 250",
    price: "CHF7.80",
    image: "/products/bikano-laddu.png",
    isWishlisted: false,
  },
];

const PopularProducts: React.FC<PopularProductsProps> = ({
  products = defaultPopularProducts,
  title = "POPULAR PRODUCTS",
}) => {
  const [wishlist, setWishlist] = useState<number[]>(
    products.filter((p) => p.isWishlisted).map((p) => p.id)
  );

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    // Add your cart logic here
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              href="/productView"
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group border border-gray-200"
            >
              {/* Product Card */}
              <div className="relative p-4">
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="relative h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm text-gray-900 line-clamp-2 min-h-[2.5rem] leading-tight">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      {product.price}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gray-100 hover:bg-green-600 text-gray-700 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-200 hover:border-green-600"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to basket</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

// const CompactPopularProducts: React.FC<PopularProductsProps> = ({
//   products = defaultProducts.slice(0, 6),
//   title = "POPULAR PRODUCTS",
// }) => {
//   const [wishlist, setWishlist] = useState<number[]>([]);

//   const toggleWishlist = (productId: number) => {
//     setWishlist((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             {title}
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </div>

//         {/* Compact Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-300 group relative"
//             >
//               {/* Wishlist */}
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-sm"
//               >
//                 <Heart
//                   className={`h-4 w-4 ${
//                     wishlist.includes(product.id)
//                       ? "fill-red-500 text-red-500"
//                       : "text-gray-400"
//                   }`}
//                 />
//               </button>

//               {/* Image */}
//               <div className="relative h-24 mb-2 bg-gray-50 rounded overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Info */}
//               <div className="space-y-2">
//                 <h4 className="font-medium text-xs text-gray-900 line-clamp-2 min-h-[2rem]">
//                   {product.name}
//                 </h4>
//                 <p className="text-sm font-bold text-green-600">
//                   {product.price}
//                 </p>
//                 <button className="w-full bg-gray-100 hover:bg-green-600 text-gray-700 hover:text-white text-xs font-medium py-2 rounded transition-colors duration-300">
//                   Add to basket
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
  productCount?: number;
}

interface ShopByCategoryProps {
  categories?: Category[];
  title?: string;
}

const defaultCategories: Category[] = [
  {
    id: 1,
    name: "Fresh Fruits and Vegetables",
    image: "/categories/fruits-vegetables.png",
    slug: "fruits-vegetables",
    productCount: 45,
  },
  {
    id: 2,
    name: "Lentils, Beans, Peas, Nuts, Soya",
    image: "/categories/lentils-beans.png",
    slug: "lentils-beans",
    productCount: 32,
  },
  {
    id: 3,
    name: "Spices, Blends, Seasonings",
    image: "/categories/spices-blends.png",
    slug: "spices-seasonings",
    productCount: 28,
  },
  {
    id: 4,
    name: "Soup & Salt and Cheese",
    image: "/categories/soup-salt-cheese.png",
    slug: "soup-salt-cheese",
    productCount: 18,
  },
  {
    id: 5,
    name: "Rice, Rice Flakes, Puffed Rice",
    image: "/categories/rice-varieties.png",
    slug: "rice-varieties",
    productCount: 24,
  },
  {
    id: 6,
    name: "Instant Mixes, Jelly, Puddings",
    image: "/categories/instant-mixes.png",
    slug: "instant-mixes",
    productCount: 15,
  },
  {
    id: 7,
    name: "Canned Food, Cooking Oils",
    image: "/categories/canned-oils.png",
    slug: "canned-oils",
    productCount: 22,
  },
  {
    id: 8,
    name: "Pastes, Chutneys, Sauces",
    image: "/categories/pastes-sauces.png",
    slug: "pastes-sauces",
    productCount: 19,
  },
  {
    id: 9,
    name: "Pickles Papads",
    image: "/categories/pickles-papads.png",
    slug: "pickles-papads",
    productCount: 16,
  },
  {
    id: 10,
    name: "Ready To Eat, Noodles, Oats",
    image: "/categories/ready-to-eat.png",
    slug: "ready-to-eat",
    productCount: 21,
  },
  {
    id: 11,
    name: "Tea, Coffee Instant Tea",
    image: "/categories/tea-coffee.png",
    slug: "tea-coffee",
    productCount: 14,
  },
  {
    id: 12,
    name: "Snacks, Biscuits, Rusks",
    image: "/categories/snacks-biscuits.png",
    slug: "snacks-biscuits",
    productCount: 35,
  },
  {
    id: 13,
    name: "Sweets, Desserts",
    image: "/categories/sweets-desserts.png",
    slug: "sweets-desserts",
    productCount: 12,
  },
  {
    id: 14,
    name: "Drinks, Juices Syrups",
    image: "/categories/drinks-juices.png",
    slug: "drinks-juices",
    productCount: 17,
  },
  {
    id: 15,
    name: "Vermicelli Instant Noodles",
    image: "/categories/vermicelli-noodles.png",
    slug: "vermicelli-noodles",
    productCount: 11,
  },
  {
    id: 16,
    name: "Frozen Food",
    image: "/categories/frozen-food.png",
    slug: "frozen-food",
    productCount: 26,
  },
];

const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  categories = defaultCategories,
  title = "SHOP BY CATEGORY",
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {/* Category Image */}
                <div className="relative h-40 bg-gray-50 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-4">
                  <div className="bg-green-700 text-white text-center py-2 px-3 rounded">
                    <h3 className="font-medium text-sm leading-tight">
                      {category.name}
                    </h3>
                  </div>

                  {category.productCount && (
                    <div className="text-center mt-2">
                      <span className="text-xs text-gray-500">
                        {category.productCount} products
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">View All Categories</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Alternative Compact Grid Layout
// const CompactShopByCategory: React.FC<ShopByCategoryProps> = ({
//   categories = defaultCategories.slice(0, 8),
//   title = "SHOP BY CATEGORY",
// }) => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             {title}
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </div>

//         {/* Compact Categories Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map((category) => (
//             <Link
//               key={category.id}
//               href={`/category/${category.slug}`}
//               className="group block"
//             >
//               <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
//                 {/* Image */}
//                 <div className="relative h-24 bg-gray-50 overflow-hidden">
//                   <Image
//                     src={category.image}
//                     alt={category.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Category Name */}
//                 <div className="p-3">
//                   <div className="bg-green-700 text-white text-center py-1.5 px-2 rounded text-xs font-medium">
//                     {category.name}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* View More */}
//         <div className="text-center mt-8">
//           <Link
//             href="/categories"
//             className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center justify-center"
//           >
//             View All Categories
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

const EcommerceBrandLayout = () => {
  const brands = [
    { alt: "YOKI", src: "/brands/yoki.png" },
    { alt: "WAI WAI", src: "/brands/wai_wai.png" },
    { alt: "delight", src: "/brands/delight.png" },
    { alt: "Predilecta", src: "/brands/predilecta.png" },
    { alt: "ORGANIC INDIA", src: "/brands/organic_india.png" },
    { alt: "MTR", src: "/brands/mtr.png" },
  ];

  const reviews = [
    {
      initial: "D",
      name: "Diwakar Dixit",
      date: "2024-04-27",
      rating: 5,
      text: "It is a great shop to find anything eatable or Geneva or Asian origin. Very nice atmosphere and service.",
    },
    {
      initial: "D",
      name: "David david",
      date: "2024-05-16",
      rating: 5,
      text: "C'est un grand magasin avec des dans un hangar. Il faut que je le visite toujours. Service et prix magnifique boutique.",
    },
    {
      initial: "C",
      name: "Chandani patel",
      date: "2024-06-27",
      rating: 5,
      text: "My favourite Geneva store in Geneva. The owner is super nice as well. Highly recommended.",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service",
    },
    {
      icon: Headphones,
      title: "Support @9AM to 9PM",
      description: "12 hours customer support",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Safe and secure transactions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ONE STOP FOR ALL YOU FAVOURITE BRANDS!
          </h1>

          {/* Brand Logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
            {brands.map((brand, index) => (
              <Image
                src={brand.src}
                alt={brand.alt}
                width={180}
                height={120}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-800 mr-4">
                EXCELLENT
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6">Based on 42 reviews</div>
          <div className="flex items-center mb-8">
            <span className="text-blue-600 font-semibold mr-2">Google</span>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.text}
                </p>
                <button className="text-blue-600 text-sm mt-2 hover:underline">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-pink-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <HeroSection />

      <FeaturedProducts />

      <VegetablesBanner />

      <PopularProducts />

      <ShopByCategory />

      <EcommerceBrandLayout />

      <Footer />
    </div>
  );
}
