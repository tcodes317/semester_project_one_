import { useState } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "Premium Local Rice", price: 85000, qty: 1 },
    { id: 2, name: "Premium Local Rice", price: 85000, qty: 1 },
  ]);

  const increment = (id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = items.reduce((t, i) => t + i.price * i.qty, 0);
  const totalDeducted = subtotal;

  return (
    <>
      <div className="bg-[#0A064033] h-[100vh] overflow-y-scroll">
        <div className="p-6 bg-[#fff] pb-24 lg:w-[1050px] w-[345px] float-right font-sans">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-4">
            <img src="src/assets/exit.png" alt="" />{" "}
            <span>Shopping Cart ({items.length} items)</span>
          </h2>
          <hr className="mb-6 bg-[#D9D9D9] text-[#D9D9D9]" />

          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 justify-between rounded-xl shadow"
              >
                <div className="space-y-4 lg:flex lg:space-x-6">
                  <div className="bg-gray-200 w-24 h-24 rounded-xl"></div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">50kg bag</p>
                    <p className="font-bold mt-1 text-sm">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-end flex-col gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 border-1 border-[#000] w-[40px] h-[40px] flex items-center justify-center text-lg"
                  >
                    <img src="src/assets/del__.png" alt="" />
                  </button>
                  <div className="flex items-center w-[120px] justify-between gap-3 border border-[#FF880166] rounded-full px-4 py-1">
                    <button
                      onClick={() => decrement(item.id)}
                      className="text-lg"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="text-lg"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold w-20 text-right">
                    ₦{(item.qty * item.price).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gray-100 rounded-xl p-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-semibold">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Deducted</span>
              <span className="font-semibold">
                ₦{totalDeducted.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="relative py-8">
            <div className="flex text-[#9747FF] font-bold items-center p-4 py-6 border-1 border-[#9747FF66] bg-[#9747FF66] rounded-lg justify-between">
              <p>Wallet Balance</p>
              <p>#125,000</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-100 border space-x-3 border-red-300 flex items-center rounded-xl text-sm text-red-600">
            <img src="src/assets/warning.png" alt="" />
            <p className="font-semibold flex flex-col items-start">
              <span>Insufficient funds</span>
              <p>Please top up your wallet</p>
            </p>
          </div>

          <button className="w-full bg-orange-400 text-white py-3 mt-6 rounded-full font-semibold text-sm">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
