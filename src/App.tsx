import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./views/Dashboard";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import NotFoundPage from "./views/Exeception/404";
import ServerOverload from "./views/Exeception/503";
import SigninPage from "./views/Auth/Signin";
import SignupPage from "./views/Auth/Signup";
import ForgotPasswordPage from "./views/Auth/ForgotPassword";
import ProfilePage from "./views/Account/Profile";
import AccountLayout from "./views/Account";
import PasswordPage from "./views/Account/Password";
import NotificationPage from "./views/Account/Notification";
import BillingPage from "./views/Account/Billing";
import ResetPasswordPage from "./views/Auth/ResetPassword";
import EmptyLayout from "./layout/EmptyLayout";
import VerifyEmailPage from "./views/Auth/VerifyEmail";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <BrowserRouter>
            <Routes>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/account" element={<AccountLayout />}>
                  <Route path="/account/profile" element={<ProfilePage />}></Route>
                  <Route path="/account/password" element={<PasswordPage />}></Route>
                  <Route path="/account/notification" element={<NotificationPage />}></Route>
                  <Route path="/account/billing" element={<BillingPage />}></Route>
                </Route>

                <Route path="/exeception/404" element={<NotFoundPage />}></Route>
                <Route path="/exeception/503" element={<ServerOverload />}></Route>
              </Route>

              <Route element={<EmptyLayout />}>
                <Route path="/signin" element={<SigninPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
                <Route path="/resetpassword" element={<ResetPasswordPage />}></Route>
                <Route path="/verify/email/:code" element={<VerifyEmailPage />}></Route>
              </Route>

              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
