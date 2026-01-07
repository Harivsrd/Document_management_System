import { Link, useLocation } from "react-router-dom";
import {
  FiFileText,
  FiUser,
  FiLogOut,
  FiGrid,
  FiUsers
} from "react-icons/fi";

function Navbar({ role = "faculty" }) {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">College DMS</div>

        {role === "faculty" && (
          <div className="nav-menu">
            <NavItem to="/faculty/documents" icon={<FiFileText />} label="My Documents" active={isActive("/faculty/documents")} />
            <NavItem to="/faculty/profile" icon={<FiUser />} label="Profile" active={isActive("/faculty/profile")} />
          </div>
        )}

        {role === "admin" && (
          <div className="nav-menu">
            <NavItem to="/admin/dashboard" icon={<FiGrid />} label="Dashboard" active={isActive("/admin/dashboard")} />
            <NavItem to="/admin/faculty" icon={<FiUsers />} label="Faculty" active={isActive("/admin/faculty")} />
            <NavItem to="/admin/documents" icon={<FiFileText />} label="Documents" active={isActive("/admin/documents")} />
          </div>
        )}
      </div>

      <div className="nav-right">
        <div className="user-info">
          <div className="name">Dr. John Smith</div>
          <div className="id">FAC001</div>
        </div>

        <button className="btn btn-outline logout-btn">
          <FiLogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link to={to} className={`nav-item ${active ? "active" : ""}`}>
      <span className="nav-icon">{icon}</span>
      {label}
    </Link>
  );
}

export default Navbar;
