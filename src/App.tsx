import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./views/Dashboard"
import NotFoundPage from "./views/Exeception/404"
import ServerOverload from "./views/Exeception/503"
import SigninPage from "./views/Auth/Signin"
import SignupPage from "./views/Auth/Signup"
import ForgotPasswordPage from "./views/Auth/ForgotPassword"
import ProfilePage from "./views/Account/Profile"
import AccountLayout from "./views/Account"
import PasswordPage from "./views/Account/Password"
import NotificationPage from "./views/Account/Notification"
import BillingPage from "./views/Account/Billing"
import ResetPasswordPage from "./views/Auth/ResetPassword"
import EmptyLayout from "./layout/EmptyLayout"
import VerifyEmailPage from "./views/Auth/VerifyEmail"
import NoPermisstionPage from "./views/Exeception/403"
import MyGlobalStyles from "./style/MyGlobalStyle"
import ThemeProvider from ".//ThemeProvider"
import ButtonPage from "./views/Components/Button"
import ProductListPage from "./views/Products/ProductList"
import ProductNewPage from "./views/Products/NewProduct"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoutes from "./middleware/PrivateRoutes"
import UnAuthRoutes from "./middleware/UnAuthRoutes"
import CustomerPage from "./views/CRM/Customer"
import Providers from "./Providers"
import { store } from "./store/store"
import CounterPage from "./views/Redux/counter"
import ProductReduxPage from "./views/Redux/Products"
import ProductReduxDetailPage from "./views/Redux/ProductDetail"
import ProductCategory from "./views/Redux/ProductCategory"
import EcommerceLayout from "./layout/EcommerceLayout"
import ProductLayout from "./layout/ProductLayout"
import CartPage from "./views/Redux/Cart"

function App() {
  return (
    <>
      <ThemeProvider>
        <MyGlobalStyles />
        <BrowserRouter>
          <Providers store={store}>
            <AuthProvider>
              <Routes>
                <Route element={<DashboardLayout />}>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}></Route>

                  <Route element={<PrivateRoutes />}>
                    <Route path="/account" element={<AccountLayout />}>
                      <Route path="/account/profile" element={<ProfilePage />}></Route>
                      <Route path="/account/password" element={<PasswordPage />}></Route>
                      <Route path="/account/notification" element={<NotificationPage />}></Route>
                      <Route path="/account/billing" element={<BillingPage />}></Route>
                    </Route>
                  </Route>

                  <Route path="/crm/customer" element={<CustomerPage />}></Route>

                  <Route path="/exeception/403" element={<NoPermisstionPage />}></Route>
                  <Route path="/exeception/404" element={<NotFoundPage />}></Route>
                  <Route path="/exeception/503" element={<ServerOverload />}></Route>

                  <Route path="/components/button" element={<ButtonPage />}></Route>

                  <Route path="/products" element={<ProductListPage />}></Route>
                  <Route path="/products/new" element={<ProductNewPage />}></Route>
                  <Route path="/products/:id" element={<ProductNewPage />}></Route>

                  <Route element={<EcommerceLayout />}>
                    <Route path="/redux/counter" element={<CounterPage />}></Route>
                    <Route element={<ProductLayout />}>
                      <Route path="/redux/products" element={<ProductReduxPage />}></Route>
                      <Route path="/redux/product/category/:name" element={<ProductCategory />}></Route>
                    </Route>
                    <Route path="/redux/product/:category/:id" element={<ProductReduxDetailPage />}></Route>
                  </Route>
                  <Route path="/cart/" element={<CartPage />}></Route>
                </Route>

                <Route element={<EmptyLayout />}>
                  <Route element={<UnAuthRoutes />}>
                    <Route path="/signin" element={<SigninPage />}></Route>
                    <Route path="/signup" element={<SignupPage />}></Route>
                  </Route>

                  <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
                  <Route path="/resetpassword" element={<ResetPasswordPage />}></Route>
                  <Route path="/verify/email/:code" element={<VerifyEmailPage />}></Route>
                </Route>

                <Route path="*" element={<NotFoundPage />}></Route>
              </Routes>
            </AuthProvider>
          </Providers>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
