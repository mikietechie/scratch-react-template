import { Outlet, Link } from "react-router-dom";

export default function Layout({authCtx}) {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <nav className="navbar">
          <h1 className="float-start">Aone</h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-1">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mx-1">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link mx-1">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link mx-1">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
