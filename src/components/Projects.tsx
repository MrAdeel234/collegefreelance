import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BriefcaseIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Project {
  project_id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  skills: string[]; // Ensures skills is always an array
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [studentId, setStudentId] = useState(""); // Assume you have the student ID available somehow

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`http://localhost:6001/projects`);
        setProjects(res.data); // Directly set the fetched data
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Function to handle apply click
  const handleApply = async (projectId: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const studentId = user.student_id;
    if (!studentId) {
      alert("Student ID is required to apply.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:6001/applications", {
        project_id: projectId,
        student_id: studentId,
      });

      if (res.status === 201) {
        alert("You have successfully applied for the project!");
      } else {
        alert("Failed to apply. Please try again.");
      }
    } catch (err) {
      console.error("Error applying for the project:", err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link
          to="/student-dashboard"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Available Projects</h1>
        <p className="mt-2 text-gray-600">
          Browse and apply for projects that match your skills
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading projects...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : projects.length === 0 ? (
        <div className="text-center text-gray-500">
          No projects available right now.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.project_id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Required Skills:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {/* Check if skills is an array before mapping */}
                  {Array.isArray(project.skills) &&
                    project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Budget:</span> ${project.budget}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Deadline:</span>{" "}
                  {new Date(project.deadline).toLocaleDateString()}
                </div>
              </div>

              <button
                onClick={() => handleApply(project.project_id)}
                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <BriefcaseIcon className="h-5 w-5 mr-2" />
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
