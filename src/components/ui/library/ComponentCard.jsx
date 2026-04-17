import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Download } from "lucide-react";

function ComponentCard({ component, onClick }) {
  // ✅ SAFETY CHECK (prevents crash)
  if (!component) return null;

  const { name, description, code, component: Component } = component;

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e) => {
    e.stopPropagation(); // prevent modal opening
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }, [code]);

  const handleDownload = useCallback((e) => {
    e.stopPropagation(); // prevent modal opening

    const blob = new Blob([code], {
      type: "text/javascript;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${(name || "component").replace(/\s+/g, "")}.jsx`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [code, name]);

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group w-full bg-[#0f0f14] border border-zinc-800 rounded-2xl p-6 flex flex-col gap-6 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/30 transition-all cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {name || "Untitled"}
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
        {/* glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />

        {/* component preview */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {Component ? <Component /> : <p className="text-zinc-500">Preview unavailable</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default React.memo(ComponentCard);