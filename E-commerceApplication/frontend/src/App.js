import { BrowserRouter, Routes, Route } from "react-router-dom";

//components:
import HeaderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

//user components:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//publicly avaliable pages:
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";

//user pages:
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";

//admin pages:
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponents />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* <Route path="/" component={HomePage} /> in previous versions 
      of react-router-dom */}

        {/* user protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponents />
    </BrowserRouter>
  );
}

export default App;
