import {
  FaBox,
  FaShoppingCart,
  FaSignOutAlt,
  FaTasks,
  FaUser,
} from "react-icons/fa";
import Style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/authSlice";
import { RootState } from "../../state/store";

const menuItems = [
  {
    title: "Tasks",
    icon: <FaTasks className={Style.icon} />,
    path: "/",
  },
  {
    title: "Products",
    icon: <FaBox className={Style.icon} />,
    path: "/products",
  },
  {
    title: "Cart",
    icon: <FaShoppingCart className={Style.icon} />,
    path: "/cart",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={Style.sidebar}>
      <div className={Style.logo}>
        <h2>Task Manager</h2>
      </div>

      <nav className={Style.menu}>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`${Style.menuItem} ${
              location.pathname === item.path ? Style.active : ""
            }`}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className={Style.userInfo}>
        <div className={Style.profile}>
          <div className={Style.profileImage}>
            <FaUser />
          </div>
          <span>{user?.name}</span>
        </div>
        <button className={Style.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt className={Style.icon} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
