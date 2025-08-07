"use client";
//@ts-nocheck
import React, { useState } from "react";
import {
  Star,
  Heart,
  Home as HomeIcon,
  ChevronRight,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  Truck,
  Package,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Header } from "gnm/layouts/Header";
import Image from "next/image";
import { Footer } from "gnm/layouts/Footer";

const RatingAndReviews = () => {
  const [likedReviews, setLikedReviews] = useState<any>({});
  const [dislikedReviews, setDislikedReviews] = useState<any>({});

  const ratingBreakdown = [
    { stars: 5, count: 8486, percentage: 52 },
    { stars: 4, count: 3174, percentage: 19 },
    { stars: 3, count: 2520, percentage: 15 },
    { stars: 2, count: 1480, percentage: 9 },
    { stars: 1, count: 736, percentage: 5 },
  ];

  const highlights = [
    { label: "Refreshing", rating: 4, totalRatings: 372 },
    { label: "Flavour", rating: 4.3, totalRatings: 308 },
  ];

  const reviews = [
    {
      id: 1,
      rating: 1,
      text: "Complete variation in taste and contents of the same brand which we buy from local supermarket.Complete waste 2 buy from big basket.The tea powder contents were inferior to regular brand which we are using since 30 years",
      author: "Sancing Bharehao",
      timeAgo: "2 months ago",
      likes: 33,
      dislikes: 20,
    },
    {
      id: 2,
      rating: 3,
      text: "do not buy this one. purchase it from the store. it doesn't taste like Red label.",
      author: "Sushma Sridatta",
      timeAgo: "3 months ago",
      likes: 43,
      dislikes: 20,
    },
    {
      id: 3,
      rating: 4,
      text: "Very nice tea. Worth the price..",
      author: "Debashish Maitra",
      timeAgo: "5 months ago",
      likes: 55,
      dislikes: 10,
    },
    {
      id: 4,
      rating: 5,
      text: "Great product ? ? ? ? ? ? ?",
      author: "Esha Badhwar",
      timeAgo: "5 months ago",
      likes: 85,
      dislikes: 10,
    },
  ];

  const handleLike = (reviewId: any) => {
    setLikedReviews((prev: any) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
    // Remove dislike if liked
    if (dislikedReviews[reviewId]) {
      setDislikedReviews((prev: any) => ({
        ...prev,
        [reviewId]: false,
      }));
    }
  };

  const handleDislike = (reviewId: any) => {
    setDislikedReviews((prev: any) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
    // Remove like if disliked
    if (likedReviews[reviewId]) {
      setLikedReviews((prev: any) => ({
        ...prev,
        [reviewId]: false,
      }));
    }
  };

//   const renderStars = (rating: any) => {
//     return [...Array(5)].map((_, index) => (
//       <Star
//         key={index}
//         className={`w-4 h-4 ${
//           index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

  const getProgressBarColor = (stars: any) => {
    if (stars === 5) return "bg-green-500";
    if (stars === 4) return "bg-green-400";
    if (stars === 3) return "bg-yellow-400";
    if (stars === 2) return "bg-orange-400";
    return "bg-red-400";
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="border-2 border-blue-500 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Rating and Reviews
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Rating Overview */}
          <div>
            {/* Overall Rating */}
            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-green-600">4.0</span>
                <Star className="w-6 h-6 fill-green-600 text-green-600 ml-1" />
              </div>
              <p className="text-gray-600">16433 ratings & 171 reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-3 mb-8">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center space-x-3">
                  <span className="text-sm font-medium w-4">{item.stars}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressBarColor(
                        item.stars
                      )}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      <svg
                        className="w-16 h-16 transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray={`${
                            (highlight.rating / 5) * 100
                          }, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {highlight.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {highlight.totalRatings} ratings
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Reviews */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Product Reviews
            </h3>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  {/* Review Rating */}
                  <div className="flex items-center mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium mr-2">
                      {review.rating}★
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    {review.text}
                  </p>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">{review.author}</span>
                      <span className="mx-1">•</span>
                      <span>({review.timeAgo})</span>
                    </div>

                    {/* Like/Dislike Buttons */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(review.id)}
                        className={`flex items-center space-x-1 text-xs ${
                          likedReviews[review.id]
                            ? "text-green-600"
                            : "text-gray-500 hover:text-green-600"
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{review.likes}</span>
                      </button>

                      <button
                        onClick={() => handleDislike(review.id)}
                        className={`flex items-center space-x-1 text-xs ${
                          dislikedReviews[review.id]
                            ? "text-red-600"
                            : "text-gray-500 hover:text-red-600"
                        }`}
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>{review.dislikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Reviews Link */}
            <div className="mt-6 text-center">
              <button className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium">
                <span>View all 171 reviews</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductInformation = () => {
  const [expandedSections, setExpandedSections] = useState<any>({
    aboutProduct: false,
    ingredients: false,
    howToUse: false,
    otherProductInfo: false,
  });

  const toggleSection = (section: any) => {
    setExpandedSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const whyChooseFeatures = [
    {
      icon: Award,
      title: "Quality",
      subtitle: "You can trust",
    },
    {
      icon: Clock,
      title: "On time",
      subtitle: "Guarantee",
    },
    {
      icon: Truck,
      title: "Free",
      subtitle: "Delivery",
    },
    {
      icon: Package,
      title: "Return Policy",
      subtitle: "No Question asked",
    },
  ];

  const productSections = [
    {
      id: "aboutProduct",
      title: "About the Product",
      content: `Brooke Bond Red Label is one of India's largest selling packaged tea brands. The CTC tea is made using the best quality leaves, processed in the unique Brooke Bond Twin Lochan™. Since 1964, Brooke Bond has brought you the perfect tasting tea experience with the best-chosen leaves. It was in 1964 that Brooke Bond launched Red Label. That is when Brooke Bond Red Label created one of India's most favourite beverage acts. Every cup of Red Label tea is brewed with the best-chosen tea leaves that ensure your tea has strength, rich colour, and refreshing taste.

Brooke Bond Red Label believes that tea is nature's magical beverage that can bring out the world in every small and big outdoor activities thereby, creating a warm cup of tea. It stands for making the world a more welcoming place with Swad Apnepan ka (Taste of Togetherness). Brooke Bond Red Label stands for inclusiveness and for making the world a better place one cup at a time. Enjoy the great tasting range from Red Label Care and Red Label Natural Care that has a mix of 5 Ayurvedic ingredients, namely Tulsi, Ashwagandha, Mulethi, Ginger and Cardamom. Red Label Natural Care is clinically proven to enhance immunity and to help you feel fit less often.`,
    },
    {
      id: "ingredients",
      title: "Ingredients",
      content: "Tulsi, Ashwagandha, Mulethi, Ginger and Cardamom",
    },
    {
      id: "howToUse",
      title: "How to Use",
      content: "Add Red Label tea with hot milk and sugar and enjoy",
    },
    {
      id: "otherProductInfo",
      title: "Other Product Info",
      content: `EAN Code: 8901030544187
FSSAI Number: 10013242001897`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Why Choose GNM Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Why choose GNM?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <feature.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Brooke Bond Red Label Tea
        </h2>

        <div className="border rounded-lg">
          {productSections.map((section, index) => (
            <div key={section.id} className={index !== 0 ? "border-t" : ""}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">
                  {section.title}
                </span>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {expandedSections[section.id] && (
                <div className="px-4 pb-4">
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Product Highlights</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Made with best quality CTC tea leaves</li>
          <li>• Rich color and refreshing taste</li>
          <li>• Contains 5 Ayurvedic ingredients for health benefits</li>
          <li>• Clinically proven to enhance immunity</li>
          <li>• Perfect blend for everyday consumption</li>
        </ul>
      </div>

      {/* Brand Information */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Trusted by millions of tea lovers across India since 1964
        </p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-xs text-gray-600">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-1">
            <Package className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-600">Fresh Packaging</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-gray-600">Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const [selectedPackSize, setSelectedPackSize] = useState("500 g");
  const [quantity, setQuantity] = useState(1);

  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Grocery", href: "#" },
    { label: "Tea", href: "#" },
    { label: "Tea & Coffee Instant Tea", href: "#" },
  ];

  const productImages = [
    "/products/red-label-tea.png",
    "/products/red-label-tea.png",
    "/products/red-label-tea.png",
    "/products/red-label-tea.png",
    "/products/red-label-tea.png",
  ];

  const packSizes = [
    {
      size: "500 g",
      type: "Carton",
      price: "CHF7.80",
      originalPrice: "CHF8.80",
      discount: "CHF10 OFF",
      pricePerUnit: "CHF0.47 / g",
      available: true,
      selected: true,
    },
    {
      size: "100 g",
      type: "",
      price: "CHF5.10",
      pricePerUnit: "CHF0.34 / g",
      available: true,
      selected: false,
    },
    {
      size: "25 g",
      type: "",
      price: "",
      available: false,
      selected: false,
    },
    {
      size: "250 g",
      type: "Carton",
      price: "CHF6.80",
      pricePerUnit: "CHF0.54 / g",
      available: true,
      selected: false,
    },
    {
      size: "2x250 g",
      type: "Multipack",
      price: "CHF7.80",
      pricePerUnit: "CHF0.47 / g",
      available: true,
      selected: false,
    },
    {
      size: "2x500 g",
      type: "Multipack",
      price: "CHF7.80",
      originalPrice: "CHF8.80",
      discount: "CHF10 OFF",
      pricePerUnit: "CHF0.47 / g",
      available: true,
      selected: false,
    },
    {
      size: "1 kg",
      type: "",
      price: "CHF7.80",
      originalPrice: "CHF8.80",
      discount: "CHF10 OFF",
      pricePerUnit: "CHF0.47 / kg",
      available: true,
      selected: false,
    },
    {
      size: "2x1 kg",
      type: "Multipack",
      price: "CHF7.80",
      originalPrice: "CHF8.80",
      discount: "CHF10 OFF",
      pricePerUnit: "CHF0.47 / kg",
      available: true,
      selected: false,
    },
  ];

  const handlePackSizeSelect = (size: any) => {
    setSelectedPackSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prev: any) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev: any) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <HomeIcon className="w-4 h-4" />
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.href} className="hover:text-blue-600">
              {item.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <ChevronRight className="w-4 h-4" />
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="flex">
          {/* Thumbnail Images */}
          <div className="flex flex-col space-y-2 mr-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="border-2 border-blue-500 rounded-md p-1 cursor-pointer hover:border-blue-700"
              >
                <Image
                  width={64}
                  height={64}
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-1 p-4">
            <div className="relative">
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full absolute top-0 left-0 z-10">
                NOW WITH 15% EXTRA*
              </div>
              <Image
                width={400}
                height={400}
                src="/products/red-label-tea.png"
                alt="Brooke Bond Red Label Tea"
                className="w-full h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          {/* Brand */}
          <p className="text-gray-600 mb-2">Brooke Bond</p>

          {/* Product Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            BROOKE BOND RED LABEL TEA, 500 G CARTON
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              16,418 Ratings & 171 Reviews
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">CHF7.80</span>
              <span className="text-sm text-gray-500">
                (inclusive of all taxes)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-8">
            <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-700 transition-colors">
              Add to basket
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 py-3 px-6 rounded-md hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
              <span>Save for later</span>
            </button>
          </div>

          {/* Pack Sizes */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Pack sizes</h3>
            <div className="space-y-2">
              {packSizes.map((pack, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    pack.size === selectedPackSize
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  } ${!pack.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() =>
                    pack.available && handlePackSizeSelect(pack.size)
                  }
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{pack.size}</span>
                        {pack.type && (
                          <span className="text-sm text-gray-500">
                            {pack.type}
                          </span>
                        )}
                      </div>
                      {!pack.available && (
                        <span className="text-sm text-gray-400">
                          Not available
                        </span>
                      )}
                    </div>

                    {pack.available && pack.price && (
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{pack.price}</span>
                          {pack.pricePerUnit && (
                            <span className="text-sm text-gray-500">
                              ({pack.pricePerUnit})
                            </span>
                          )}
                        </div>
                        {pack.originalPrice && (
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="line-through text-gray-400">
                              {pack.originalPrice}
                            </span>
                            {pack.discount && (
                              <span className="text-green-600 font-medium">
                                {pack.discount}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* More Combos Link */}
            <div className="mt-4 text-right">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                +2 More Combos &gt;
              </a>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-8 flex items-center space-x-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={decrementQuantity}
                className="p-2 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
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
      <ProductDetail />
      <ProductInformation />

      <RatingAndReviews />
      <Footer />
    </div>
  );
}
