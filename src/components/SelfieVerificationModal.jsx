import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SelfieVerificationModal() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;

        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play().catch(() => {
            toast.error("Unable to start camera autoplay.");
          });
        };
      }

      toast.success("Camera Activated");
    } catch (error) {
      console.error(error);
      toast.error("Camera access denied!");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const takeSelfie = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0);

    const img = canvas.toDataURL("image/png");
    setCapturedImage(img);

    stopCamera();
    toast.success("Selfie captured!");
  };

  const retake = () => {
    setCapturedImage(null);
    startCamera();
    toast("Ready to retake!");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center fixed bg-[#0A064033] p-6">
      <Toaster />

      <div
        id="cam"
        className="w-[400px] px-3 max-w-xl bg-white shadow-xl rounded-2xl p-6 relative"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Selfie Verification
          </h2>
          <i className="fa fa-times"></i>
        </div>

        <div className="bg-[#0d0f16] rounded-xl p-6 flex flex-col items-center">
          <div className="w-64 h-64 rounded-xl overflow-hidden mb-4 relative border border-gray-600">
            {!capturedImage ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
            ) : (
              <img
                src={capturedImage}
                alt="Selfie"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-[200px] text-left text-white">
            <ul>
              <h1 className="font-bold text-xl">Selfie Guidelines</h1>
              <li type="disc">Look directly at the camera</li>
              <li type="disc">Ensure good lighting</li>
              <li type="disc">Remove glasses and headwear</li>
              <li type="disc">Keep a neutral expression</li>
            </ul>
          </div>
          <div className="mt-10">
            {!capturedImage ? (
              <button
                onClick={takeSelfie}
                className="w-14 h-14 bg-gray-200 rounded-full border-4 border-white shadow-md"
              />
            ) : (
              <button onClick={retake} className="text-white underline">
                <span>Retake</span>
                <img src="src/assets/lighting.png" alt="" />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={retake}
            className="px-6 py-3 rounded-full bg-orange-100 text-orange-600 font-medium w-1/2 mr-2"
          >
            Retake
          </button>

          <button
            disabled={!capturedImage}
            className={`px-6 py-3 rounded-full w-1/2 ml-2 font-medium text-white ${
              capturedImage
                ? "bg-[#FF8801]"
                : "bg-orange-300 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
