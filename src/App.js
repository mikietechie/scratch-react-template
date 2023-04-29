import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import AdminLayout from './pages/AdminLayout';
import Login from './pages/Login';
import { AuthContext } from "./contexts/AuthContext";

export default function App() {
  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <BrowserRouter>
        <Routes>
          {
            user && (
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/settings" element={<Settings />} />
              </Route>
            )}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
