import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { showToast } from "../utils/toast";
import Style from "../Style/cartPage.module.css";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { CartItem, removeFromCart, updateQuantity } from "../state/cartSlice";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number, name: string) => {
    dispatch(removeFromCart(id));
    showToast("error", `${name} telah dihapus dari keranjang`);
  };

  const handleQuantityChange = (
    id: number,
    quantity: number,
    stock: number
  ) => {
    if (quantity < 1) {
      showToast("error", "Jumlah minimal adalah 1");
      return;
    }
    if (quantity > stock) {
      showToast("error", "Jumlah melebihi stok tersedia");
      return;
    }
    dispatch(updateQuantity({ id, quantity }));
  };

  const total = cartItems.reduce(
    (sum: number, item: { price: number; quantity: number }) =>
      sum + item.price * item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (sum: number, item: { price: number; quantity: number }) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Link to="/product" className={Style.backButton}>
          <FaArrowLeft /> Kembali ke Produk
        </Link>
        <h1>Keranjang Belanja</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className={Style.emptyCart}>
          <p>Keranjang belanja Anda kosong</p>
          <Link to="/product" className={Style.shopButton}>
            Mulai Belanja
          </Link>
        </div>
      ) : (
        <>
          <div className={Style.cartItems}>
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className={Style.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={Style.itemDetails}>
                  <h3>{item.name}</h3>
                  <p className={Style.price}>
                    Rp {item.price.toLocaleString()}
                  </p>
                  <div className={Style.quantityControl}>
                    <NumberInput
                      value={item.quantity}
                      min={1}
                      max={item.stock}
                      onChange={(value) =>
                        handleQuantityChange(item.id, value, item.stock)
                      }
                    />
                    <span className={Style.stock}>Stok: {item.stock}</span>
                  </div>
                  <p className={Style.itemTotal}>
                    Total: Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemove(item.id, item.name)}
                  className={Style.removeButton}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
          </div>
          <div className={Style.cartSummary}>
            <h3>Ringkasan Belanja</h3>
            <div className={Style.summaryDetails}>
              <div className={Style.summaryRow}>
                <span>Total Item:</span>
                <span>{cartItems.length} barang</span>
              </div>
              <div className={Style.summaryRow}>
                <span>Subtotal Produk:</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className={Style.summaryDivider} />
              <div className={`${Style.summaryRow} ${Style.summaryTotal}`}>
                <span>Total Pembayaran:</span>
                <span className={Style.totalAmount}>
                  Rp {total.toLocaleString()}
                </span>
              </div>
            </div>
            <Button
              className={Style.checkoutButton}
              fullWidth
              variant="contained"
              color="primary"
            >
              Lanjut ke Pembayaran ({cartItems.length} barang)
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
