import type { NormalizedFile } from "@/types/normalized-file";

export function normalizeFiles(files: File[]): NormalizedFile[] {
  return files.map((file) => ({
    id: crypto.randomUUID(),
    name: file.name,
    extension: file.name.split(".").pop()?.toLowerCase() || "",
    size: file.size,
    type: file.type,
    file,
  }));
}