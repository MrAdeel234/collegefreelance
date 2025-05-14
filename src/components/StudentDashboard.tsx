import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ClipboardDocumentListIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  skills: string[];
}

const StudentDashboard: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          to="/projects"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Available Projects</h2>
              <p className="text-gray-600">Browse and apply for projects</p>
            </div>
          </div>
        </Link>

        <Link
          to="/my-projects"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">My Projects</h2>
              <p className="text-gray-600">Track your project applications</p>
            </div>
          </div>
        </Link>

        <Link
          to="/student-profile"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <UserCircleIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">My Profile</h2>
              <p className="text-gray-600">View and edit your profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard; 