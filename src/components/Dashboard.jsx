import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useMemo } from "react";
import { useState } from "react";
// import { ClipLoader } from "react-spinners";

function Dashboard() {
  const Amount = ["5000", "18000", "2000", "3,500", "3,500"];
  const status = ["Success", "Delivered", "Completed", "Declined"];

  const [open, setOpen] = useState(false);

  const statusStyles = {
    Success: "bg-green-100 text-green-700",
    Delivered: "bg-blue-100 text-blue-700",
    Completed: "bg-purple-100 text-purple-700",
    Declined: "bg-red-100 text-red-700",
  };

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const rows = useMemo(
    () => [
      {
        type: "Savings",
        desc: "Weekly Savings Contribution",
        amount: Amount[0],
        stat: status[0],
      },
      {
        type: "Order",
        desc: "Foodstuff Order #1023",
        amount: Amount[1],
        stat: status[1],
      },
      {
        type: "Reward",
        desc: "Reward Redeemed",
        amount: Amount[2],
        stat: status[2],
      },
      {
        type: "Wallet",
        desc: "Wallet Top‑Up",
        amount: Amount[3],
        stat: status[0],
      },
      {
        type: "Wallet",
        desc: "Wallet Top‑Up",
        amount: Amount[3],
        stat: status[0],
      },
    ],
    []
  );

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <ClipLoader color="#FF8801" size={60} />
        </div>
      )} */}
      <div className="relative">
        <div className="flex">
          <div
            id="slide"
            className={`${
              open ? "block" : "hidden"
            } lg:block lg:fixed bg-[#000] z-10 absolute lg:block fixed h-[100vh]`}
          >
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
                <div
                  onClick={() => setOpen(!open)}
                  className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]"
                >
                  {open ? (
                    <i className="fa fa-times text-white"></i>
                  ) : (
                    <img src="src/assets/menu.png" alt="" />
                  )}
                </div>
              </div>
            </div>

            <div className="relative mt-16 p-6 xl:pl-10 pt-0 lg:pt-20">
              <div className="flex items-start space-y-8 flex-col xl:flex-row justify-between space-y-2">
                <div className="flex items-start flex-col">
                  <h1 className="text-2xl font-bold">Hi, Rokeeb!</h1>
                  <p>Here's a quick view of your savings and benefits.</p>
                </div>
                <div className="flex items-center space-x-4">
                  {/* <Link to="/" className="bg-[#FFE8CE] p-2 px-6 rounded-full">
                    <button>Add Savings</button>
                  </Link> */}
                  <Link
                    to="/"
                    className="bg-[#FF8801] text-white p-2 px-6 rounded-full"
                  >
                    <button>Fund Wallet</button>
                  </Link>
                </div>
              </div>

              <div className="flex md:grid md:grid-cols-3 md:gap-4 flex-col xl:flex-row space-y-4 xl:space-y-0 items-center justify-between mt-14 xl:space-x-4">
                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Wallet Balance</p>
                  <p className="font-bold">#7,000</p>
                  <div className="absolute top-4 right-4">
                    <i className="fa fa-arrow-up rotate-[50deg]"></i>
                  </div>
                </div>

                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Active Savings</p>
                  <p className="font-bold">#42,000</p>
                  <div className="absolute top-4 right-4">
                    <i className="fa fa-arrow-up rotate-[50deg]"></i>
                  </div>
                </div>

                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Bonus Balance</p>
                  <p className="font-bold">#18,500</p>
                  <div className="absolute top-4 right-4">
                    <i className="fa fa-arrow-up rotate-[50deg]"></i>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg bg-[#FF880133] hidden bg-opacity-20 p-6 mt-12">
                <div className="flex space-x-4">
                  <img
                    src="src/assets/clock.png"
                    className="w-[35px] h-[35px]"
                    alt=""
                  />
                  <div className="w-full">
                    <div>
                      <h1 className="text-2xl font-bold">Upcoming Payment</h1>
                      <p>New Breed Weekly Savings</p>
                    </div>
                    <div className="bg-[#fff] p-2 px-3 w-full p-2 mt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Amount Due</p>
                          <p>Due In</p>
                        </div>
                        <div>
                          <p>#3,500</p>
                          <p>3 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-2 bg-[#04A9491A] text-[#04A949] m-4 rounded-full px-6">
                  Active
                </div>
              </div>

              <div className="flex md:grid md:grid-cols-2 md:gap-5 space-y-5 flex-col xl:flex-row pt-12 xl:space-x-8 items-center justify-between">
                <div className="flex shadow-md p-6 w-full rounded-xl items-start space-x-6">
                  <img src="src/assets/11.png" alt="" />
                  <div className="w-full space-y-2">
                    <p>Savings Goal Progress</p>
                    <p className="font-bold">#42,000 of #100,000</p>
                    <p className="text-xs">42% Complete</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-full bg-[#ccc] rounded-full mt-4">
                        <div className="w-[50%] bg-[#1B156C] p-2 rounded-full"></div>
                      </div>
                      <div className="relative top-2">
                        <p>75%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex shadow-md p-6 w-full rounded-xl items-start space-x-6">
                  <img src="src/assets/12.png" alt="" />
                  <div className="w-full space-y-2">
                    <p>Next Payout Date</p>
                    <p className="font-bold">Feb 28, 2025</p>
                    <p className="text-xs">8 days remaining</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-full bg-[#ccc] rounded-full mt-4">
                        <div className="w-[50%] bg-[#1B156C] p-2 rounded-full"></div>
                      </div>
                      <div className="relative top-2">
                        <p>75%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-18 hidden md:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        colSpan={5}
                        className="text-left text-xl font-bold mb-4"
                      >
                        Recent Activity
                      </th>
                    </tr>
                    <tr className="">
                      {["Type", "Description", "Amount", "Status", "Date"].map(
                        (h) => (
                          <th key={h} className="font-bold p-4 text-left">
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-4">{row.type}</td>
                        <td className="p-4">{row.desc}</td>
                        <td className="p-4">₦{row.amount}</td>

                        <td className="p-4">
                          <span
                            className={`inline-block px-5 py-2 rounded-full font-medium ${
                              statusStyles[row.stat]
                            }`}
                          >
                            {row.stat}
                          </span>
                        </td>

                        <td className="p-4 w-[300px]">{today}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-[100%] md:hidden mt-8 p-4">
                <h1 className="mb-5 text-xl font-bold">Recent Activity</h1>
                {rows.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-xl border p-5 mb-5"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-2xl font-semibold">₦{item.amount}</h2>

                      <div className="px-4 py-1 rounded-full bg-green-100">
                        <span className="text-green-600 font-medium">
                          {item.stat}
                        </span>
                      </div>
                    </div>

                    <hr />

                    <div className="mt-4 space-y-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Type</span>
                        <span className="font-medium text-gray-800">
                          {item.type}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Description</span>
                        <span className="font-medium text-gray-800 text-right">
                          {item.desc}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date</span>
                        <span className="font-medium text-gray-800">
                          Feb 12
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/** Footer */}
          </main>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
