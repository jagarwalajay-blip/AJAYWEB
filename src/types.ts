export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  maker: {
    name: string;
    avatar: string;
    bio: string;
  };
  details: string[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
