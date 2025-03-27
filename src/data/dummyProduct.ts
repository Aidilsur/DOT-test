export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 2199000,
    description: "Comfortable athletic shoes with Air Max cushioning",
    image: "https://img.ncrsport.com/img/storage/large/AO1023-003-1.jpg",
    category: "Shoes",
    stock: 15,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 2499000,
    description: "High-performance running shoes with Boost technology",
    image: "https://img.ncrsport.com/img/storage/large/IF1480-1.jpg",
    category: "Shoes",
    stock: 10,
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 1799000,
    description: "Retro-style sneakers with modern comfort",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/398203/02/sv01/fnd/IDN/fmt/png/Sepatu-Atletik-RS-X-Efekt-Premium",
    category: "Shoes",
    stock: 20,
  },
  {
    id: 4,
    name: "Nike Dri-FIT T-Shirt",
    price: 299000,
    description: "Moisture-wicking athletic t-shirt",
    image:
      "https://stockuk.co.uk/cdn/shop/products/Nike-dri-fit-t-shirt-black.jpg?v=1658831736",
    category: "Apparel",
    stock: 30,
  },
  {
    id: 5,
    name: "Adidas Training Shorts",
    price: 349000,
    description: "Comfortable shorts for workout and training",
    image:
      "https://www.adidas.co.id/media/catalog/product/i/b/ib8161_2_apparel_photography_front20center20view_grey.jpg",
    category: "Apparel",
    stock: 25,
  },
  {
    id: 6,
    name: "Sport Water Bottle",
    price: 159000,
    description: "1L BPA-free sports water bottle",
    image: "https://mg.co.id/wp-content/uploads/2020/03/hitam-1-600x600.jpg",
    category: "Accessories",
    stock: 50,
  },
];
