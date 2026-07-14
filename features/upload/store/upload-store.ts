import { create } from "zustand";

interface UploadStore {
  files: File[];

  addFiles: (files: File[]) => void;

  removeFile: (name: string) => void;

  clearFiles: () => void;
}

export const useUploadStore = create<UploadStore>((set) => ({
  files: [],

  addFiles: (newFiles) =>
    set((state) => ({
      files: [...state.files, ...newFiles],
    })),

  removeFile: (name) =>
    set((state) => ({
      files: state.files.filter((file) => file.name !== name),
    })),

  clearFiles: () => set({ files: [] }),
}));