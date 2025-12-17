import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import toast from "react-hot-toast";
import { useState } from "react";
import Footer from "./Footer/Footer";
import imgone from "./../assets/fds.png";
import imgtwo from "./../assets/fds.png";

function SignIn() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);
    try {
      toast.success("Account Created!");
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (e) => {
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
      <div className="relative">
        <Header />
        <div className="md:pt-18 px-6">
          <div className="md:mx-8 pt-42 lg:hidden">
            <img
              src={imgone}
              className="w-[555px] md:w-full md:h-[500px] h-[350px] object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col mt-10 md:mt-18 lg:flex-row items-center w-[90%] mx-auto lg:mt-12 my-30 mb-42 justify-between">
            <h1 className="text-3xl md:text-4xl md:w-full lg:hidden text-center w-[250px] font-bold py-4 pb-12">
              Welcome back! Sign In
            </h1>
            <div className="space-y-12 lg:space-y-0 lg:items-center lg:space-x-14 lg:flex md:w-full md:mt-6">
              <div className="space-y-8 lg:w-full">
                <h1 className="text-3xl hidden lg:block font-bold text-center lg:text-left">
                  Welcome back! Sign In
                </h1>
                <form
                  id="form"
                  action=""
                  method="post"
                  className="w-[320px] mx-auto md:w-full"
                >
                  <div className="flex flex-col space-y-2 mb-8 focus:outline-none">
                    <label for="lastName">Email Address or Phone Number</label>
                    <input
                      type=""
                      placeholder="@example.com"
                      className="shadow-md pl-4 p-2 focus:outline-none rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mb-8 space-y-2 focus:outline-none">
                    <label for="password">Passwords</label>
                    <div className="flex items-center rounded-full shadow-md">
                      <input
                        type={visible ? "text" : "password"}
                        placeholder="Enter password"
                        className="p-2 w-full pl-4 rounded-full focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        className=""
                        aria-label={visible ? "Hide password" : "Show password"}
                      >
                        <i
                          className={`fa ${
                            visible ? "fa-eye-slash" : "fa-eye"
                          } mr-3`}
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>

                    <div className="flex space-y-4 flex-col lg:flex-row lg:items-center mt-4 justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="check" />
                        <span>Remember me for 30 days</span>
                      </div>
                      <div>
                        <Link to="#">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    disabled={loading}
                    className={`text-white cursor-pointer bg-[#FF8801] p-3 mt-2 rounded-full w-full ${
                      loading
                        ? "opacity-90 cursor-not-allowed"
                        : "hover:bg-[#e67a00]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <ClipLoader color="white" size={20} />
                      </>
                    ) : (
                      <span>Create Your Account</span>
                    )}
                  </button>
                </form>
                <p className="mt-8">
                  Already have an account?{" "}
                  <Link to="#" onClick={signIn} className="text-[#ff8801]">
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="lg:w-full 4xl:hidden hidden lg:block">
                <img src={imgtwo} className="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default SignIn;
