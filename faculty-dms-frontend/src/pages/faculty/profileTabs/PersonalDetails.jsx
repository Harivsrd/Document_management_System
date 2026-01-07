export default function PersonalDetails() {
  return (
    <div className="card">
      <h3>Personal Information</h3>

      <div className="grid-2">
        <div>
          <label>Faculty ID</label>
          <input value="FAC001" disabled />
        </div>

        <div>
          <label>Full Name</label>
          <input value="Dr. John Smith" />
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" value="1985-06-15" />
        </div>

        <div>
          <label>Gender</label>
          <select>
            <option>==Select==</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label>Email</label>
          <input value="john.smith@college.edu" />
        </div>

        <div>
          <label>Phone</label>
          <input placeholder="+91 XXXXX-XXXXX" value="" />
        </div>

        <div>
          <label>Department</label>
          <select>
            <option>Computer Science Engineering</option>
            <option>Artificial Inteligence and Machine Learning</option>
            <option>Electronics and Communication Engineering</option>
            <option>Electrical and Electronics Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
          </select>
        </div>
      </div>

      <button className="primary-btn">Save Changes</button>
    </div>
  );
}
