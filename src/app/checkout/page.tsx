'use client'
import React, { useState } from "react";
import {
  CreditCard,
  Truck,
  Gift,
  ShieldCheck,
} from "lucide-react";
import { Header } from "gnm/layouts/Header";
import { Footer } from "gnm/layouts/Footer";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Switzerland",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [deliverToDifferentAddress, setDeliverToDifferentAddress] =
    useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [hasCoupon, setHasCoupon] = useState(false);

  const orderSummary = {
    subtotal: 7.8,
    shipping: 15.0,
    vat: 0.45,
    total: 26.25,
  };

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* Coupon Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Have A Coupon?
                </span>
                <button
                  onClick={() => setHasCoupon(!hasCoupon)}
                  className="text-blue-600 hover:underline"
                >
                  Click Here To Enter Your Code
                </button>
              </div>

              {hasCoupon && (
                <div className="mt-4 flex space-x-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Billing Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Billing Details
              </h2>

              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country/Region *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Switzerland">Switzerland</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Austria">Austria</option>
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House number and street name"
                    value={formData.streetAddress}
                    onChange={(e) =>
                      handleInputChange("streetAddress", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    value={formData.apartment}
                    onChange={(e) =>
                      handleInputChange("apartment", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Town / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* State and Postcode */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State / County (Optional)
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Geneva</option>
                      <option value="zurich">Zurich</option>
                      <option value="bern">Bern</option>
                      <option value="basel">Basel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postcode / ZIP *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) =>
                        handleInputChange("postcode", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            {/* Delivery Address Option */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <input
                  type="checkbox"
                  id="differentAddress"
                  checked={deliverToDifferentAddress}
                  onChange={(e) =>
                    setDeliverToDifferentAddress(e.target.checked)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="differentAddress"
                  className="font-medium text-gray-900"
                >
                  Deliver To A Different Address?
                </label>
              </div>

              {deliverToDifferentAddress && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={formData.orderNotes}
                    onChange={(e) =>
                      handleInputChange("orderNotes", e.target.value)
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Your Order
              </h2>

              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between font-semibold text-gray-700 border-b pb-2">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {/* Product */}
                <div className="flex justify-between">
                  <span className="text-gray-900">
                    RED LABEL LOOSE TEA 400G × 1
                  </span>
                  <span className="font-semibold">CHF7.80</span>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">CHF7.80</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    Flexible Shipping: CHF15.00
                  </span>
                </div>

                {/* VAT */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Vat</span>
                  <span className="font-semibold">CHF0.45</span>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span>CHF26.25</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Method
              </h3>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="cash"
                      className="flex items-center space-x-2 font-medium"
                    >
                      <Truck className="w-5 h-5 text-gray-600" />
                      <span>Cash On Delivery</span>
                    </label>
                  </div>
                  {paymentMethod === "cash" && (
                    <p className="mt-2 text-sm text-gray-600 ml-7">
                      Pay With Cash Upon Delivery.
                    </p>
                  )}
                </div>

                {/* Credit/Debit Cards */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="card"
                      className="flex items-center space-x-2 font-medium"
                    >
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span>Credit/Debit Cards</span>
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mt-3 ml-7">
                      <div className="flex space-x-2 mb-3">
                        <img
                          src="/api/placeholder/40/25"
                          alt="Visa"
                          className="h-6"
                        />
                        <img
                          src="/api/placeholder/40/25"
                          alt="MasterCard"
                          className="h-6"
                        />
                        <img
                          src="/api/placeholder/40/25"
                          alt="American Express"
                          className="h-6"
                        />
                        <img
                          src="/api/placeholder/40/25"
                          alt="PayPal"
                          className="h-6"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p>
                      Your Personal Data Will Be Used To Process Your Order,
                      Support Your Experience Throughout This Website, And For
                      Other Purposes Described In Our{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full mt-6 bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-colors text-lg"
              >
                Place Order
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
      <CheckoutPage />
      <Footer />
    </div>
  );
}

