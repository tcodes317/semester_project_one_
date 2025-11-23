import { Link } from "react-router-dom";
import Slider from "./Slider";
import UploadIDModal from "./UpdateIdModal";
import SelfieVerificationModal from "./SelfieVerificationModal";

export default function AccountVerification() {
  const requirements = [
    {
      id: 1,
      title: "Valid ID Document",
      text: "Upload a clear photo of your NIN, Driver’s License, or Voter’s Card",
    },
    {
      id: 2,
      title: "Selfie Verification",
      text: "Take a clear selfie to verify your identity",
    },
    {
      id: 3,
      title: "Review & Approval",
      text: "Our team will review and approve your documents",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="absolute z-50 w-full">
          <div className="hidden">
            <UploadIDModal />
          </div>
          <div>
            <SelfieVerificationModal />
          </div>
        </div>
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
            {/** Header */}
            <div className="flex bg-[#FFFBF6] lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
              </div>
              <div className="flex items-center space-x-6">
                <img src="src/assets/4.png" alt="" />
                <div className="flex hidden lg:flex space-x-4 items-center">
                  <img
                    src="src/assets/Avatars.png"
                    className="w-[40px] h-[40px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span>Rokeeb Abdul</span>
                    <span>email@gmail.com</span>
                  </div>
                </div>
                <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                  <img src="src/assets/menu.png" alt="" />
                </div>
              </div>
            </div>

            <div className="w-full min-h-screen mx-auto bg-white p-8">
              <Link
                to="/settings"
                className="flex items-center gap-2 text-sm mb-6 cursor-pointer"
              >
                <i className="text-xl fa fa-arrow-left"></i>
                <span className="underline">Back to Settings</span>
              </Link>

              <div className="shadow-xl rounded-xl p-6 shadow-sm mb-10 max-w-6xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                    <img
                      src="src/assets/not.png"
                      className="w-[25px] h-[25px]"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div>
                      <h2 className="text-lg font-semibold">
                        Verification Not Started
                      </h2>
                      <p className="text-gray-500 text-sm mt-1 w-full md:w-[90%]">
                        Complete KYC to unlock all features including higher
                        transaction limits and marketplace access.
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="text-gray-500 text-sm mb-1">0% Complete</p>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-orange-500 rounded-full w-0"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-5 bg-[#FF8801] text-white px-5 py-2 rounded-full text-sm transition">
                  Start Verification
                </button>
              </div>

              {/* Requirements */}
              <div className="shadow-xl rounded-xl p-6 shadow-sm max-w-6xl">
                <h3 className="text-lg font-semibold mb-5">
                  Verification Requirements
                </h3>

                <div className="space-y-5">
                  {requirements.map((req) => (
                    <div key={req.id} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                        {req.id}
                      </div>

                      <div>
                        <p className="font-semibold">{req.title}</p>
                        <p className="text-gray-500 text-sm mt-1">{req.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
