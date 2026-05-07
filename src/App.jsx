import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Header from "./components/Header";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtectedRoute";

import MenuList from "./components/MenuList";
import CreateMenuItemPage from "./components/CreateMenuItemPage";
import EditMenuItemPage from "./components/EditMenuItemPage";

import OrderList from "./components/OrderList";
import MyOrders from "./components/MyOrders";
import CreateOrderPage from "./components/CreateOrderPage";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* DEFAULT ROUTE */}
        <Route
          path="/"
          element={<Navigate to="/menu" />}
        />

        <Route
          path="/login"
          element={<LoginForm />}
        />

        <Route
          path="/register"
          element={<RegisterForm />}
        />

        <Route
          path="/menu"
          element={<MenuList />}
        />

        <Route
          path="/menu/new"
          element={
            <ProtectedRoute>
              <CreateMenuItemPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/menu/:id/edit"
          element={
            <ProtectedRoute>
              <EditMenuItemPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders/me"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders/new"
          element={
            <ProtectedRoute>
              <CreateOrderPage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;