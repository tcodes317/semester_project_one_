import { Link, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import SignIn from "./SignIn";
import imgone from "./../assets/humanoid.png";

function Account() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      navigate("/sign-in");
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
        <div className="w-[90%] mx-auto">
          <Header />
          <div className="flex lg:space-x-8 lg:w-full xl:space-x-14 flex-col-reverse md:w-[800px] md:mx-auto lg:space-x-4 lg:flex-row items-center my-30 mb-42 justify-between">
            <div className="space-y-8 w-full xl:w-full lg:w-[420px] w-[330px] md:w-[700px]">
              <h1 className="text-xl font-bold md:text-3xl">
                Create Your Account
              </h1>
              <form action="">
                <div className="flex flex-col mb-8 space-y-2 focus:outline-none">
                  <label for="firstName">FullName</label>
                  <input
                    type=""
                    required
                    placeholder="example, Michael Adebayo"
                    className="p-2 pl-4 focus:outline-none rounded-full shadow-md"
                  />
                </div>
                <div className="flex flex-col space-y-2 mb-8 focus:outline-none">
                  <label for="lastName">Email Address</label>
                  <input
                    type=""
                    placeholder="@example.com"
                    required
                    className="shadow-md pl-4 p-2 focus:outline-none rounded-full"
                  />
                </div>
                <div className="flex flex-col mb-8 space-y-2 focus:outline-none">
                  <label for="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 80x xxx xxxx"
                    className="shadow-md p-2 pl-4 focus:outline-none rounded-full"
                  />
                </div>
                <div className="flex flex-col mb-8 space-y-2 focus:outline-none">
                  <label for="password">Passwords</label>
                  <div className="flex items-center rounded-full shadow-md">
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="Enter password"
                      required
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
            <div className="mb-12 md:mb-24 xl:w-full lg:mb-0">
              <img src={imgone} className="" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Account;
