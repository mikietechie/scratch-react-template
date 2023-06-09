import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
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
import { Users, UsersAdd } from "./pages/admin/models/users";

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          {
            user && (
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/users/add" element={<UsersAdd />} />
                <Route path="*" element={<NotFound />} />
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
