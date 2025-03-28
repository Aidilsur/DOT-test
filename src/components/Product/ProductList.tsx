import { useNavigate } from "react-router-dom";
import { Product } from "../../data/dummyProduct";
import Style from "../../style/productPage.module.css";
import { showToast } from "../../utils/toast";
import Button from "../Button";

interface ProductListProps {
  products: Product[];
  addToCart: (id: number) => void;
}

const ProductList = ({ products, addToCart }: ProductListProps) => {
  const navigate = useNavigate();
  const handleAddToCart = (product: Product) => {
    addToCart(product.id);
    showToast("success", `${product.name} ditambahkan ke keranjang!`);
  };
  return (
    <div className={Style.productList}>
      {products.map((product) => (
        <div key={product.id} className={Style.productItem}>
          <img
            src={product.image}
            alt={product.name}
            className={Style.productImage}
            loading="lazy"
            width="300"
            height="300"
          />
          <div className={Style.productContent}>
            <h3>{product.name}</h3>
            <p className={Style.productDescription}>{product.description}</p>
            <div className={Style.productDetails}>
              <span className={Style.price}>
                Rp {product.price.toLocaleString()}
              </span>
              <span className={Style.stock}>Stock: {product.stock}</span>
            </div>
            <div className={Style.buttonGroup}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                Detail
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
