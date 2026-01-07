import "../../styles/dossier.css";
import {
  FiUser,
  FiBookOpen,
  FiBriefcase,
  FiEye,
  FiDownload
} from "react-icons/fi";

function FacultyDossier() {
  return (
    <div className="dossier-container">

      {/* TOP BLUE HEADER */}
      <div className="dossier-header">
        <div>
          <h2>Dr. John Smith</h2>
          <p>FAC001 • Computer Science</p>
        </div>
        <button className="dossier-btn">Faculty Dossier</button>
      </div>

      {/* BASIC INFO CARD */}
      <div className="card info-grid">
        <div>
          <label>Email</label>
          <p>john.smith@college.edu</p>
        </div>
        <div>
          <label>Phone</label>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <label>Date of Birth</label>
          <p>June 15, 1985</p>
        </div>
        <div>
          <label>Department</label>
          <p>Computer Science</p>
        </div>
        <div>
          <label>Joining Date</label>
          <p>August 1, 2023</p>
        </div>
      </div>

      {/* ACADEMIC QUALIFICATIONS */}
      <div className="card">
        <h3><FiBookOpen /> Academic Qualifications</h3>
        <p className="subtitle">Educational certificates and credentials</p>

        <table className="table">
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
            {[
              ["SSC", "State Board", "2005-2006", "Marks Memo"],
              ["Inter", "State Board", "2006-2008", "Marks Memo"],
              ["B.Sc (Computer Science)", "Springfield University", "2008-2011", "Degree"],
              ["M.Sc (Computer Science)", "MIT", "2011-2013", "Degree"],
              ["PhD (Artificial Intelligence)", "Stanford University", "2013-2017", "Degree"]
            ].map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td className="actions">
                  <FiEye title="View" />
                  <FiDownload title="Download" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PREVIOUS EXPERIENCE */}
      <div className="card">
        <h3><FiBriefcase /> Previous Experience</h3>
        <p className="subtitle">Work history and experience certificates</p>

        <table className="table">
          <thead>
            <tr>
              <th>College / Institution</th>
              <th>Designation</th>
              <th>Duration</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC College of Technology</td>
              <td>Assistant Professor</td>
              <td>2017–2020</td>
              <td className="actions">
                <FiDownload title="Download" />
              </td>
            </tr>
            <tr>
              <td>XYZ University</td>
              <td>Associate Professor</td>
              <td>2020–2023</td>
              <td className="actions">
                <FiDownload title="Download" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NOTE */}
      <div className="note-box">
        <b>Note:</b> All certificates can be viewed and downloaded for verification purposes.
        Contact the faculty member directly for any additional information.
      </div>

    </div>
  );
}

export default FacultyDossier;
