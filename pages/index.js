import { useState } from "react";
import PreviewBox from "../components/PreviewBox";
import UploadBox from "../components/UploadBox";
import ActionBar from "../components/ActionBar";

export default function Home() {
  const [content, setContent] = useState("<h2>Upload a PDF to see preview</h2>");
  const [rawText, setRawText] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRawText("Pretend extracted text from PDF...");
      setContent("<h2>Sample Heading</h2><p>This is formatted content from the PDF.</p>");
    }
  };

  const handleDownload = () => alert("Download PDF triggered!");
  const handleCopy = () => navigator.clipboard.writeText(rawText);
  const handleClear = () => {
    setRawText("");
    setContent("<h2>Upload a PDF to see preview</h2>");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-blue-600">📄 PDF Chat</h1>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        <UploadBox onUpload={handleUpload} />
        <PreviewBox content={content} />
      </div>

      <ActionBar onDownload={handleDownload} onCopy={handleCopy} onClear={handleClear} />
    </div>
  );
}
