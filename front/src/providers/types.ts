export interface IGlobalContext {
  listProduct: IProducts[];
  setListProduct: React.Dispatch<React.SetStateAction<IProducts[]>>;
  getProducts: () => void
}
export interface IGlobalProviderProps {
  children: React.ReactNode;
}

interface ISize {
  available: boolean;
  size: string;
  sku: string;
}

export interface IProducts {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: ISize[];
}
