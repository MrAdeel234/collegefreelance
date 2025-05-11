import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentDashboard from './components/StudentDashboard';
import ClientDashboard from './components/ClientDashboard';
import PostProject from './components/PostProject';
import EditProject from './components/EditProject';
import Projects from './components/Projects';
import Applications from './components/Applications';
import StudentProfile from './components/StudentProfile';
import ManageProjects from './components/ManageProjects';
import ProjectApplicationForm from './components/ProjectApplicationForm';
import ViewApplication from './components/ViewApplication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'student' | 'client' | null>(null);

  const handleLogin = (type: 'student' | 'client') => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isLoggedIn={isLoggedIn} userType={userType} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
          
          {/* Protected Routes */}
          <Route 
            path="/student-dashboard" 
            element={isLoggedIn && userType === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/client-dashboard" 
            element={isLoggedIn && userType === 'client' ? <ClientDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/post-project" 
            element={isLoggedIn && userType === 'client' ? <PostProject /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/edit-project/:projectId" 
            element={isLoggedIn && userType === 'client' ? <EditProject /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/projects" 
            element={isLoggedIn && userType === 'student' ? <Projects /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/applications" 
            element={isLoggedIn && userType === 'student' ? <Applications /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/student-profile" 
            element={isLoggedIn && userType === 'student' ? <StudentProfile /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/projects/:projectId/apply" 
            element={isLoggedIn && userType === 'student' ? <ProjectApplicationForm /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/manage-projects" 
            element={isLoggedIn && userType === 'client' ? <ManageProjects /> : <Navigate to="/login" />} 
          />
          <Route
            path="/apply/:projectId"
            element={isLoggedIn && userType === 'student' ? <ProjectApplicationForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/view-application/:applicationId"
            element={isLoggedIn && userType === 'client' ? <ViewApplication /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
