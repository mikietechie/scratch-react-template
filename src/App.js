import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import AdminLayout from './pages/AdminLayout';
import Login from './pages/Login';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true)
    }, 3000);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {
          loggedIn && (
            <Route path="/admin" element={<AdminLayout authCtx={{loggedIn, user}} />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/settings" element={<Settings />} />
            </Route>
          )}
        <Route path="/" element={<Layout authCtx={{loggedIn, user}} />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
