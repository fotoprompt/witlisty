import type { Product } from "../types/product";
import { detectFileKind } from "./detect-file-kind";

export function groupFiles(files: File[]): Product[] {
  const products = new Map<string, Product>();

  for (const file of files) {
    const kind = detectFileKind(file);

    // اسم أساسي بحال:
    // cat.png -> cat
    // cat_mockup.jpg -> cat
    // cat-preview.png -> cat

    const baseName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]?(mockup|mock-up|preview).*$/i, "")
      .trim();

    if (!products.has(baseName)) {
      products.set(baseName, {
        id: crypto.randomUUID(),
        name: baseName,
        previews: [],
        others: [],
      });
    }

    const product = products.get(baseName)!;

    switch (kind) {
      case "design":
        product.design = file;
        break;

      case "preview":
        product.previews.push(file);
        break;

      case "asset":
        product.assets = file;
        break;

      default:
        product.others.push(file);
    }
  }

  return [...products.values()];
}