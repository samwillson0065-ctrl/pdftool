import { Upload } from "lucide-react";

export default function UploadBox({ onUpload }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
      <Upload className="w-10 h-10 text-blue-600 mb-3" />
      <p className="text-gray-600 font-medium">Click or drag a PDF file to upload</p>
      <input
        type="file"
        accept="application/pdf"
        onChange={onUpload}
        className="hidden"
        id="fileInput"
      />
    </div>
  );
}
