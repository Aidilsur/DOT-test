import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from "../assets/images";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  quantity?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 2199000,
    description: "Comfortable athletic shoes with Air Max cushioning",
    image: Image1,
    category: "Shoes",
    stock: 15,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 2499000,
    description: "High-performance running shoes with Boost technology",
    image: Image2,
    category: "Shoes",
    stock: 10,
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 1799000,
    description: "Retro-style sneakers with modern comfort",
    image: Image3,
    category: "Shoes",
    stock: 20,
  },
  {
    id: 4,
    name: "Nike Dri-FIT T-Shirt",
    price: 299000,
    description: "Moisture-wicking athletic t-shirt",
    image: Image4,
    category: "Apparel",
    stock: 30,
  },
  {
    id: 5,
    name: "Adidas Training Shorts",
    price: 349000,
    description: "Comfortable shorts for workout and training",
    image: Image5,
    category: "Apparel",
    stock: 25,
  },
  {
    id: 6,
    name: "Sport Water Bottle",
    price: 159000,
    description: "1L BPA-free sports water bottle",
    image: Image6,
    category: "Accessories",
    stock: 50,
  },
];
