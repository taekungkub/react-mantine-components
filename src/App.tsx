import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
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
import AdminPage from "./views/Permission/Admin"
import SecretPage from "./views/Permission/Secret"
import AuthPage from "./views/Permission/Auth"
import SearchProductPage from "./views/Redux/Search"
import CheckoutPage from "./views/Redux/Checkout"
import CodeVerifyPage from "./views/Auth/CodeVerify"
import ContactPage from "./views/Contact"
import LandingPage from "./views/Landing"
import ProjectsPage from "./views/Projects"
import Web3Page from "./views/Web3"
import OrderListPage from "./views/Orders"
import OrderDetailPage from "./views/Order"
import CustomerDetailPage from "./views/CustomerDetail"
import InvoicePage from "./views/Invoice"
import ActivityLogPage from "./views/ActivityLogPage"
import CalendarPage from "./views/CRM/Calendar"
import ModalGlobal from "./components/Modals/ModalGlobal"

function Root() {
  return (
    <>
      <ThemeProvider>
        <MyGlobalStyles />
        <Providers store={store}>
          <ModalGlobal />
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
                <Route path="/account/invoice" element={<InvoicePage />}></Route>
                <Route path="/account/activity-log" element={<ActivityLogPage />}></Route>
              </Route>

              <Route path="/crm/customer" element={<CustomerPage />}></Route>
              <Route path="/crm/customer/:id" element={<CustomerDetailPage />}></Route>
              <Route path="/crm/calendar" element={<CalendarPage />}></Route>

              <Route path="/exeception/403" element={<NoPermisstionPage />}></Route>
              <Route path="/exeception/404" element={<NotFoundPage />}></Route>
              <Route path="/exeception/503" element={<ServerOverload />}></Route>

              <Route path="/components/button" element={<ButtonPage />}></Route>

              <Route path="/sales/products" element={<ProductListPage />}></Route>
              <Route path="/sales/products/new" element={<ProductNewPage />}></Route>
              <Route path="/sales/products/:id" element={<ProductNewPage />}></Route>
              <Route path="/sales/orders" element={<OrderListPage />}></Route>
              <Route path="/sales/order/:id" element={<OrderDetailPage />}></Route>

              <Route path="/redux/counter" element={<CounterPage />}></Route>

              <Route element={<EcommerceLayout />}>
                <Route element={<ProductLayout />}>
                  <Route path="/redux/products" element={<ProductReduxPage />}></Route>
                  <Route path="/redux/product/category/:name" element={<ProductCategory />}></Route>
                </Route>
                <Route path="/redux/product/:category/:id" element={<ProductReduxDetailPage />}></Route>
                <Route path="/redux/search" element={<SearchProductPage />}></Route>
              </Route>
              <Route path="/redux/checkout" element={<CheckoutPage />}></Route>

              <Route path="/cart/" element={<CartPage />}></Route>

              <Route element={<PrivateRoutes />}>
                <Route path="/permission/auth" element={<AuthPage />}></Route>
              </Route>

              <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
                <Route path="/permission/admin" element={<AdminPage />}></Route>
              </Route>

              <Route element={<PrivateRoutes allowedRoles={["superadmin"]} />}>
                <Route path="/superadmin" element={<SecretPage />}></Route>
              </Route>

              <Route element={<PrivateRoutes allowedRoles={["superadmin"]} />}>
                <Route path="/permission/secret" element={<SecretPage />}></Route>
              </Route>
              <Route path="/projects" element={<ProjectsPage />}></Route>
              <Route path="/web3" element={<Web3Page />}></Route>
            </Route>

            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/landing" element={<LandingPage />}></Route>

            <Route element={<EmptyLayout />}>
              <Route element={<UnAuthRoutes />}>
                <Route path="/signin" element={<SigninPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
              </Route>

              <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
              <Route path="/resetpassword" element={<ResetPasswordPage />}></Route>
              <Route path="/verify/email/:code" element={<VerifyEmailPage />}></Route>
              <Route path="/code-verify" element={<CodeVerifyPage />}></Route>
            </Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Providers>
      </ThemeProvider>
    </>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
