import React, { useEffect, useState } from "react";
import Prism from "prismjs";

const PreviewModal = ({ component, onClose }) => {
  const [copied, setCopied] = useState(false);

  const Component = component?.component;

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Syntax highlight
  useEffect(() => {
    if (component) Prism.highlightAll();
  }, [component]);

  const handleCopy = () => {
    if (!component) return;
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!component) return null;

  const isIcon = component.category === "icons";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0f0f0f] text-white w-full max-w-6xl rounded-2xl p-6 relative shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">
          {component.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* PREVIEW */}
          <div
            className="
              flex items-center justify-center
              border border-gray-700
              rounded-xl
              p-6
              min-h-[260px]
              bg-gradient-to-br from-zinc-900 to-black
            "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {Component ? (
              isIcon ? (
                <Component size={90} />   // 🔥 bigger icon
              ) : (
                <Component />
              )
            ) : (
              "No preview"
            )}
          </div>

          {/* CODE */}
          <div className="bg-black p-4 rounded-xl overflow-auto max-h-[400px]">
            <pre className="text-sm whitespace-pre-wrap">
              <code className="language-jsx">
                {component.code}
              </code>
            </pre>

            <button
              onClick={handleCopy}
              className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:opacity-90 transition"
            >
              {copied ? "Copied ✓" : "Copy Code"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PreviewModal;