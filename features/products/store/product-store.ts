import { create } from "zustand";
import type { Product } from "@/features/parser/types/product";

interface ProductStore {
  products: Product[];

  setProducts: (products: Product[]) => void;

  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  clearProducts: () => set({ products: [] }),
}));