import "../../styles/admin.css";
import {
  FiEye,
  FiDownload,
  FiCheckCircle,
  FiXCircle
} from "react-icons/fi";

const documentsMock = [
  {
    facultyId: "FAC001",
    facultyName: "Dr. John Smith",
    document: "PhD Certificate",
    category: "Academic",
    uploadDate: "2026-01-05",
    status: "Pending"
  },
  {
    facultyId: "FAC002",
    facultyName: "Dr. Sarah Johnson",
    document: "M.Sc Degree",
    category: "Academic",
    uploadDate: "2026-01-04",
    status: "Approved"
  },
  {
    facultyId: "FAC003",
    facultyName: "Dr. Michael Brown",
    document: "Experience Certificate",
    category: "Experience",
    uploadDate: "2026-01-03",
    status: "Approved"
  }
];

function AllDocuments() {
  return (
    <div>
      <h2 className="page-title">All Documents</h2>
      <p className="page-subtitle">Review and manage faculty documents</p>

      <div className="card">
        <h3>Document Management</h3>
        <p className="muted">Filter, view, and approve faculty documents</p>

        {/* Filters UI (mock only) */}
        <div className="filter-row">
          <input className="search-input" placeholder="Faculty ID or Name..." />
          <select className="search-input">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
          <select className="search-input">
            <option>All Categories</option>
            <option>Academic</option>
            <option>Experience</option>
          </select>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Faculty Name</th>
              <th>Document Name</th>
              <th>Category</th>
              <th>Upload Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {documentsMock.map((d, i) => (
              <tr key={i}>
                <td>{d.facultyId}</td>
                <td>{d.facultyName}</td>
                <td>{d.document}</td>
                <td>{d.category}</td>
                <td>{d.uploadDate}</td>
                <td>
                  <span
                    className={`badge ${
                      d.status === "Approved"
                        ? "badge-active"
                        : d.status === "Pending"
                        ? "badge-pending"
                        : "badge-disabled"
                    }`}
                  >
                    {d.status}
                  </span>
                </td>

                {/* ACTION ICONS */}
                <td className="actions">
                  <FiEye title="View" />
                  <FiDownload title="Download" />

                  {d.status === "Pending" && (
                    <>
                      <FiCheckCircle
                        className="approve-icon"
                        title="Approve"
                      />
                      <FiXCircle
                        className="reject-icon"
                        title="Reject"
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllDocuments;
