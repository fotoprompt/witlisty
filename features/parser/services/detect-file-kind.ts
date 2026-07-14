import type { FileKind } from "../types/file-kind";

export function detectFileKind(file: File): FileKind {
  const name = file.name.toLowerCase();

  // ZIP files
  if (name.endsWith(".zip")) {
    return "asset";
  }

  // Preview images
  if (
    name.includes("mockup") ||
    name.includes("mock-up") ||
    name.includes("preview")
  ) {
    return "preview";
  }

  // Design files
  if (
    name.endsWith(".png") ||
    name.endsWith(".svg") ||
    name.endsWith(".ai") ||
    name.endsWith(".eps")
  ) {
    return "design";
  }

  return "other";
}