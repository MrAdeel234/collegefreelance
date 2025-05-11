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
  // Dummy projects data
  const availableProjects: Project[] = [
    {
      id: '1',
      title: 'Website Development for Local Restaurant',
      description: 'Looking for a student to develop a responsive website for a local restaurant. The website should include menu, reservation system, and contact information.',
      budget: 500,
      deadline: '2024-05-15',
      skills: ['React', 'Node.js', 'MongoDB', 'UI/UX Design']
    },
    {
      id: '2',
      title: 'Mobile App for Campus Events',
      description: 'Need a student to create a mobile app that helps students discover and track campus events. Features should include event calendar, notifications, and social sharing.',
      budget: 800,
      deadline: '2024-06-01',
      skills: ['React Native', 'Firebase', 'JavaScript', 'Mobile Development']
    }
  ];

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
          to="/applications"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">My Applications</h2>
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

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>New project application submitted</span>
              <span className="ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Profile updated</span>
              <span className="ml-auto">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 