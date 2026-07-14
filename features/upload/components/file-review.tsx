"use client";

import { useUploadStore } from "@/features/upload/store/upload-store";

export function FileReview() {
  const files = useUploadStore((state) => state.files);

  if (files.length === 0) return null;

  return (
    <div className="mt-8 w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Uploaded Files ({files.length})
      </h3>

      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3"
          >
            <span className="truncate">{file.name}</span>

            <span className="text-sm text-zinc-400">
              {(file.size / 1024).toFixed(1)} KB
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}