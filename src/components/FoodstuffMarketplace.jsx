import Slider from "./Slider";
import { useState } from "react";
import ProductDetails from "./ProduceDetails";
import men from "./../assets/menu.png";

function FoodstuffMarket() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: "Premium Local Rice",
    price: 85000,
    weight: "50kg bag",
  }));

  const [page, setPage] = useState(1);
  return (
    <>
      <div className="fixed z-10 top-0 right-0 w-[100%] h-[100vh] hidden">
        <ProductDetails />
      </div>
      <div className="relative">
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
            {/** Header */}

            <div className="flex lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
              </div>
              <div className="flex items-center space-x-6">
                <img src="src/assets/4.png" alt="" />
                <div className="flex hidden lg:flex space-x-4 items-center">
                  <img
                    src="src/assets/Avatars.png"
                    className="w-[40px] h-[40px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span>Rokeeb Abdul</span>
                    <span>email@gmail.com</span>
                  </div>
                </div>
                <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                  <img src="src/assets/menu.png" alt="" />
                </div>
              </div>
            </div>

            {/** Body */}

            <div className="p-6 font-sans max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">Foodstuff Marketplace</h1>

              <div className="bg-white rounded-2xl shadow p-6 mb-6">
                <h2 className="text-lg font-semibold">Foodstuff Marketplace</h2>
                <p className="text-gray-600 mb-4">
                  Shop quality foodstuff with ease
                </p>

                <div className="relative">
                  <div className="shadow-lg rounded-xl flex items-center">
                    <i className="fa fa-search pl-3"></i>
                    <input
                      type="text"
                      placeholder="Search for rice, beans, oil, etc..."
                      className="w-full border-none focus:border-none focus:outline-none px-4 py-2"
                    />
                  </div>
                </div>
              </div>

              <h3 className="mb-4">All Products</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow p-4 flex flex-col"
                  >
                    <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs mb-2">
                      Cleaned, bagged, and measured 50kg local rice
                    </p>
                    <p className="text-xs text-gray-500 flex items-center space-x-1">
                      <img src="src/assets/user.png" alt="" />{" "}
                      <span>{item.weight}</span>
                    </p>
                    <p className="font-bold mt-2">
                      ₦{item.price.toLocaleString()}
                    </p>

                    <div className="mt-4 flex justify-between">
                      <button className="px-8 py-2 text-sm rounded-full border">
                        View
                      </button>
                      <button className="px-4 py-2 text-sm rounded-full bg-orange-400 text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                <p>Showing 1-8 from 100</p>
                <div className="flex items-center gap-1">
                  <button className="px-2 fa fa-angle-left"></button>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        page === n ? "bg-orange-400 text-white" : "bg-gray-100"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button className="px-2 fa fa-angle-right"></button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default FoodstuffMarket;
