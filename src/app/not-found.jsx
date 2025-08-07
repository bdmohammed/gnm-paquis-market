'use client'
import React from "react";
import {
  Home,
  ArrowLeft,
  Search,
  ShoppingCart,
  RefreshCw,
  AlertCircle,
  Wifi,
  WifiOff,
} from "lucide-react";

// 404 Not Found Page
export const NotFoundPage = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search functionality");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4 animate-bounce">
            404
          </div>
          <div className="relative">
            <ShoppingCart className="w-24 h-24 mx-auto text-gray-400 animate-pulse" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">?</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off. Don't worry,
          even our best products sometimes get misplaced!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleGoBack}
              className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>

            <button
              onClick={handleSearch}
              className="bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Grocery", "Tea & Coffee", "Spices", "Snacks"].map((category) => (
              <button
                key={category}
                className="bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@gnm.ch"
            className="text-blue-600 hover:underline"
          >
            support@gnm.ch
          </a>
        </div>
      </div>
    </div>
  );
};

// General Fallback Error Page
export const FallbackErrorPage = ({ error, resetError }) => {
  const handleRefresh = () => {
    if (resetError) {
      resetError();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const isNetworkError =
    error?.message?.includes("fetch") || error?.message?.includes("network");

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {isNetworkError ? (
              <WifiOff className="w-24 h-24 text-red-500 animate-pulse" />
            ) : (
              <AlertCircle className="w-24 h-24 text-red-500 animate-pulse" />
            )}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-lg font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isNetworkError ? "Connection Problem" : "Something Went Wrong"}
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isNetworkError
            ? "Please check your internet connection and try again."
            : "We encountered an unexpected error. Our team has been notified and is working on a fix."}
        </p>

        {/* Error Details (Development Mode) */}
        {process.env.NODE_ENV === "development" && error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleRefresh}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>

          <button
            onClick={handleGoHome}
            className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go to Homepage</span>
          </button>
        </div>

        {/* Network Status Indicator */}
        {isNetworkError && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-yellow-800">
              <Wifi className="w-5 h-5" />
              <span className="text-sm font-medium">
                Checking connection status...
              </span>
            </div>
          </div>
        )}

        {/* Support Information */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Still having trouble?</p>
          <div className="mt-2 space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:support@gnm.ch"
                className="text-red-600 hover:underline"
              >
                support@gnm.ch
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+41787450880"
                className="text-red-600 hover:underline"
              >
                +41 78 745 08 80
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Error Boundary Component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <FallbackErrorPage
          error={this.state.error}
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

// Next.js 404 Page (export as default for pages/404.js)
const Custom404 = () => {
  return <NotFoundPage />;
};

// Next.js Error Page (export as default for pages/_error.js)
const CustomError = ({ statusCode, hasGetInitialPropsRun, err }) => {
  return (
    <FallbackErrorPage
      error={err || { message: `A ${statusCode} error occurred` }}
    />
  );
};

// Export components for use
export { Custom404, CustomError };
export default NotFoundPage;
