function Login() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="card" style={{ width: "400px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Sign In</h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#6b7280" }}>
          Enter your credentials to access the system
        </p>

        <label>Faculty ID / Admin ID</label>
        <input type="text" placeholder="Enter your ID" style={inputStyle} />

        <label style={{ marginTop: "10px" }}>Password</label>
        <input type="password" placeholder="Enter your password" style={inputStyle} />

        <div className="card" style={{ marginTop: "15px", background: "#eff6ff" }}>
          <p><b>Demo Credentials:</b></p>
          <p>Faculty: FAC001 / faculty123</p>
          <p>Admin: admin / admin123</p>
        </div>

        <button className="btn btn-primary" style={{ width: "100%", marginTop: "15px" }}>
          Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #d1d5db"
};

export default Login;
