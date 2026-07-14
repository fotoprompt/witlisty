export interface Product {
  id: string;

  name: string;

  design?: File;

  previews: File[];

  assets?: File;

  others: File[];
}