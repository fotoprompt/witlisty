"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { useUploadStore } from "@/features/upload/store/upload-store";

export function UploadZone() {
  // Zustand Store
  const addFiles = useUploadStore((state) => state.addFiles);

  // Handle dropped files
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      addFiles(acceptedFiles);
    },
    [addFiles]
  );

  // React Dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "application/zip": [".zip"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
      "application/pdf": [".pdf"],
      "application/postscript": [".ai", ".eps"],
    },
  });

  return (
    <div className="mt-12 w-full max-w-3xl">
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 transition-all ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10"
            : "border-zinc-700 bg-zinc-900/50 hover:border-violet-500"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center text-center">
          <Upload className="mb-6 h-14 w-14 text-violet-500" />

          <h2 className="text-2xl font-semibold">
            {isDragActive
              ? "Drop your files here..."
              : "Drop your designs here"}
          </h2>

          <p className="mt-2 text-zinc-400">
            ZIP, PNG, SVG, AI, EPS, PDF
          </p>

          <p className="mt-6 rounded-lg bg-violet-600 px-6 py-3 font-medium">
            Browse files
          </p>
        </div>
      </div>
    </div>
  );
}