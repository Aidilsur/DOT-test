import {
  FaBox,
  FaShoppingCart,
  FaSignOutAlt,
  FaTasks,
  FaUser,
} from "react-icons/fa";
import Style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

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
          <span>John Doe</span>
        </div>
        <button className={Style.logoutBtn}>
          <FaSignOutAlt className={Style.icon} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
