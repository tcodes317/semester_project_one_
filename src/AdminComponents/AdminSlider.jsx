import logo from "./../assets/logo_.png";
import { Link } from "react-router-dom";
import HomeLogo from "./../assets/home_icon.png";

function AdminSlider() {
  return (
    <>
      <div className="relative w-[350px] px-2">
        <div className="flex justify-center py-6">
          <img src={logo} alt="" className="w-[110px]" />
        </div>
        <div>
          <nav className="space-y-2">
            <Link
              to="/"
              className="p-3 flex items-center space-x-3 text-white bg-[#FF8801] block"
            >
              <img src={HomeLogo} alt="" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/"
              className="p-3 flex items-center space-x-3 text-black block"
            >
              {/* <img src={HomeLogo} alt="" /> */}
              <span>Users</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
export default AdminSlider;
