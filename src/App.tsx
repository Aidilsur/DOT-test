import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import { lazy } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

// style
import "react-toastify/dist/ReactToastify.css";

// auth page
const LoginPage = lazy(() => import("./pages/Login"));

// Dashboard page

const DashboardLayout = lazy(() => import("./Layout/Dashboard"));
const ProductPage = lazy(() => import("./pages/Product"));
const DetailProductPage = lazy(() => import("./pages/ProductDetail"));
const ChartPage = lazy(() => import("./pages/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <TaskPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:id", element: <DetailProductPage /> },
      { path: "/cart", element: <ChartPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />;
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
