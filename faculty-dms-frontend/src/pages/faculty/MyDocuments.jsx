import "../../styles/faculty.css";
import { FiEye, FiDownload } from "react-icons/fi";


export default function MyDocuments() {
  return (
    <div className="faculty-page">
      <h1>My Documents</h1>
      <p className="subtitle">
        View and download your uploaded documents
      </p>

      <div className="card">
        <div className="card-body">
          <h3>Uploaded Documents</h3>
          <p className="subtitle">
            Documents uploaded through the Profile section
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Category</th>
                <th>Uploaded Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>SSC Marks Memo</td>
                <td>Academic</td>
                <td>2025-11-10</td>
                <td>
                  <span className="badge approved">Approved</span>
                </td>
                <td className="actions">
                  <FiEye />
                  <FiDownload />
                </td>
              </tr>

              <tr>
                <td>B.Sc Degree Certificate</td>
                <td>Academic</td>
                <td>2025-12-01</td>
                <td>
                  <span className="badge pending">Pending</span>
                </td>
                <td className="actions">
                  <FiEye />
                  <FiDownload />
                </td>
              </tr>

              <tr>
                <td>Experience Certificate</td>
                <td>Experience</td>
                <td>2026-01-03</td>
                <td>
                  <span className="badge rejected">Rejected</span>
                </td>
                <td className="actions">
                  <FiEye />
                  <FiDownload />
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="note">
        <b>Note:</b> To upload or update documents, please go to the
        <b> Faculty Profile </b> section.
      </div>
    </div>
  );
}
