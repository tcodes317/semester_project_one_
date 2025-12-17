import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import imgone from "./../assets/meg.png";
import imgtwo from "./../assets/phone.png";
import imgthree from "./../assets/facebookreal.png";
import imgfour from "./../assets/twitterreal.png";
import imgfive from "./../assets/linkedinreal.png";

function ContactUs() {
  //   const [loading, isLoading] = useState(false);

  //   const handleClick = (e) => {};

  return (
    <>
      <div className="relative">
        <Header />
        <div className="lg:w-[90%] mb-32 mt-32 lg:mt-0 lg:mx-auto">
          <div className="lg:flex mx-4 mt-8 md:px-8 lg:flex-col lg:items-start lg:my-30 lg:mb-42 lg:justify-between">
            <div className="lg:space-y-8 lg:w-[650px] space-y-4 pb-12 lg:space-y-0">
              <h1 className="lg:text-3xl text-3xl font-bold">Contact Us</h1>
              <p className="lg:px-4 lg:text-sm lg:pl-0">
                We value your feedback, questions, and concerns at DRS, Our
                dedicated team is here to assist you and provide the support you
                need, Please, don't hesitate to reach out to us using any of the
                following contact methods.
              </p>
            </div>
          </div>

          <div className="lg:relative lg:bg-[#FFFBF6] lg:mb-18 lg:w-full lg:p-8">
            <div className="lg:flex md:grid md:grid-cols-3 lg:mx-auto space-y-8 lg:flex-row lg:items-center flex-col items-center lg:space-x-72 lg:justify-center">
              <div className="lg:flex lg:items-center flex xl:static lg:relative lg:left-12 flex-col items-center space-y-2 lg:flex-col lg:space-y-2">
                <div className="p-2 w-[30px] rounded-sm bg-[#FF8801]">
                  <img src={imgone} alt="" />
                </div>
                <span className="text-[#FF8801]">support@quickli.com</span>
              </div>
              <div className="lg:space-y-4 lg:flex lg:items-center flex flex-col items-center space-y-2 lg:items-center lg:flex-col">
                <div className="p-2 w-[30px] rounded-sm bg-[#FF8801]">
                  <img src={imgtwo} alt="" />
                </div>
                <span className="text-[#FF8801] whitespace-nowrap block">
                  +234 80x xxx xxxx
                </span>
              </div>
              <div className="lg:space-y-2 md:relative md:-top-4 xl:relative xl:right-0 lg:flex flex flex-col lg:relative lg:right-12 items-center space-y-2 lg:items-center lg:flex-col lg:space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 w-[30px] rounded-sm bg-[#ff8801]">
                    <img src={imgthree} alt="" />
                  </div>
                  <div className="p-2 w-[30px] rounded-sm bg-[#ff8801]">
                    <img src={imgfour} alt="" />
                  </div>
                  <div className="p-2 w-[30px] rounded-sm bg-[#ff8801]">
                    <img src={imgfive} alt="" />
                  </div>
                </div>
                <span className="text-[#ff8801]">Social Media</span>
              </div>
            </div>
          </div>
          <div className="lg:p-12 lg:mb-42 lg:bg-[#FFFBF6] mt-24 px-4">
            <form className="lg:space-y-8 lg:w-[80%] md:px-10 lg:mx-auto space-y-8 lg:pb-12">
              <div className="lg:flex space-y-6 items-center w-full space-x-8">
                <div className="flex flex-col space-y-2 w-full">
                  <label for="fullname">Full Name</label>
                  <input
                    type="text"
                    className="p-2 bg-[#fff] shadow-lg pl-4 rounded-lg focus:outline-none"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full lg:relative lg:-top-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="p-2 shadow-lg bg-[#fff] pl-4 rounded-lg focus:outline-none"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              <div className="lg:flex lg:flex-col lg:space-y-2">
                <label for="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="p-2 shadow-lg bg-[#fff] block w-full pl-4 rounded-lg focus:outline-none"
                  placeholder="+234"
                />
              </div>
              <div className="lg:flex lg:flex-col flex flex-col lg:space-y-2">
                <label for="message">Message</label>
                <textarea
                  type="text"
                  className="p-2 h-[200px] focus:outline-none shadow-lg pl-4 bg-[#fff] rounded-lg"
                  placeholder="Enter your message"
                ></textarea>
                <div className="text-right">Max 250 Chars</div>
              </div>
              <div className="lg:float-right flex justify-center lg:block md:justify-end">
                <Link
                  to="/"
                  className="p-3 lg:px-24 px-26 rounded-full text-white bg-[#FF8801]"
                >
                  <span>Send Message</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
