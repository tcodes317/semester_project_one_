import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useMemo, useState } from "react";
// import { ClipLoader } from "react-spinners";
import TransactionDetails from "./TransactionDetails";
import TransactionModal from "./TransactionModal";
import AddBankAccount from "./AddBankAccount";
import WithdrawMoney from "./WithdrawModal";
import WithdrawModal from "./WithdrawModalII";
import TransactionModalI from "./WithdrawModelIII";

function Wallet() {
  const Amount = ["5000", "18000", "2000", "3,500", "3,500"];
  const status = ["Success", "Delivered", "Completed", "Declined"];

  const [isOn, setIsOn] = useState(false);
  const [isOnTwo, setIsOnTwo] = useState(false);
  const [isOnThree, setIsOnThree] = useState(false);

  const toggleSwitchOne = () => {
    setIsOn(!isOn);
  };
  const toggleSwitchTwo = () => {
    setIsOnTwo(!isOnTwo);
  };
  const toggleSwitchThree = () => {
    setIsOnThree(!isOnThree);
  };

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
        <div className="absolute hiden">
          <div className="hidden">
            <TransactionDetails />
          </div>
          <div className="hidden">
            <TransactionModal />
          </div>
          <div className="hidden">
            <AddBankAccount />
          </div>
          <div className="hidden">
            <WithdrawMoney />
          </div>
          <div className="hidden">
            <WithdrawModal />
          </div>
          <div className="">
            <TransactionModalI />
          </div>
        </div>
        <div className="flex min-h-screen">
          <div className="lg:w-[300px] hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block lg:w-[730px] xl:w-[100%]">
            <div className="flex lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
              </div>
              <div className="flex hidden lg:flex space-x-4 items-center">
                <img src="src/assets/4.png" alt="" />
                <div className="flex space-x-4 items-center">
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
              </div>
              <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                <img src="src/assets/menu.png" alt="" />
              </div>
            </div>

            <div className="relative mt-16 p-6 xl:pl-10 pt-0 lg:pt-20">
              <div className="flex items-start flex-row justify-between space-y-2">
                <div className="flex items-start flex-col">
                  <h1 className="text-2xl font-bold">Wallet</h1>
                </div>
              </div>

              <div className="flex items-center justify-between mt-14 space-x-4">
                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p className="text-xl">Total Balance</p>
                  <p className="font-bold text-2xl">#155,500</p>
                  <div className="absolute top-4 right-4">
                    <img src="src/assets/Wallet.png" alt="" />
                  </div>
                  <div className="flex mb-5 items-center flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
                    <Link
                      to="/"
                      className="p-2 space-x-3 md:space-x-0 bg-[#FF8801] w-full text-center text-[#fff] rounded-full"
                    >
                      <i className="fa fa-plus"></i>
                      <span>Add Money</span>
                    </Link>
                    <Link
                      to="/"
                      className="w-full whitespace-nowrap space-x-3 md:space-x-0 px-8 bg-[#FFE8CE] flex items-center justify-center p-2 text-center text-[#000] rounded-full"
                    >
                      <img src="src/assets/anchor.png" alt="" />
                      <span>Withdraw Money</span>
                    </Link>
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

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 pt-12 md:space-x-8 items-center justify-between">
                <div className="flex shadow-md p-6 flex-col w-full rounded-xl items-start space-x-6">
                  <div className="w-full flex md:items-center space-x-2 space-y-2">
                    <img
                      src="src/assets/Frameeee.png"
                      className="h-[20px]"
                      alt=""
                    />
                    <p className="relative whitespace-nowrap -top-1">
                      Main Wallet
                    </p>
                  </div>
                  <p className="font-bold">#125,000</p>
                </div>

                <div className="flex shadow-md p-6 flex-col w-full rounded-xl items-start space-x-6">
                  <div className="w-full flex items-center space-x-2 space-y-2">
                    <img src="src/assets/Frameeee.png" alt="" />
                    <p className="relative -top-1 whitespace-nowrap">
                      Bonus Wallet
                    </p>
                  </div>
                  <p className="font-bold">#18,500</p>
                </div>
              </div>

              <div className="relative top-24">
                <div className="flex md:items-center text-center md:text-left space-y-4 md:space-y-0 flex-col md:flex-row md:space-x-4">
                  <Link
                    to=""
                    className="md:p-3 whitespace-nowrap p-3 md:whitespace-wrap bg-[#1B156C] md:px-24 rounded-lg text-[#fff]"
                  >
                    Transaction History
                  </Link>
                  <Link
                    to=""
                    className="md:p-3 p-3 bg-[#1B156C1A] whitespace-nowrap md:whitespace-wrap hover:bg-[#1B156C] hover:text-[#fff] md:px-24 bg-opacity-10 rounded-lg"
                  >
                    Wallet Settings
                  </Link>
                </div>

                <div id="transactionhistory" className="hiddn">
                  <div className="md:flex grid grid-cols-2 md:gap-0 gap-2 flex-col md:flex-row items-center md:space-x-4 mt-8">
                    <div className="bg-[#F0F0F0] md:w-full p-2 space-x-4 flex items-center rounded-lg">
                      <i className="fa fa-search"></i>
                      <input
                        type="search"
                        placeholder="Search transactions..."
                        className="w-full focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#F0F0F0] w-[200px] flex items-center order-1 md:order-0 justify-between p-2 rounded-lg">
                      <select>
                        <option>All Wallet</option>
                      </select>
                    </div>
                    <div className="bg-[#F0F0F0] flex items-center order-1 md:order-0 justify-between md:w-[200px] p-2 rounded-lg">
                      <select>
                        <option>All Types</option>
                      </select>
                    </div>

                    <div className="bg-[#F0F0F0] order-1 md:order-0 p-2 rounded-lg">
                      <input type="date" className="focus:outline-none" />
                    </div>
                    <div className="rounded-lg">
                      <Link
                        to=""
                        className="p-2 flex items-center px-8 pr-10 pl-5 rounded-lg space-x-3 bg-[#F0F0F0]"
                      >
                        <span className="text-[#FF8801]">Download</span>
                        <img
                          src="src/assets/download.png"
                          className=""
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="relative mt-10 space-y-8">
                    <Link to="" className="flex items-center space-x-4">
                      <img
                        src="src/assets/arrow-right.png"
                        className=""
                        id="img"
                        alt=""
                      />
                      <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold mb-4">
                          Wallet Top-up
                        </h1>
                        <div className="flex items-center space-x-4">
                          <span>Feb 20, 2025 2:30 PM</span>
                          <img
                            src="src/assets/dot.png"
                            className="hidden md:inline-block"
                            alt=""
                          />
                          <span className="hidden md:inline-block">
                            Card Payment
                          </span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <h1 className="text-xl font-bold">+#50,000</h1>
                        <Link
                          to="/"
                          className="p-2 text-center bg-[#04A9491A] bg-opacity-10 text-[#04A949] px-4 rounded-full"
                        >
                          Success
                        </Link>
                      </div>
                    </Link>

                    <Link to="" className="flex items-center space-x-4">
                      <img src="src/assets/arrow-down.png" id="img" alt="" />
                      <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold mb-4">
                          Bank Withdrawal
                        </h1>
                        <div className="flex items-center space-x-4">
                          <span>Feb 20, 2025 2:30 PM</span>
                          <img
                            className="hidden md:inline-block"
                            src="src/assets/dot.png"
                            alt=""
                          />
                          <span className="hidden md:inline-block">
                            Card Payment
                          </span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <h1 className="text-xl font-bold">+#50,000</h1>
                        <Link
                          to="/"
                          className="p-2 text-center bg-[#04A9491A] bg-opacity-10 text-[#04A949] px-4 rounded-full"
                        >
                          Success
                        </Link>
                      </div>
                    </Link>

                    <Link to="" className="flex items-center space-x-4">
                      <img id="img" src="src/assets/gift_.png" alt="" />
                      <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold mb-4">
                          Incentive Credit
                        </h1>
                        <div className="flex items-center space-x-4">
                          <span>Feb 20, 2025 2:30 PM</span>
                          <img
                            className="hidden md:inline-block"
                            src="src/assets/dot.png"
                            alt=""
                          />
                          <span className="hidden md:inline-block">
                            Card Payment
                          </span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <h1 className="text-xl font-bold">+#50,000</h1>
                        <Link
                          to="/"
                          className="p-2 text-center bg-[#04A9491A] bg-opacity-10 text-[#04A949] px-4 rounded-full"
                        >
                          Success
                        </Link>
                      </div>
                    </Link>

                    <Link to="" className="flex items-center space-x-4">
                      <img id="img" src="src/assets/arrow-down.png" alt="" />
                      <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold mb-4">
                          Bank Withdrawal
                        </h1>
                        <div className="flex items-center space-x-4">
                          <span>Feb 20, 2025 2:30 PM</span>
                          <img
                            src="src/assets/dot.png"
                            className="hidden md:inline-block"
                            alt=""
                          />
                          <span className="hidden md:inline-block">
                            Card Payment
                          </span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <h1 className="text-xl font-bold">+#50,000</h1>
                        <Link
                          to="/"
                          className="p-2 text-center bg-[#04A9491A] bg-opacity-10 text-[#04A949] px-4 rounded-full"
                        >
                          Success
                        </Link>
                      </div>
                    </Link>

                    <Link to="" className="flex items-center space-x-4">
                      <img id="img" src="src/assets/arrow-right.png" alt="" />
                      <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold mb-4">
                          Wallet Top-up
                        </h1>
                        <div className="flex items-center space-x-4">
                          <span>Feb 20, 2025 2:30 PM</span>
                          <img
                            src="src/assets/dot.png"
                            className="hidden md:inline-block"
                            alt=""
                          />
                          <span className="hidden md:inline-block">
                            Card Payment
                          </span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <h1 className="text-xl font-bold">+#50,000</h1>
                        <Link
                          to="/"
                          className="p-2 text-center bg-[#04A9491A] bg-opacity-10 text-[#04A949] px-4 rounded-full"
                        >
                          Success
                        </Link>
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 top-12 pb-8 items-center relative top-12 justify-between">
                    <div>
                      <p>Showing 1-8 from 100</p>
                    </div>
                    <div className="space-x-2">
                      <Link
                        to=""
                        className="fa fa-angle-left p-3 pr-5 rounded-lg border-[#FF8801] border-1"
                      ></Link>
                      <Link to="" className="bg-[#FF8801] p-3 rounded-lg">
                        1
                      </Link>
                      <Link to="" className="p-3">
                        2
                      </Link>
                      <Link to="" className="p-3">
                        3
                      </Link>
                      <Link to="" className="p-3">
                        4
                      </Link>
                      <Link to="" className="p-3">
                        5
                      </Link>
                      <Link to="" className="p-3 hidden md:inline-block">
                        ...
                      </Link>
                      <Link
                        to=""
                        className="fa fa-angle-right bg-[] p-3 pr-5 flex items-center justify-center border-1 border-[#FF8801] rounded-lg"
                      ></Link>
                    </div>
                  </div>
                </div>

                <div id="walletsettings" className="relative hidden top-12">
                  <div className="flex items-center flex-col">
                    <div className="flex items-center w-full justify-between">
                      <div>
                        <h1 className="text-2xl font-bold">
                          Linked Bank Accounts
                        </h1>
                        <p>Manage your withdrawal destination accounts</p>
                      </div>
                      <div>
                        <Link
                          to=""
                          className="bg-[#FF8801] p-3 px-8 rounded-full text-[#fff]"
                        >
                          Add Bank
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-20 flex-col justify-center text-center">
                      <h1 className="text-xl font-bold block">
                        No bank linked yet
                      </h1>
                      <p className="block">
                        Add a bank account to enable withdrawals
                      </p>
                      <div className="mt-6">
                        <Link
                          to=""
                          className="border-[#E1E1E1] p-3 px-5 border-1 rounded-full"
                        >
                          Add Bank Account
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-[#FAFAFA] mt-12 p-6 rounded-xl flex-col">
                    <h1 className="text-2xl font-bold mb-3">
                      Auto-Debit Preferences
                    </h1>
                    <div className="flex items-center bg-[#fff] pr-4 w-full justify-between">
                      <div className="flex space-y-2 flex-col p-3 mt-4 space-y-2">
                        <p className="text-xl">
                          Enable Auto-Debit For Savings Plan
                        </p>
                        <p>
                          Automatically deduct contributions from your wallet
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div
                          className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOn ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                          onClick={toggleSwitchOne}
                        >
                          <div
                            className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOn ? "translate-x-6" : "translate-x-0"}
          `}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start bg-[#FAFAFA] mt-12 p-6 rounded-xl flex-col">
                    <h1 className="text-2xl font-bold mb-3">
                      Security Settings
                    </h1>
                    <div className="flex items-center bg-[#fff] pr-4 w-full justify-between">
                      <div className="flex flex-col p-3 mt-4 space-y-2">
                        <p className="text-xl">Enable withdrawal Pin/OTP</p>
                        <p>Add extra security layer for withdrawals</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div
                          className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOnTwo ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                          onClick={toggleSwitchTwo}
                        >
                          <div
                            className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOnTwo ? "translate-x-6" : "translate-x-0"}
          `}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start bg-[#FAFAFA] mt-12 p-6 rounded-xl flex-col">
                    <h1 className="text-2xl font-bold mb-3">
                      Notifications & Alerts
                    </h1>
                    <div className="flex items-center bg-[#fff] pr-4 w-full justify-between">
                      <div className="flex flex-col p-3 mt-4 space-y-2">
                        <p className="text-xl">Low Balance Alert</p>
                        <p>Get notified when wallet balance is below #1,000</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div
                          className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOnThree ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                          onClick={toggleSwitchThree}
                        >
                          <div
                            className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOnThree ? "translate-x-6" : "translate-x-0"}
          `}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** Footer */}
          </main>
        </div>
      </div>
    </>
  );
}
export default Wallet;
