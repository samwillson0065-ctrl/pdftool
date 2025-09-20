import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfName, setPdfName] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, pdfName }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${pdfName || "document"}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}>
      <h1>Content → PDF Generator</h1>

      <input
        style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        style={{ width: "100%", height: 150, margin: "8px 0", padding: "8px" }}
        placeholder="Write your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        placeholder="PDF File Name (without .pdf)"
        value={pdfName}
        onChange={(e) => setPdfName(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        style={{ padding: "10px 20px", marginTop: 10 }}
      >
        Generate PDF
      </button>
    </div>
  );
}