import { useState } from "react";
import { X } from "lucide-react";

export default function UploadIDModal({ onClose }) {
  const [selectedDoc, setSelectedDoc] = useState("nin");
  const [file, setFile] = useState(null);

  const documentTypes = [
    { id: "nin", label: "National Identity Number (NIN)" },
    { id: "dl", label: "Driver’s License" },
    { id: "vc", label: "Voter’s Card" },
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  return (
    <div className="fixed inset-0 bg-[#000]/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-xl overflow-y-scroll lg:h-[550px] xl:h-auto xl:overflow-y-auto rounded-2xl shadow-lg p-6 relative">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-lg font-semibold">Upload ID Document</h2>
          <button className="text-xl" onClick={onClose}>
            <X></X>
          </button>
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium mb-3">Select document type</p>

          <div className="space-y-3">
            {documentTypes.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc.id)}
                className={`border-[#E1E1E1] border-2 rounded-lg py-3 px-4 cursor-pointer transition 
                ${
                  selectedDoc === doc.id ? "border-orange-400 bg-orange-50" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {selectedDoc === doc.id && (
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  )}
                  <p className="text-sm">{doc.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-medium mt-6 mb-2">Upload Document</p>

          <label className="border-dashed rounded-xl p-6 text-center cursor-pointer block">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">
                <img src="src/assets/upload.png" alt="" />
              </span>
              <p className="text-sm mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>

              <input
                type="file"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>
          </label>

          {file && (
            <p className="mt-2 text-sm text-green-600">Selected: {file.name}</p>
          )}

          <div className="bg-blue-50 border-[#1967D266] rounded-lg p-4 mt-5">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                i
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">
                  Tips for a clear photo:
                </p>
                <ul className="text-xs text-gray-600 list-disc ml-5 space-y-1">
                  <li>Ensure all text is readable</li>
                  <li>Avoid glare and shadows</li>
                  <li>Capture the entire document</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-6 py-2 rounded-full bg-[#FFE8CE] text-gray-700 w-full hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Cancel
          </button>

          <button className="px-6 py-2 rounded-full bg-[#FF8801] w-full text-white transition">
            Upload & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
