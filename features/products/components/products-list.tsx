"use client";

import { ProductCard } from "./product-card";
import { useUploadStore } from "@/features/upload/store/upload-store";
import { groupFiles } from "@/features/parser/services/group-files";

export function ProductsList() {
  const files = useUploadStore((state) => state.files);

  const products = groupFiles(files);

  if (products.length === 0) return null;

  return (
    <div className="mt-8 grid gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          design={!!product.design}
          previews={product.previews.length}
          assets={!!product.assets}
        />
      ))}
    </div>
  );
}