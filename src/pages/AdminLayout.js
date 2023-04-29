import { Outlet, Link } from "react-router-dom";

export default function AdminLayout(props) {
    return (
        <div>
          <header>
            <nav>
              <Link to="/" className="btn btn-primary">Home</Link>
              <Link to="/admin" className="btn btn-primary">Dashboard</Link>
              <Link to="/admin/settings" className="btn btn-success">Settings</Link>
            </nav>
          </header>
          <Outlet />
        </div>
    );
}
