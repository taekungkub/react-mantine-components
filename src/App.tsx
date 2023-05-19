import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DashboardLayout from "./layout/DashboardLayout";
import { MantineProvider, Text } from "@mantine/core";
import Profile from "./views/Profile";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
