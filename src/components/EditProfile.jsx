import Slider from "./Slider";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";

function EditProfile({ user, setUser }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSave = () => {
    if (
      nameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      phoneRef.current.value.trim() === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    setUser({
      ...user,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    });

    toast.success("Successfully updated!");

    setTimeout(() => {
      const el = document.getElementById("qwa");
      if (el) {
        el.style.display = "none";
      }
    }, 2000);
  };

  return (
    <>
      <Toaster />
      <div className="relative" id="qwa">
        <div className="bg-[#0A064033] fixed flex items-center justify-center w-[100%] h-[100vh]">
          <div className="flex flex-col bg-[#fff] rounded-xl px-4 md:w-[500px] p-10 px-8">
            <div className="flex items-center border-b-1 pb-5 justify-between w-full">
              <h1>Edit Profile</h1>
              <X
                onClick={() => {
                  document.getElementById("qwa").style = "display: none";
                }}
              ></X>
            </div>

            <div className="mt-4 space-y-6">
              <div className="flex flex-col">
                <label>Full Name</label>
                <input
                  type="text"
                  ref={nameRef}
                  className="w-full p-2 bg-[#FAFAFA] focus:outline-none p-4"
                  placeholder="Michael Adebayo"
                />
              </div>

              <div className="flex flex-col">
                <label>Email Address</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full p-2 bg-[#FAFAFA] focus:outline-none p-4"
                  placeholder="@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  type="tel"
                  ref={phoneRef}
                  placeholder="+234"
                  className="w-full bg-[#FAFAFA] focus:outline-none p-4"
                />
              </div>
            </div>

            <div className="space-x-4 flex items-center justify-between">
              <div></div>

              <div className="space-x-4 mt-8 flex items-center">
                <Link to="" className="p-2 px-6 rounded-full bg-[#FFE8CE]">
                  Cancel
                </Link>
                <Link
                  to=""
                  onClick={handleSave}
                  className="p-2 px-8 whitespace-nowrap text-white rounded-full bg-[#FF8801]"
                >
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProfile;
