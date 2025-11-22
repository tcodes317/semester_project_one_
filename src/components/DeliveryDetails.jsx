import { useState } from "react";
import Slider from "./Slider";

export default function DeliveryDetails() {
  const [deliveryType, setDeliveryType] = useState("delivery");

  const subtotal = 85000;
  const deliveryFee = deliveryType === "delivery" ? 2500 : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <div className="relative">
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
            <div className="flex bg-[#FFFBF6] lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
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

            <div className="p-6 2xl:w-[1230px] xl:pl-10 2xl:pl-4 mx-auto md:pt-8 lg:pt-28 font-sans">
              <button className="flex items-center gap-2 text-sm mb-6">
                <i className="fa fa-arrow-left"></i>
                <span>Back to cart</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
                  <h2 className="font-semibold mb-4">Delivery Details</h2>
                  <hr className="mb-4" />

                  <p className="text-sm font-medium mb-3">
                    Select Delivery Type
                  </p>

                  <div
                    className={`p-4 flex items-center rounded-xl border cursor-pointer mb-3 flex items-start gap-3 ${
                      deliveryType === "delivery"
                        ? "bg-orange-50 border-orange-300"
                        : "border-gray-200"
                    }`}
                    onClick={() => setDeliveryType("delivery")}
                  >
                    <span className="mt-1 block">
                      {deliveryType === "delivery" ? (
                        <div className="w-[10px] h-[10px] mt-4 bg-[#FF8801] rounded-full" />
                      ) : (
                        <div className="w-[10px] h-[10px] border-black rounded-full" />
                      )}
                    </span>

                    <div className="ml-2 flex space-x-5 items-center">
                      <div className="bg-[#fff] rounded-xl w-[50px] flex items-center justify-center h-[50px]">
                        <img src="src/assets/bus.png" alt="" />
                      </div>
                      <div>
                        <p className="font-semibold">Delivery</p>
                        <p className="text-xs text-gray-500">
                          2–5 business days
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border cursor-pointer flex items-start gap-3 ${
                      deliveryType === "pickup"
                        ? "bg-orange-50 border-orange-300"
                        : "border-gray-200"
                    }`}
                    onClick={() => setDeliveryType("pickup")}
                  >
                    <span className="mt-1 block">
                      {deliveryType === "pickup" ? (
                        <div className="w-[10px] h-[10px] bg-[#FF8801] mt-4 rounded-full" />
                      ) : (
                        <div className="w-[10px] h-[10px] rounded-full" />
                      )}
                    </span>

                    <div className="ml-2 flex space-x-5 items-center">
                      <div className="bg-[#fff] rounded-xl w-[50px] flex items-center justify-center h-[50px]">
                        <img src="src/assets/cube.png" alt="" />
                      </div>
                      <div>
                        <p className="font-semibold">Delivery</p>
                        <p className="text-xs text-gray-500">
                          2–5 business days
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="text-sm font-semibold mb-1">Full Name</p>
                      <input
                        className="w-full shadow-xl rounded-xl px-4 py-2 text-sm"
                        placeholder="Enter Full Name"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-1">Phone Number</p>
                      <input
                        className="w-full shadow-xl rounded-xl px-4 py-2 text-sm"
                        placeholder="081 XXXXXXXX"
                      />
                    </div>
                  </div>

                  {deliveryType === "delivery" && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-1">
                        Delivery Address
                      </p>
                      <input
                        className="w-full shadow-lg rounded-xl px-4 py-2 text-sm"
                        placeholder="Enter Delivery Address"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 rounded-2xl shadow h-fit">
                  <h2 className="font-semibold mb-4">Order Summary</h2>
                  <hr className="mb-4" />

                  <div className="flex justify-between text-sm mb-3">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ₦{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm mb-3">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">
                      ₦{deliveryFee.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm mb-6">
                    <span>Total</span>
                    <span className="font-semibold">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>

                  <button className="w-full bg-[#FF8801] text-white py-3 rounded-full font-semibold text-sm">
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
