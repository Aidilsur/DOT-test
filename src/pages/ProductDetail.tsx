import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart } from "../state/cartSlice";
import { showToast } from "../utils/toast";
import { products } from "../data/dummyProduct";
import Style from "../style/productDetail.module.css";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      showToast("error", "Jumlah melebihi stok tersedia");
      return;
    }
    dispatch(addToCart({ ...product, quantity }));
    showToast("success", `${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Link to="/product" className={Style.backButton}>
          <FaArrowLeft /> Kembali ke Produk
        </Link>
      </div>

      <div className={Style.productDetail}>
        <div className={Style.imageSection}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={Style.infoSection}>
          <h1>{product.name}</h1>
          <p className={Style.price}>Rp {product.price.toLocaleString()}</p>
          <div className={Style.stock}>Stok: {product.stock} tersedia</div>

          <div className={Style.description}>
            <h3>Deskripsi Produk</h3>
            <p>{product.description}</p>
          </div>

          <div className={Style.actions}>
            <div className={Style.quantity}>
              <NumberInput
                value={quantity}
                min={1}
                max={product.stock}
                onChange={setQuantity}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
