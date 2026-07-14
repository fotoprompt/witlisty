export interface Product {
  id: string;

  design?: File;

  preview?: File;

  assets: File[];

  title?: string;

  description?: string;

  tags?: string[];
}