import { useState } from "react";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const price = 85000;

  return (
    <div className="bg-[#0A064033] w-[100%] md:h-[100vh]">
      <div className="p-6 bg-[#fff] float-right h-[800px] md:h-[100vh] overflow-y-scroll max-w-5xl mx-auto font-sans">
        <h2 className="text-xl flex-col md:flex-row border-b-1 border-[#D9D9D9] pb-4 font-semibold mb-6 flex items-start md:items-center space-x-8 gap-2">
          <img src="src/assets/exit.png" alt="" /> <span>Product Details</span>
        </h2>

        <div className="flex flex-col gap-8 pt-1">
          <div className="bg-gray-200 w-48 h-48 rounded-xl"></div>

          <div className="flex-1">
            <h3 className="text-lg font-bold">Premium Local Rice</h3>
            <p className="text-gray-600 text-sm mb-3">
              Cleaned, bagged, and measured 50kg local rice. High quality,
              stone-free.
            </p>

            <p className="font-semibold text-sm mb-1">Price per 50kg bag</p>
            <p className="text-xl font-bold mb-4">₦{price.toLocaleString()}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 border rounded-full px-4 py-2">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="text-xl"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-xl">
                  +
                </button>
              </div>

              <button className="flex-1 bg-orange-400 text-white py-3 rounded-full text-sm font-semibold">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <h3 className="font-semibold mt-10 mb-3">Details</h3>

        <div className="bg-gray-100 rounded-xl p-6 text-sm">
          <div className="grid grid-cols-2 mb-2">
            <span className="font-medium text-gray-600">Product</span>
            <span className="font-semibold">Premium Local Rice</span>
          </div>
          <div className="grid grid-cols-2 mb-2">
            <span className="font-medium text-gray-600">Category</span>
            <span className="font-semibold">Grains & Cereals</span>
          </div>
          <div className="grid grid-cols-2 mb-2">
            <span className="font-medium text-gray-600">Unit Size</span>
            <span className="font-semibold">50kg bag</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium text-gray-600">Description</span>
            <span className="font-semibold">
              Cleaned, bagged, and measured 50kg local rice. High quality,
              stone-free.
            </span>
          </div>
        </div>

        <div className="mt-8 p-6 bg-purple-100 rounded-xl text-sm">
          <p className="font-semibold text-purple-600 mb-2">
            Delivery Options:
          </p>
          <ul className="text-purple-600 list-disc ml-6">
            <li>Doorstep delivery within 2-5 business days</li>
            <li>Pickup from designated centers (same day)</li>
            <li>Free delivery for orders above ₦100,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
