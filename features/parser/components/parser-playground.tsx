"use client";

import { useUploadStore } from "@/features/upload/store/upload-store";
import { detectFileKind } from "../services/detect-file-kind";

export function ParserPlayground() {
  const files = useUploadStore((state) => state.files);

  if (files.length === 0) return null;

  return (
    <div className="mt-8 w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Parser Playground
      </h3>

      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3"
          >
            <span>{file.name}</span>

            <span className="rounded bg-violet-600 px-2 py-1 text-sm">
              {detectFileKind(file)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}