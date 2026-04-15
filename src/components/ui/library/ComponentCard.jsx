import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code2, Download } from "lucide-react";
import CodeModal from "./CodeModal";

function ComponentCard({ title, description, code, children }) {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }, [code]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([code], {
      type: "text/javascript;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "")}.jsx`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [code, title]);

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group w-full bg-[#0f0f14] border border-zinc-800 rounded-2xl p-6 flex flex-col gap-6 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/30 transition-all"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>

            {description && (
              <p className="text-sm text-zinc-400 mt-1">
                {description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <Code2 size={16} />
            </button>

            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <Download size={16} />
            </button>

            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div
          className="
          relative
          flex items-center justify-center
          rounded-xl
          h-[200px]
          w-full
          border border-zinc-800
          bg-gradient-to-b
          from-zinc-900
          to-zinc-950
          overflow-hidden
        "
        >

          {/* subtle glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />

          {/* component preview */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {children}
          </div>

        </div>
      </motion.div>

      <CodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        code={code}
      />
    </>
  );
}

export default React.memo(ComponentCard);