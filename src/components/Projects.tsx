import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  skills: string[];
}

const Projects: React.FC = () => {
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
        <Link
          to="/student-dashboard"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Available Projects</h1>
        <p className="mt-2 text-gray-600">Browse and apply for projects that match your skills</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {availableProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Required Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
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
                <span className="font-medium">Deadline:</span> {new Date(project.deadline).toLocaleDateString()}
              </div>
            </div>

            <Link
              to={`/projects/${project.id}/apply`}
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 