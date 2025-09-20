import { Download, Copy, Trash2 } from "lucide-react";

export default function ActionBar({ onDownload, onCopy, onClear }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 p-4 flex justify-center gap-6">
      <button onClick={onDownload} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Download className="w-4 h-4" /> Download PDF
      </button>
      <button onClick={onCopy} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
        <Copy className="w-4 h-4" /> Copy Text
      </button>
      <button onClick={onClear} className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
        <Trash2 className="w-4 h-4" /> Clear
      </button>
    </div>
  );
}
