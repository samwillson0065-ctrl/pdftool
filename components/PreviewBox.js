import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreviewBox({ content }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full p-4 font-semibold text-gray-700 hover:bg-gray-50"
      >
        <span className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Document Preview
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 border-t border-gray-200 text-gray-800 prose max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
