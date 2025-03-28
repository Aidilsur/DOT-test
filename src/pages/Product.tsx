import { useDispatch } from "react-redux";
import Style from "../style/productPage.module.css";
import ProductList from "../components/Product/ProductList";
import { products } from "../data/dummyProduct";
import { addToCart } from "../state/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className={Style.container}>
      <h1>Daftar Produk</h1>
      <ProductList products={products} addToCart={handleAddToCart} />
    </div>
  );
};

export default ProductPage;
