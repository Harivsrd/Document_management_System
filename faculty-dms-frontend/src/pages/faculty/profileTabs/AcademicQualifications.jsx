import { FiEye, FiDownload, FiTrash2 } from "react-icons/fi";

export default function AcademicQualifications() {
  return (
    <div className="card">
      <div className="card-body">
        <h3>Academic Qualifications</h3>
        <p className="subtitle">
          Add and manage your educational certificates
        </p>

        {/* ADD NEW QUALIFICATION */}
        <div className="sub-card">
          <h4>Add New Qualification</h4>

          <div className="grid-3">
            <div>
              <label>Qualification</label>
              <select>
                <option>Select...</option>
                <option>SSC</option>
                <option>Inter</option>
                <option>UG - B.Sc</option>
                <option>PG - M.Sc</option>
                <option>PhD</option>
              </select>
            </div>

            <div>
              <label>University / Board</label>
              <input placeholder="Enter university name" />
            </div>

            <div>
              <label>From Year</label>
              <input placeholder="2010" />
            </div>

            <div>
              <label>To Year</label>
              <input placeholder="2014" />
            </div>

            <div>
              <label>Certificate Type</label>
              <select>
                <option>Select...</option>
                <option>Degree</option>
                <option>Marks Memo</option>
              </select>
            </div>

            <div>
              <label>Upload Certificate (PDF)</label>
              <input type="file" />
            </div>
          </div>

          <button className="success-btn">+ Add Qualification</button>
        </div>

        {/* UPLOADED QUALIFICATIONS */}
        <h4 className="section-title">Uploaded Qualifications</h4>

        <table className="data-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>University / Board</th>
              <th>Duration</th>
              <th>Certificate Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SSC</td>
              <td>State Board</td>
              <td>2005 - 2006</td>
              <td>Marks Memo</td>
              <td className="actions">
                <FiEye title="View" />
                <FiDownload title="Download" />
                <FiTrash2 title="Delete" />
              </td>

            </tr>

            <tr>
              <td>UG - B.Sc</td>
              <td>Springfield University</td>
              <td>2008 - 2011</td>
              <td>Degree</td>
              <td className="actions">
                <FiEye title="View" />
                <FiDownload title="Download" />
                <FiTrash2 title="Delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
