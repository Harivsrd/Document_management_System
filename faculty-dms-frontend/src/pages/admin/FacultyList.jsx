import "../../styles/admin.css";
import { FiEye, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const facultyMock = [
  {
    id: "FAC001",
    name: "Dr. John Smith",
    department: "Computer Science",
    email: "john.smith@college.edu",
    phone: "+1 555 123 4567",
    status: "Active"
  },
  {
    id: "FAC002",
    name: "Dr. Sarah Johnson",
    department: "Electronics",
    email: "sarah.johnson@college.edu",
    phone: "+1 555 987 6543",
    status: "Active"
  },
  {
    id: "FAC003",
    name: "Dr. Michael Brown",
    department: "Mechanical",
    email: "michael.brown@college.edu",
    phone: "+1 555 222 3344",
    status: "Inactive"
  }
];

function FacultyList() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h2>Faculty List</h2>
        <p>View faculty profiles and access their dossiers</p>
      </div>

      {/* MAIN CARD */}
      <div className="card">
        <div className="card-header">
          <h3>All Faculty Members</h3>
          <p className="muted">
            Click on “View Dossier” to see complete faculty profile and documents
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="search-row">
          <FiSearch />
          <input placeholder="Search by Faculty ID, Name or Department..." />
        </div>

        {/* FACULTY TABLE */}
        <table className="table">
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {facultyMock.map((f, i) => (
              <tr key={i}>
                <td>{f.id}</td>
                <td>{f.name}</td>
                <td>{f.department}</td>
                <td>{f.email}</td>
                <td>{f.phone}</td>
                <td>
                  <span
                    className={`badge ${
                      f.status === "Active"
                        ? "badge-active"
                        : "badge-disabled"
                    }`}
                  >
                    {f.status}
                  </span>
                </td>
                <td className="actions">
                  <button
                    className="btn-outline"
                    onClick={() => navigate(`/admin/faculty/${f.id}`)}
                  >
                    <FiEye /> View Dossier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultyList;
