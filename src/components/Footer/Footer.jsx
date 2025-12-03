import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="relative py-12 md:px-10 lg:py-10 bg-[#FFFBF6] lg:px-18 px-4">
        <div className="lg:flex md:grid md:grid-cols-2 flex-col space-y-12 lg:space-y-0 lg:flex-row items-start lg:items-center justify-between">
          <div className="space-y-2">
            <h1 className="font-bold text-xl">Contact Information</h1>
            <p className="w-[330px]">
              Suite 56, Divine Grace Plaza, Jakande Gate Beside Chicken
              Republic, Lagos, Nigeria
            </p>
            <p>08109551058 | derain4real@gmail.com</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl">Legal</h1>
            <ul className="space-y-2">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex items-center space-y-4 flex-col mt-8">
            <div className="flex items-center space-x-4">
              <h1 className="font-bold text-xl">Got any question?</h1>
              <Link to="/" className="bg-[#FFE8CE] rounded-full p-3 px-5">
                <button>Contact Us</button>
              </Link>
            </div>
            <div>
              <div className="lg:w-[50px] mt-4 lg:mt-0 flex items-center space-x-6 lg:h-[50px]">
                <img
                  src="src/assets/facebook.png"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="src/assets/twitter.png"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="src/assets/x.png"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
