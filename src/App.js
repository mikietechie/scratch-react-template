import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import WebsiteLayout from "./pages/website/WebsiteLayout";
import Home from "./pages/website/Home";
import Contact from "./pages/website/Contact";
import NotFound from "./pages/website/NotFound";
import Login from './pages/website/Login';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import AdminLayout from './pages/admin/AdminLayout';
import Logout from "./pages/website/Logout";

export default function App() {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          {
            user && (
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/settings" element={<Settings />} />
              </Route>
            )}
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
