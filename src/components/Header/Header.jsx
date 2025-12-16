// import { logo } from "./../../";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } finally {
      setIsLoading(false);
      navigate("/sign-in");
    }
  };
  const contactUs = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } finally {
      setIsLoading(false);
      navigate("/contact-us");
    }
  };
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <ClipLoader color="#FF8801" size={60} />
        </div>
      )}
      <div className="lg:relative fixed top-0 w-full left-0 z-10 bg-[#fff] shadow-lg lg:shadow-none lg:p-5 lg:px-0">
        <div
          className="lg:mx-auto lg:w-[100%] lg:px-12 xl:px-16 2xl:px-24"
          id="ee"
        >
          <div className="lg:flex relative lg:static flex items-center justify-between p-4 lg:items-center lg:justify-between">
            <div className="lg:flex lg:items-center">
              {/* <img src="./src/assets/2.png" alt="error loading ..." /> */}
              <img src="./../../assets/2.png" alt="" />

              <nav className="lg:ml-[20px] hidden xl:ml-[100px] lg:bg-[#FFFBF6] lg:flex lg:items-center lg:space-x-1 xl:space-x-6">
                <Link to="/" className="lg:p-4 lg:px-5 lg:block">
                  Services
                </Link>
                <Link
                  to="/"
                  className="lg:p-4 lg:whitespace-nowrap lg:px-5 lg:block"
                >
                  How it works
                </Link>
                <Link
                  to="#"
                  onClick={contactUs}
                  className="lg:p-4 lg:px-5 lg:block lg:whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="lg:relative lg:flex lg:items-center hidden lg:block lg:space-x-3 xl:space-x-6">
              <button>
                <Link
                  to="#"
                  onClick={signIn}
                  className="lg:p-3 xl:p-3 lg:px-2 xl:px-4 lg:rounded-full"
                >
                  <span className="lg:whitespace-nowrap">Sign In</span>
                </Link>
              </button>

              <button className="lg:space-x-2">
                <Link
                  to="/"
                  className="lg:p-3 lg:whitespace-nowrap lg:bg-[#FFE8CE] lg:px-2 lg:px-4 lg:rounded-full"
                >
                  <span className="">Get Our App</span>
                  <i className="fa fa-angle-down"></i>
                </Link>
              </button>

              <button className="lg:text-white">
                <Link
                  to="#"
                  onClick={handleClick}
                  className="lg:p-3 lg:px-5 xl:px-6 lg:whitespace-nowrap lg:rounded-full lg:px-2 lg:bg-[#FF8801]"
                >
                  <span>Register Now</span>
                </Link>
              </button>
            </div>
            <div
              onClick={toggleMenu}
              className="lg:hidden w-[50px] lg:px-5 bg-[#fff] relative z-20 h-[50px] shadow-lg flex items-center justify-center rounded-full cursor-pointer transition-all hover:bg-gray-100"
            >
              <i
                className={`fa ${isOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </div>
            {isOpen && (
              <div className="absolute h-[4570px] hiden top-21 z-10 w-full bg-[#0A064033] top-0 left-0 sm:block md:top-0 md:left-0">
                <div className="w-full fixed hidde md:block md:w-[400px] bg-[#fff] h-[4570px]">
                  <nav className="text-white md:w-[400px] sm:hidden md:flex md:flex-col md:justify-between md:h-[1100px]">
                    <div>
                      <Link
                        to="/"
                        className="p-4 block bg-[#FFFBF6] text-black text-xl"
                      >
                        Services
                      </Link>
                      <Link
                        to="/"
                        className="p-4 block bg-[#FFFBF6] text-black text-xl"
                      >
                        How it works
                      </Link>
                      <Link
                        to="/"
                        className="p-4 block bg-[#FFFBF6] text-black text-xl"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="p-3 bg-[#fff] py-2 space-y-2 ">
                      <Link
                        to="/"
                        className="p-4 text-center rounded-full block bg-[#FFFBF6] text-black text-xl"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/"
                        className="p-4 flex text-center rounded-full items-center text-white bg-[#FF8801] text-black text-xl"
                      >
                        <span className="w-full">Create free account</span>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
