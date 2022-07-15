export interface ProductDetailinterface {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: {
    hint?: string;
    exact?: number;
    percent?: number;
  };
  image: string;
}
