import React from "react";
import Navbar from "../header/navbar/NavBar";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-start justify-center min-h-screen p-6 bg-gray-50">
        <div className="flex flex-col w-full gap-8 lg:flex-row max-w-7xl">
          {/* Product Image Section */}
          <div className="w-full p-6 bg-white rounded-lg shadow-lg lg:w-1/2">
            <img
              src="https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg"
              alt="Product"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full p-8 bg-white rounded-lg shadow-lg lg:w-1/2">
            {/* Product Title */}
            <h1 className="mb-6 text-3xl font-semibold">
              Intel® Core™ i5-12600HX Processor <br />
              (18M Cache, up to 4.60 GHz)
            </h1>

            {/* Star Ratings */}
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.576 8.743c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.576 8.743c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.576 8.743c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.576 8.743c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.576 8.743c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
              </svg>
              <span className="ml-2 text-gray-500">(4.0)</span>
            </div>

            {/* Price */}
            <p className="mb-6 text-4xl font-bold">Rs.7,000.00</p>

            {/* Description */}
            <div className="mb-8">
              <h2 className="mb-2 text-xl font-semibold">Description :</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                explicabo enim ratione voluptatem at cupiditate delectus nemo
                dolorum officia esse beatae optio ut mollitia sit omnis,
                possimus nesciunt voluptas natus.
              </p>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded-full hover:bg-pink-600">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
