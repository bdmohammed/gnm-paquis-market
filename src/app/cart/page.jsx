'use client'
import React, { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { Header } from "gnm/layouts/Header";
import { Footer } from "gnm/layouts/Footer";
import Image from "next/image";

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "BROOKE BOND RED LABEL TEA, 500 G CARTON",
      price: 7.8,
      quantity: 1,
      image: "/products/red-label-tea.png",
    },
    {
      id: 2,
      name: "BROOKE BOND RED LABEL TEA, 500 G CARTON",
      price: 7.8,
      quantity: 1,
      image: "/products/red-label-tea.png",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    state: "",
    city: "",
    postcode: "",
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const shippingCost = 15.0;
  const vatRate = 0.077; // 7.7%

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
  const discountedSubtotal = subtotal - couponDiscount;
  const vat = discountedSubtotal * vatRate;
  const total = discountedSubtotal + shippingCost + vat;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    // Mock coupon validation
    if (couponCode.toUpperCase() === "SAVE10") {
      setAppliedCoupon({
        code: couponCode,
        discount: 5.0,
      });
    } else if (couponCode.toUpperCase() === "WELCOME") {
      setAppliedCoupon({
        code: couponCode,
        discount: 10.0,
      });
    } else {
      alert("Invalid coupon code");
    }
    setCouponCode("");
  };

  const updateCart = () => {
    alert("Cart updated successfully!");
  };

  const emptyCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Proceeding to checkout...");
  };

  const handleShippingChange = (field, value) => {
    setShippingInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <ShoppingCart className="w-8 h-8 mr-3" />
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-6 gap-4 p-4 border-b items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-3 flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-1 flex items-center"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center font-semibold">
                      CHF{item.price.toFixed(2)}
                    </div>

                    {/* Quantity Controls */}
                    <div className="text-center">
                      <div className="flex items-center justify-center border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-100 text-gray-600"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-100 text-gray-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Item Subtotal */}
                    <div className="text-center font-semibold">
                      CHF{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-sm">Add some products to get started!</p>
                </div>
              )}
            </div>

            {/* Coupon and Cart Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex flex-1 min-w-0">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={applyCoupon}
                  className="px-6 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors font-medium"
                >
                  Apply Coupon
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={updateCart}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Update Cart
                </button>
                <button
                  onClick={emptyCart}
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Basket Totals
              </h2>

              {/* Order Summary */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    CHF{subtotal.toFixed(2)}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon ({appliedCoupon.code})</span>
                    <span>-CHF{appliedCoupon.discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      CHF{shippingCost.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 mb-4">
                    Flexible Shipping: CHF{shippingCost.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Shipping Options Will Be Updated During Checkout.
                  </p>

                  {/* Shipping Calculator */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country / Region
                      </label>
                      <select
                        value={shippingInfo.country}
                        onChange={(e) =>
                          handleShippingChange("country", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      >
                        <option value="">Select Country</option>
                        <option value="CH">Switzerland</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State / County (Optional)
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.state}
                        onChange={(e) =>
                          handleShippingChange("state", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter state"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          handleShippingChange("city", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter city"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode / ZIP *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.postcode}
                        onChange={(e) =>
                          handleShippingChange("postcode", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter postcode"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vat</span>
                    <span className="font-semibold">CHF{vat.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>CHF{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={proceedToCheckout}
                disabled={cartItems.length === 0}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
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
      <ShoppingCartPage />
      <Footer />
    </div>
  );
}
