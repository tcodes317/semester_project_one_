import { Link } from "react-router-dom";
import imgone from "./../../assets/facebook.png";
import imgtwo from "./../../assets/twitter.png";
import imgthree from "./../../assets/x.png";

function Footer() {
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
              <Link
                to="/"
                onClick={contactUs}
                className="bg-[#FFE8CE] rounded-full p-3 px-5"
              >
                <button>Contact Us</button>
              </Link>
            </div>
            <div>
              <div className="lg:w-[50px] mt-4 lg:mt-0 flex items-center space-x-6 lg:h-[50px]">
                <img src={imgone} alt="" className="w-[25px] h-[25px]" />
                <img src={imgtwo} alt="" className="w-[25px] h-[25px]" />
                <img src={imgthree} alt="" className="w-[25px] h-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
