import { Link } from "react-router-dom";
import logo from "./../assets/logoo.png";

function AdminSignIn() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center h-[100vh]">
        <div className="w-[350px]">
          <div className="py-6">
            <img src={logo} alt="" className="mx-auto w-[100px]" />
          </div>
          <h1 className="lg:text-center font-bold mb-4 lg:text-2xl">
            Welcome Back, Sign In
          </h1>
          <form action="" method="POST" className="space-y-5">
            <div className="flex flex-col space-y-2">
              <label for="">Email Address / Phone Number</label>
              <input
                type="email"
                placeholder=""
                className="p-2 border-[#F0F0F0] rounded-lg focus:outline-none border-2"
              />
            </div>
            <div>
              <label for="">Password</label>
              <div className="flex border-2 border-[#F0F0F0] mt-2 rounded-lg items-center pr-3">
                <input
                  type="password"
                  placeholder=""
                  className="p-2 w-full focus:outline-none"
                />
                <i className="fa fa-eye"></i>
              </div>
            </div>
            <div className="text-[#FF8801] flex items-center justify-between font-bold">
              <div></div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="flex justify-center bg-[#FF8801] p-3 rounded-lg">
              <Link to="/" className="text-white font-bold">
                <button>Login In</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminSignIn;
