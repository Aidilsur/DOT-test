import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

// style
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./Layout/Dashboard";

// auth page
const LoginPage = lazy(() => import("./pages/Login"));

// Dashboard page

const ProductPage = lazy(() => import("./pages/Product"));
const DetailProductPage = lazy(() => import("./pages/ProductDetail"));
const ChartPage = lazy(() => import("./pages/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TaskPage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DetailProductPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ChartPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
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
