import { Mail, Phone, BadgeCheck, IdCard, CalendarDays } from "lucide-react";
import Slider from "./Slider";
import EditProfile from "./EditProfile";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Michael Adebayo",
    email: "tcodes317@example.com",
    phone: "+234 803 774 9313",
    joined: "Nov 11, 2025",
    avatar: "src/assets/avatar.png",
    verified: true,
  });

  const [showEdit, setShowEdt] = useState(false);

  return (
    <>
      <div className="relative" id="wes">
        <div
          className={`absolute w-full z-50 ${
            showEdit ? "" : "pointer-events-none"
          }`}
        >
          {showEdit && (
            <div className="pointer-events-auto" id="editPro">
              <EditProfile user={user} setUser={setUser} />
            </div>
          )}
        </div>
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
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

            <div className="w-full min-h-screen px-6 md:px-16 space-y-10 py-8 bg-white">
              <h1 className="text-3xl font-bold mb-8">Profile</h1>

              <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start justify-between shadow-sm">
                <div className="flex flex-col items-start gap-4">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-20 h-20 rounded-full shadow-xl object-cover"
                  />

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold">{user.name}</h2>
                      {user.verified && (
                        <span className="flex items-center gap-1 text-green-600 border border-green-600 rounded-full px-2 py-[2px] text-xs">
                          <BadgeCheck size={14} /> Verified
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                      <span className="flex items-center gap-1">
                        <img src="src/assets/shield.png" alt="" />{" "}
                        <span>Member</span>
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={16} /> Joined on {user.joined}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowEdt(!showEdit)}
                  className="mt-0 shadow-sm px-5 py-2 rounded-full hover:bg-gray-100 transition"
                >
                  Edit Profile
                </button>
              </div>
              <div className="p-6 shadow-lg">
                <h2 className="text-lg font-semibold">Contact Details</h2>

                <div className="bg-white rounded-xl p-6 px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="shadow-sm rounded-lg p-4 flex flex-col gap-1">
                    <span className="text-gray-600 flex items-start gap-2">
                      <img src="src/assets/megi.png" alt="" />
                      <div>
                        <span>Email Address</span>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </span>
                  </div>

                  <div className="shadow-sm rounded-lg p-4 flex flex-col gap-1">
                    <span className="text-gray-600 flex items-start gap-2">
                      <img src="src/assets/phonee.png" alt="" />{" "}
                      <div>
                        <span>Phone Number</span>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
