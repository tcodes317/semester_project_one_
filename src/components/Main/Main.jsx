import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useState } from "react";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } finally {
      setIsLoading(false);
      navigate("/create-account");
    }
  };
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <ClipLoader color="#FF8801" size={60} />
        </div>
      )}
      <div className="lg:relative pt-25 xl:pt-0 lg:pt-0 lg:mx-auto lg:space-y-24 lg:mb-82">
        <section className="lg:flex pt-8 lg:items-center xl:px-18 lg:px-10 bg-[#FBFBFB] lg:justify-between lg:py-15">
          <div className="lg:space-y-8 space-y-6 pl-3 md:space-y-10">
            <div className="flex justify-center xl:justify-start">
              <h1 className="lg:text-6xl md:text-6xl xl:text-left md:text-center text-left font-bold text-4xl lg:font-bold lg:font-[Outfit]">
                Save together, <br /> grow together
              </h1>
            </div>
            <div className="">
              <p className="lg:w-[380px] text-center lg:pl-0 md:px-12 md:text-center xl:w-[600px] xl:text-left md:text-center md:text-2xl md:px-0 md:text-left xl:px-0">
                Join trusted savings groups, contribute seamlessly and get your
                payout on time.
              </p>
              <div className="lg:flex flex justify-center lg:justify-start xl:justify-start lg:space-x-3 md:my-10 md:flex md:items-center md:justify-center space-x-3 lg:items-center mt-8 lg:mt-6">
                <Link
                  to="#"
                  onClick={handleClick}
                  className="lg:p-3 lg:bg-[#FF8801] rounded-full px-6 text-white bg-[#FF8801] p-3 lg:rounded-full lg:px-8 lg:text-white"
                >
                  <button type="button">Register Now</button>
                </Link>

                <Link
                  to="/"
                  className="lg:p-3 lg:bg-[#FFE8CE] bg-[#FFE8CE] p-3 px-6 rounded-full lg:rounded-full lg:px-8 lg:text-white"
                >
                  <button className="lg:text-black lg:flex lg:items-center lg:space-x-2">
                    <span>Get Our App</span>
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-[500px]">
            <img src="./src/assets/1.png" alt="" className="md:mx-auto" />
          </div>
        </section>
        <section className="lg:relative pt-18 px-4 xl:px-6 md:px-10 lg:px-0 lg:w-[90%] lg:mx-auto">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:space-y-4 space-y-4">
              <h1 className="lg:font-bold font-bold text-2xl lg:text-4xl">
                Financially reliability
              </h1>
              <p className="lg:w-[480px]">
                Whether you're saving, funding a need, paying, rent, or planning
                ahead, we provide practical options that give you control. Our
                savings plans, incentives, and support services make managing
                money easier and more rewarding.
              </p>
              <div className="lg:relative lg:mt-12 lg:space-x-3 space-x-3 pb-8 pt-4">
                <Link
                  to="#"
                  onClick={handleClick}
                  className="lg:p-3 p-4 bg-[#ff8801] text-white rounded-full px-6 lg:bg-[#ff8801] lg:rounded-full lg:text-white lg:px-6"
                >
                  <button>Register Now</button>
                </Link>
                <Link
                  to="/"
                  className="lg:p-3 lg:bg-[#FFE8CE] lg:text-black p-4 bg-[#FFE8CE] rounded-full lg:rounded-full lg:px-6"
                >
                  <button>
                    <span>Get Our App</span>
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="src/assets/upcomingPayment.png"
                alt=""
                className="lg:w-[555px] md:w-[550px] w-[100%]"
              />
            </div>
          </div>
        </section>
        <section className="lg:relative lg:px-0 xl:px-6 px-4 pt-18 md:px-10  lg:w-[90%] lg:mx-auto">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:space-y-4 space-y-4">
              <h1 className="lg:font-bold lg:text-4xl text-2xl font-bold">
                Savings Plans
              </h1>
              <p className="lg:w-[480px]">
                Save consistently and earn more with structured contribute
                palns. <br /> Members commit to weekly or monthly payments and
                receive their full payout with incentives at the end of the
                cycle.
              </p>
              <p>
                We assure you of a:
                <ul>
                  <li type="disc">Reliable contribution system</li>
                  <li type="disc">Group-driven accountability</li>
                  <li type="disc">Guarantted incentives on withdrawal</li>
                  <li type="disc">Fixed target and payout dates</li>
                </ul>
              </p>
              <div className="lg:relative pt-4 pb-8 space-x-5 lg:mt-12 lg:space-x-3">
                <Link
                  to="#"
                  onClick={handleClick}
                  className="lg:p-3 p-4 py-3 bg-[#ff8801] text-white rounded-full lg:bg-[#ff8801] lg:rounded-full lg:text-white lg:px-6"
                >
                  <button>Register Now</button>
                </Link>
                <Link
                  to="/"
                  className="lg:p-3 lg:bg-[#FFE8CE] bg-[#FFE8CE] p-4 py-3 rounded-full px-5 lg:text-black lg:rounded-full lg:px-6"
                >
                  <button>
                    <span>Get Our App</span>
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="src/assets/FoodHamperGift.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </section>
        <section className="lg:relative lg:px-0 xl:px-6 lg:w-[90%] md:px-10 lg:mx-auto px-4 pt-18">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:space-y-4">
              <h1 className="lg:font-bold lg:text-4xl text-2xl font-bold">
                Foodstuff Marketplace
              </h1>
              <p className="lg:w-[480px]">
                Access discounted food packages through our cooperative
                bulk-buying system. Members can purchase food items at lower
                prices without the market hassle.
              </p>
              <div className="lg:relative lg:mt-12 lg:space-x-3 space-x-4">
                <button className="lg:p-3 p-3 mt-4 mb-3 px-4 bg-[#ff8801] rounded-full text-white lg:bg-[] lg:rounded-full lg:text-white lg:px-6">
                  <Link to="#" onClick={handleClick}>
                    <span>Register Now</span>
                  </Link>
                </button>
                <button className="lg:p-3 lg:bg-[#FFE8CE] bg-[#FFE8CE] p-3 rounded-full px-4 lg:text-black lg:rounded-full lg:px-6">
                  <Link to="/">
                    <span>Get Our App</span>
                    <i className="fa fa-angle-down"></i>
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <img
                src="src/assets/ShoppingCart.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </section>
        <section className="lg:relative lg:w-[90%] xl:px-6 lg:px-0 md:pt-12 md:pb-12 md:px-10 lg:mx-auto px-4 lg:space-y-14 mt-18 lg:p-16">
          <h1 className="lg:text-center lg:text-4xl hidden md:text-3xl text-center lg:font-bold mb-10 font-bold text-2xl lg:text-3xl">
            Join us in 4 Easy Steps
          </h1>
          <div className="lg:grid xl:relative xl:grid-cols-4 md:grid-cols-2 md:grid space-y-6 xl:items-start lg:grid-cols-3 lg:items-center lg:space-y-8 lg:justify-center lg:space-x-4">
            <div className="lg:space-y-4 space-y-4">
              <div className="w-[50px] mx-auto rounded-full h-[50px] block bg-[#FFE8CE] flex items-center justify-center">
                <p className="text-center">1</p>
              </div>
              <div id="we" className="pl-3">
                <h1 className="font-bold text-xl">Create an account</h1>
                <p className="w-[255px]">
                  Sign up with your basic details to become a registered member
                  of the platform
                </p>
              </div>
            </div>
            <div className="lg:space-y-4 space-y-4">
              <div className="w-[50px] mx-auto rounded-full h-[50px] block bg-[#FFE8CE] flex items-center justify-center">
                <p className="text-center">2</p>
              </div>
              <div id="we" className="lg:px-3 px-3">
                <h1 className="font-bold text-xl">Select a Service</h1>
                <p className="">
                  Choose what you want to do, join a savings plan, order
                  incentives, or shop for food items.
                </p>
              </div>
            </div>
            <div className="lg:space-y-4 space-y-4">
              <div className="w-[50px] mx-auto rounded-full h-[50px] block bg-[#FFE8CE] flex items-center justify-center">
                <p className="text-center">3</p>
              </div>
              <div id="we" className="pl-3">
                <h1 className="font-bold text-xl">
                  Make Contributions or Purchase
                </h1>
                <p className="w-[255px]">
                  Start saving weekyly/monthly or pay for the items or incentive
                  you've selected.
                </p>
              </div>
            </div>
            <div className="lg:space-y-4 space-y-4">
              <div className="w-[50px] mx-auto rounded-full h-[50px] block bg-[#FFE8CE] flex items-center justify-center">
                <p className="text-center">4</p>
              </div>
              <div id="we" className="pl-3">
                <h1 className="font-bold text-xl">
                  Withdraw or Redeem Benefits
                </h1>
                <p className="w-[255px]">
                  Get your savings with incentive, convert rewards to cash, or
                  receive your ordered items.
                </p>
              </div>
            </div>
            <div className="p-0.5 bg-[#F1F1F1] absolute top-6 left-30 -z-10"></div>
          </div>
          <div className="lg:flex my-12 flex space-x-4 items-center justify-center lg:items-center lg:justify-center lg:space-x-6">
            <Link
              to="/create-account"
              className="lg:bg-[#FF8801] bg-[#ff8801] p-3 rounded-full px-5 text-white lg:text-white lg:p-3 lg:px-6 lg:rounded-full"
            >
              Register Now
            </Link>
            <Link
              to="/create-account"
              className="lg:bg-[#FFE8CE] bg-[#ffe8ce] lg:space-x-2 lg:text-black p-3 px-6 rounded-full"
            >
              <span>Get Our App</span>
              <i className="fa fa-angle-down"></i>
            </Link>
          </div>
        </section>
        <section className="px-4 py-24  lg:px-0 lg:w-[90%] md:px-10 lg:mx-auto">
          <div className="lg:flex 2xl:pt-8 space-y-6 lg:items-center">
            <img
              className="w-[1050px] lg:w-[500px]"
              src="src/assets/3.png"
              alt=""
            />
            <div className="lg:flex lg:space-y-4 xl:py-18 lg:flex-col xl:py-12 2xl:py-8 lg:relative lg:bottom-3 2xl:w-full lg:bg-[#FFE8CE] lg:text-left xl:p-18 lg:p-10 lg:py-16">
              <h1 className="xl:text-5xl md:text-5xl text-start text-4xl text-center font-bold 2xl:text-6xl xl:px-0 2xl:px-4 2xl:w-[600px] lg:text-4xl lg:font-bold">
                Join Thousands on the Path to Financial Freedom.
              </h1>
              <div className="lg:mt-8 my-12 flex items-center justify-center xl:space-x-4 lg:space-x-6 2xl:pl-5">
                <Link
                  to="#"
                  onClick={handleClick}
                  className="lg:bg-[#FF8801] bg-[#FF8801] rounded-full p-3 px-5 text-white lg:rounded-full lg:p-3 lg:px-6 lg:text-white"
                >
                  <button>Register Now</button>
                </Link>
                <Link
                  to="/"
                  className="text-[#ff8801] bg-[#ff8801] p-3 px-6 rounded-full bg-white"
                >
                  <button>
                    <span>Get Our App</span>
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
