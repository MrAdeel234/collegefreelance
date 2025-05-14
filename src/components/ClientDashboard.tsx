import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PlusIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

interface Project {
  project_id: string;
  client_id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string; // Or Date if you prefer working with Date objects
  assigned_to?: string; // Optional if the project might not yet be assigned
  is_completed: boolean;
  created_at: string; // Or Date, depending on your database
  status?: string;
}

interface Application {
  application_id: number;
  project_id: string;
  assigned_at: string;
  project_title: string;
  project_description: string;
  project_budget: number;
  student_id: string;
  student_name: string;
  student_email: string;
}

interface Feedback {
  projectId: string;
  rating: number;
  comment: string;
}

const ClientDashboard: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<
    "projects" | "applications" | "assigned"
  >("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [newStatus, setNewStatus] = useState<string>("");
  const [feedback, setFeedback] = useState<Feedback>({
    projectId: "",
    rating: 5,
    comment: "",
  });
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const statusDropdownRef = React.useRef<HTMLDivElement>(null);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const clientId = user?.client_id || "";

  const [projects, setProjects] = useState<Project[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [assignedProjects, setAssignedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const acceptApplication = async (applicationId: number) => {
    try {
      const response = await fetch(`http://localhost:6001/applications/accept-application/${applicationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Application Accepted!");
        // Optionally, you can refresh the page or update your UI here
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error accepting application:", error);
      alert("Error accepting application.");
    }
  };

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch(
          `http://localhost:6001/projects/client/${clientId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        // Check if we received data and set the three states
        if (data.projects && data.applications && data.assignedProjects) {
          setProjects(data.projects);
          setApplications(data.applications); // Set applications with student details
          setAssignedProjects(data.assignedProjects); // Set assigned projects
        }
      } catch (error) {
        setError("Failed to load data.");
        console.error("Error fetching client data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [clientId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "open":
        return <ClockIcon className="h-5 w-5" />;
      case "in-progress":
        return <CheckCircleIcon className="h-5 w-5" />;
      case "completed":
        return <CheckCircleIcon className="h-5 w-5" />;
      case "cancelled":
        return <XCircleIcon className="h-5 w-5" />;
      default:
        return <ClockIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Client Dashboard
          </h1>
          <Link
            to="/post-project"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Post New Project
          </Link>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6 sm:mb-8">
          <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("projects")}
              className={`${
                activeTab === "projects"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">My Projects</span>
              <span className="sm:hidden">Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`${
                activeTab === "applications"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Applications</span>
              <span className="sm:hidden">Apps</span>
            </button>
            <button
              onClick={() => setActiveTab("assigned")}
              className={`${
                activeTab === "assigned"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Assigned Projects</span>
              <span className="sm:hidden">Assigned</span>
            </button>
          </nav>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {[...projects].reverse().map((project) => (
                <li key={project.project_id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2 sm:line-clamp-none">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            project?.status ?? "open"
                          )}`}
                        >
                          {getStatusIcon(project?.status)}
                          <span className="ml-1">{project?.status}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-6">
                        <p className="flex items-center text-sm text-gray-500">
                          Budget: ${project.budget}
                        </p>
                        <p className="flex items-center text-sm text-gray-500">
                          Deadline: {project.deadline}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {applications?.map((application) => (
                <li key={application?.application_id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                          {application.project_title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {application.project_description}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Budget: ${application.project_budget}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Applicant: {application.student_name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Email: {application.student_email}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center space-x-4">
                        <Link
                          to="#"
                          onClick={() =>
                            acceptApplication(application.application_id)
                          }
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Accept Application
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Assigned Projects Tab */}
        {activeTab === "assigned" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {[...projects]
                .filter((project) => project.assigned_to)
                .reverse()
                .map((project) => (
                  <li key={project.project_id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-medium text-gray-900">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Assigned to: {project.assigned_to}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              project?.status ?? "open"
                            )}`}
                          >
                            {getStatusIcon(project?.status)}
                            <span className="ml-1">{project?.status}</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.status === "completed" && (
                          <button
                            // onClick={() => handleFeedback(project)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                          >
                            Provide Feedback
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Status Update Modal */}
        {showStatusModal && selectedProject && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Project Status
                </h3>
                <button
                  onClick={() => {
                    setShowStatusModal(false);
                    setSelectedProject(null);
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Status
                </label>
                <div className="custom-dropdown" ref={statusDropdownRef}>
                  <button
                    type="button"
                    className="custom-dropdown-button"
                    onClick={() =>
                      setIsStatusDropdownOpen(!isStatusDropdownOpen)
                    }
                  >
                    <span>
                      {newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        isStatusDropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isStatusDropdownOpen && (
                    <div className="custom-dropdown-menu">
                      <div
                        className={`custom-dropdown-option ${
                          newStatus === "open" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setNewStatus("open");
                          setIsStatusDropdownOpen(false);
                        }}
                      >
                        Open
                      </div>
                      <div
                        className={`custom-dropdown-option ${
                          newStatus === "in-progress" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setNewStatus("in-progress");
                          setIsStatusDropdownOpen(false);
                        }}
                      >
                        In Progress
                      </div>
                      <div
                        className={`custom-dropdown-option ${
                          newStatus === "completed" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setNewStatus("completed");
                          setIsStatusDropdownOpen(false);
                        }}
                      >
                        Completed
                      </div>
                      <div
                        className={`custom-dropdown-option ${
                          newStatus === "cancelled" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setNewStatus("cancelled");
                          setIsStatusDropdownOpen(false);
                        }}
                      >
                        Cancelled
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowStatusModal(false);
                    setSelectedProject(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  // onClick={submitStatusUpdate}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feedback Modal */}
        {showFeedbackModal && selectedProject && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Provide Feedback
                </h3>
                <button
                  onClick={() => setShowFeedbackModal(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate this project?
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setFeedback({ ...feedback, rating })}
                      className={`p-2 rounded-full transform transition-all duration-200 hover:scale-110 ${
                        rating <= feedback.rating
                          ? "bg-yellow-400 text-white shadow-lg"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      <span className="text-xl">★</span>
                    </button>
                  ))}
                </div>
                <p className="text-center mt-2 text-sm text-gray-500">
                  {feedback.rating === 1 && "Poor"}
                  {feedback.rating === 2 && "Fair"}
                  {feedback.rating === 3 && "Good"}
                  {feedback.rating === 4 && "Very Good"}
                  {feedback.rating === 5 && "Excellent"}
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Comments
                </label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) =>
                    setFeedback({ ...feedback, comment: e.target.value })
                  }
                  rows={4}
                  className="block w-full px-3 py-2 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                  placeholder="Share your experience working with the student..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowFeedbackModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  // onClick={submitFeedback}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
