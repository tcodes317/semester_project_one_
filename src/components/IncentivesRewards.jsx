import Slider from "./Slider";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import RewardDetails from "./RewardDetails";
import RedemptionConfirm from "./RedemptionConfirmed";

function IncentivesRewards() {
  const Amount = ["5000", "18000", "2000", "3,500", "3,500"];
  const status = ["Redeemed", "Pending", "Declined"];
  const statuss = ["view"];

  const statusStyles = {
    Redeemed: "bg-green-100 text-green-700",
    Pending: "bg-blue-100 text-[#FFA601] bg-[#FFF9E4]",
    Completed: "bg-purple-100 text-purple-700",
    Declined: "bg-red-100 text-red-700",
  };

  const data = Array.from({ length: 6 }, () => ({
    title: "Food Hamper Gift",
    valueWorth: "Wallet",
    type: "Feb 12",
    dateEarned: "Feb 12",
    status: "Success",
  }));

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
        stat: status[1],
        statt: statuss[0],
      },
      {
        type: "Order",
        desc: "Foodstuff Order #1023",
        amount: Amount[1],
        stat: status[0],
        statt: statuss[0],
      },
      {
        type: "Reward",
        desc: "Reward Redeemed",
        amount: Amount[2],
        stat: status[0],
        statt: statuss[0],
      },
      {
        type: "Wallet",
        desc: "Wallet Top‑Up",
        amount: Amount[3],
        stat: status[0],
        statt: statuss[0],
      },
      {
        type: "Wallet",
        desc: "Wallet Top‑Up",
        amount: Amount[3],
        stat: status[0],
        statt: statuss[0],
      },
    ],
    []
  );

  return (
    <>
      <div className="relative">
        <div className="absolute w-full z-150 left-0 top-0">
          <div className="hidden">
            <RewardDetails />
          </div>
          <div className="hidden">
            <RedemptionConfirm />
          </div>
        </div>
        <div className="flex">
          <div className="lg:w-[300px] hidden lg:block bg-[#fff] z-10 absolute fixed bg-white">
            <Slider />
          </div>
          <div className="lg:w-[385px]"></div>
          <main className="relative hidde block w-[100%]">
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
            <div className="p-6 pt-14 lg:pt-30 lg:pl-8">
              <div className="flex items-start flex-row justify-between space-y-2">
                <div className="flex items-start flex-col">
                  <h1 className="text-2xl font-bold">Incentives & Rewards</h1>
                  <p>
                    Track and manage your earned rewards from completed savings
                    plans
                  </p>
                </div>
                <div className="flex items-center space-x-4 hidden md:block">
                  <Link
                    to="/"
                    className="bg-[#FF8801] text-white p-2 px-6 rounded-full"
                  >
                    <button>Generate new referal code</button>
                  </Link>
                </div>
              </div>

              <div className="md:flex grid grid-cols-2 gap-4 items-center justify-between mt-14 space-x-4">
                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Available Bonus</p>
                  <p className="font-bold">#0</p>
                  <div className="absolute top-4 right-4">
                    <div className="hidden lg:block">
                      <i
                        className="fa fa-arrow-up rotate-[50deg]"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Redeemed Items</p>
                  <p className="font-bold">1</p>
                  <div className="absolute top-4 right-4">
                    <div className="hidden lg:block">
                      <i className="fa fa-arrow-up rotate-[50deg]"></i>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Converted to Cash</p>
                  <p className="font-bold">#5,000</p>
                  <div className="absolute top-4 right-4">
                    <div className="hidden lg:block">
                      <i className="fa fa-arrow-up rotate-[50deg]"></i>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p>Pending Deliveries</p>
                  <p className="font-bold">1</p>
                  <div className="absolute top-4 right-4">
                    <div className="hidden lg:block">
                      <i className="fa fa-arrow-up rotate-[50deg]"></i>
                    </div>
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

              <div className="mt-18 hidden md:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        colSpan={5}
                        className="text-left text-xl font-bold mb-4"
                      >
                        Referral Bonus Activity
                      </th>
                    </tr>
                    <tr className="">
                      {[
                        "Reward",
                        "Value Worth",
                        "Type",
                        "Date Earned",
                        "Status",
                        "Status",
                      ].map((h) => (
                        <th key={h} className="font-bold p-4 text-left">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx} className="">
                        <td className="p-4 w-[150px]">{row.type}</td>
                        <td className="p-4 w-[600px]">{row.desc}</td>
                        <td className="p-4">₦{row.amount}</td>
                        <td className="p-4 w-[200px]">₦{row.amount}</td>

                        <td className="p-4">
                          <span
                            className={`inline-block px-5 py-2 rounded-full font-medium ${
                              statusStyles[row.stat]
                            }`}
                          >
                            {row.stat}
                          </span>
                        </td>

                        <td className="p-4 w-[300px]">
                          <div className="p-2 text-center text-[#FF8801] w-[100px] rounded-full border-2">
                            {statuss[0]}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-18 md:hidden">
                <div className="space-y-6">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="w-full max-w-md mx-auto border rounded-2xl p-6 shadow-sm bg-white"
                    >
                      <h2 className="text-xl font-semibold mb-4">
                        {item.title}
                      </h2>

                      <hr className="mb-6" />

                      <div className="grid grid-cols-2 gap-y-6 text-gray-700">
                        <p className="font-medium">Value Worth</p>
                        <p className="text-right">{item.valueWorth}</p>

                        <p className="font-medium">Type</p>
                        <p className="text-right">{item.type}</p>

                        <p className="font-medium">Date Earned</p>
                        <p className="text-right">{item.dateEarned}</p>

                        <p className="font-medium">Status</p>
                        <div className="flex justify-end">
                          <span className="px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="mt-10 flex justify-center">
                        <button className="w-full py-2 border rounded-full text-orange-500 font-medium">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default IncentivesRewards;
