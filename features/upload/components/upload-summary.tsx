"use client";

import { useUploadStore } from "@/features/upload/store/upload-store";

export function UploadSummary() {
  const files = useUploadStore((state) => state.files);

  if (files.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-center">
      <p className="text-lg font-semibold">
        📦 {files.length} file{files.length > 1 ? "s" : ""} detected
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        Ready for Smart Import
      </p>
    </div>
  );
}