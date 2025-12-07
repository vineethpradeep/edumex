import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddCourse from "./pages/addCourse/AddCourse.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import ViewAllCourses from "./pages/viewAllCourses/ViewAllCourses.jsx";
import ViewCourse from "./pages/viewCourse/ViewCourse.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("admin_token");

  return (
    <Router>
      <Routes>
        <Route
          path="/admin-login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <AdminLogin />}
        />

        <Route
          path="/"
          element={
            isLoggedIn ? <DashboardLayout /> : <Navigate to="/admin-login" />
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="course/:id" element={<ViewCourse />} />
          <Route path="course/:id/edit" element={<AddCourse />} />
          <Route path="view-all-courses" element={<ViewAllCourses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
