import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import MyDocuments from "./pages/faculty/MyDocuments";
import Profile from "./pages/faculty/Profile";
import FacultyDossier from "./pages/admin/FacultyDossier";
import Dashboard from "./pages/admin/Dashboard";
import FacultyList from "./pages/admin/FacultyList";
import AllDocuments from "./pages/admin/AllDocuments";

function App() {
  const role = "admin"; // change to "admin" to test admin routes

  return (
    <BrowserRouter>
      <Navbar role={role} />

      <div className="container" style={{ marginTop: "30px" }}>
        <Routes>
          {/* Faculty Routes */}
          {role === "faculty" && (
            <>
              <Route path="/faculty/documents" element={<MyDocuments />} />
              <Route path="/faculty/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/faculty/documents" />} />
            </>
          )}

          {/* Admin Routes */}
          {role === "admin" && (
            <>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/faculty" element={<FacultyList />} />
              <Route path="/admin/documents" element={<AllDocuments />} />
              <Route path="*" element={<Navigate to="/admin/dashboard" />} />

              <Route path="/admin/faculty/:facultyId" element={<FacultyDossier />} />

            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
