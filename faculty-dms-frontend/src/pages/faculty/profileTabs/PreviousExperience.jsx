import { FiEye, FiDownload, FiTrash2 } from "react-icons/fi";

export default function PreviousExperience() {
  return (
    <div className="card">
      <div className="card-body">
        <h3>Previous Experience</h3>
        <p className="subtitle">
          Add and manage your work experience
        </p>

        {/* ADD NEW EXPERIENCE */}
        <div className="sub-card">
          <h4>Add New Experience</h4>

          <div className="grid-3">
            <div>
              <label>College / Institution</label>
              <input placeholder="Enter college name" />
            </div>

            <div>
              <label>Designation</label>
              <input placeholder="e.g. Assistant Professor" />
            </div>

            <div>
              <label>From Year</label>
              <input placeholder="2017" />
            </div>

            <div>
              <label>To Year</label>
              <input placeholder="2020" />
            </div>

            <div className="grid-span-3">
              <label>Experience Certificate (PDF)</label>
              <input type="file" />
            </div>
          </div>

          <button className="success-btn">+ Add Experience</button>
        </div>

        {/* WORK EXPERIENCE TABLE */}
        <h4 className="section-title">Work Experience</h4>

        <table className="data-table">
          <thead>
            <tr>
              <th>College / Institution</th>
              <th>Designation</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>ABC College of Technology</td>
              <td>Assistant Professor</td>
              <td>2017 - 2020</td>
              <td className="actions">
                <FiEye />
                <FiDownload />
                <FiTrash2 />
              </td>
            </tr>

            <tr>
              <td>XYZ University</td>
              <td>Associate Professor</td>
              <td>2020 - 2023</td>
              <td className="actions">
                <FiEye />
                <FiDownload />
                <FiTrash2 />
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
