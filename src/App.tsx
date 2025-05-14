import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentDashboard from "./components/StudentDashboard";
import ClientDashboard from "./components/ClientDashboard";
import PostProject from "./components/PostProject";
import EditProject from "./components/EditProject";
import Projects from "./components/Projects";
import Applications from "./components/Applications";
import StudentProfile from "./components/StudentProfile";
import ManageProjects from "./components/ManageProjects";
import ProjectApplicationForm from "./components/ProjectApplicationForm";
import ViewApplication from "./components/ViewApplication";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Non-Protected Routes */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/edit-project/:projectId" element={<EditProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-projects" element={<Applications />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route
          path="/projects/:projectId/apply"
          element={<ProjectApplicationForm />}
        />
        <Route path="/manage-projects" element={<ManageProjects />} />
        <Route path="/apply/:projectId" element={<ProjectApplicationForm />} />
        <Route
          path="/view-application/:applicationId"
          element={<ViewApplication />}
        />
      </Routes>
    </div>
  );
}

export default App;
