export interface Product {
    id: number;
    name: string;
    price: number;
    imagePath: string;
    rate: number;
  }

  export interface CartItem {
    product: Product;
    qty: number;
  }
