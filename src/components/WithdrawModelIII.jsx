import { useState } from "react";
import { X } from "lucide-react";
import card from "./../assets/card.png";
import bank from "./../assets/bank_.png";
import ussd from "./../assets/ussd.png";
import { Link } from "react-router-dom";

function TransactionModal({ onClose }) {
  const [selected, setSelected] = useState("card");

  const methods = [
    {
      id: "card",
      title: "Ahmed Bello",
      firstName: "Ahmed",
      lastName: "Bello",
      subtitle: "First Bank",
      accountName: "First Bank",
      accountNumber: "3094195213",
      image: bank,
    },
    {
      id: "bank",
      title: "Ahmed Bello",
      firstName: "Ahmed",
      lastName: "Bello",
      subtitle: "First Bank",
      accountName: "First Bank",
      accountNumber: "3094195213",
      image: bank,
    },
  ];

  return (
    <div
      id="wq"
      className="fixed w-[100%] h-[100vh] bg-[#c5c4cecc] flex justify-center items-center z-50 px-4"
    >
      <div className="bg-white w-[500px] rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Withdraw Money</h3>
          <button
            className="text-xl font-bold hover:text-gray-500"
            onClick={onClose}
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        <div className="w-full border-b my-4" />

        <p className="text-sm text-gray-700 mb-3">
          Select your preferred funding method
        </p>

        <div className="flex flex-col gap-3">
          {methods.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={`relative flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all 
                ${
                  selected === m.id
                    ? "bg-orange-50 border-orange-400"
                    : "border-gray-300"
                }
              `}
            >
              {selected === m.id && (
                <div className="absolute left-4 text-orange-500 text-2xl">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FF8801]"></div>
                </div>
              )}
              <div className="text-2xl pl-3">{m.icon}</div>
              <div className="w-[50px] h-[50px] bg-[#fff] flex items-center justify-center rounded-xl">
                <img src={m.image} className="w-[25px] h-[25px]" alt="" />
              </div>
              <div>
                <p className="font-semibold">
                  {m.firstName} {m.lastName}
                </p>
                <p className="text-xs flex items-center text-gray-500">
                  {m.accountName}{" "}
                  <div className="w-[5px] h-[5px] mx-1 bg-black rounded-full"></div>{" "}
                  {m.accountNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex p-3 mt-3 rounded-xl border-1 border-[#E1E1E1] text-center items-center justify-between">
          <Link to="" className="w-full font-bold">
            Add New Bank
          </Link>
        </div>
        <div className="float-right flex md:space-x-4 gap-4 mt-6">
          <button
            className="md:px-8 md:py-2 p-2 px-5 bg-[#FFE8CE] rounded-full text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>

          <button className="md:px-6 p-2 px-4 whitespace-nowrap md:py-2 bg-orange-500 text-white rounded-full">
            Proceed to withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
export default TransactionModal;
