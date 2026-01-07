import "../../styles/adminDashboard.css";
import {
  FiUsers,
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiEye
} from "react-icons/fi";

function Dashboard() {
  return (
    <div className="admin-page">
      <div className="admin-dashboard">

        {/* PAGE HEADER */}
        <div className="page-header">
          <h2>Admin Dashboard</h2>
          <p>Overview of faculty documents and approvals</p>
        </div>

        {/* STATS CARDS */}
        <div className="stats-grid">
          <StatCard
            title="Total Faculty"
            value="45"
            subtitle="Active faculty members"
            icon={<FiUsers />}
            color="blue"
          />

          <StatCard
            title="Total Documents"
            value="312"
            subtitle="Documents in system"
            icon={<FiFileText />}
            color="purple"
          />

          <StatCard
            title="Pending Documents"
            value="23"
            subtitle="Awaiting approval"
            icon={<FiClock />}
            color="yellow"
          />

          <StatCard
            title="Approved Documents"
            value="267"
            subtitle="Verified documents"
            icon={<FiCheckCircle />}
            color="green"
          />

          <StatCard
            title="Rejected Documents"
            value="22"
            subtitle="Documents rejected"
            icon={<FiXCircle />}
            color="red"
          />
        </div>

        {/* QUICK ACTIONS */}
        <div className="action-grid">
          <div className="action-card">
            <h3>Faculty Management</h3>
            <p>View and manage faculty members and their documents</p>
            <button className="btn-primary blue">View Faculty List</button>
            <span className="action-note">
              Access faculty profiles, review qualifications, and download certificates
            </span>
          </div>

          <div className="action-card">
            <h3>Document Management</h3>
            <p>Review, approve, or reject submitted documents</p>
            <button className="btn-primary purple">View All Documents</button>
            <span className="action-note">
              Filter documents by status, faculty, or category for quick review
            </span>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="card">
          <h3>Recent Activity</h3>
          <p className="muted">Latest document submissions and approvals</p>

          <ul className="activity-list">
            <li>
              <span className="dot yellow"></span>
              <div>
                <b>Dr. John Smith</b> uploaded PhD Certificate
                <span>2 hours ago</span>
              </div>
              <button className="btn-outline">
                <FiEye /> View
              </button>
            </li>

            <li>
              <span className="dot green"></span>
              <div>
                <b>Dr. Sarah Johnson</b> uploaded Experience Letter
                <span>5 hours ago</span>
              </div>
              <button className="btn-outline">
                <FiEye /> View
              </button>
            </li>

            <li>
              <span className="dot green"></span>
              <div>
                <b>Dr. Michael Brown</b> uploaded Master Degree
                <span>1 day ago</span>
              </div>
              <button className="btn-outline">
                <FiEye /> View
              </button>
            </li>

            <li>
              <span className="dot yellow"></span>
              <div>
                <b>Dr. Emily Davis</b> uploaded Bachelor Degree
                <span>2 days ago</span>
              </div>
              <button className="btn-outline">
                <FiEye /> View
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

/* STAT CARD COMPONENT */
function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">{icon}</div>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default Dashboard;
