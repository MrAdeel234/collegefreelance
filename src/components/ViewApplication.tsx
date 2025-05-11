import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Application {
  id: string;
  projectId: string;
  projectTitle: string;
  studentName: string;
  studentEmail: string;
  coverLetter: string;
  relevantExperience: string;
  portfolio: string;
  expectedTimeline: string;
  whyInterested: string;
  availability: string;
  status: 'pending' | 'accepted' | 'rejected';
}

const ViewApplication: React.FC = () => {
  const { applicationId } = useParams<{ applicationId: string }>();
  const navigate = useNavigate();

  // This would typically come from an API call
  const application: Application = {
    id: applicationId || '1',
    projectId: '1',
    projectTitle: 'Website Development',
    studentName: 'Alice Smith',
    studentEmail: 'alice@college.edu',
    coverLetter: 'I have extensive experience in React and Node.js development. I have worked on several full-stack applications and have a strong understanding of modern web development practices. I am particularly interested in this project because it aligns with my expertise in creating responsive and user-friendly web applications.',
    relevantExperience: '3 years of professional web development experience, including building e-commerce platforms and social media applications.',
    portfolio: 'https://portfolio.example.com',
    expectedTimeline: '4-6 weeks',
    whyInterested: 'I am passionate about creating user-friendly web applications and have experience working with similar technologies. This project aligns perfectly with my skills and interests.',
    availability: '20 hours per week, flexible schedule',
    status: 'pending'
  };

  const handleAccept = () => {
    // Here you would typically make an API call to accept the application
    console.log('Accepting application:', applicationId);
    
    // Update the application status to accepted
    application.status = 'accepted';
    
    // Navigate back to dashboard
    navigate('/client-dashboard', { 
      state: { 
        action: 'accept',
        applicationId: application.id,
        projectId: application.projectId,
        studentName: application.studentName
      }
    });
  };

  const handleReject = () => {
    // Here you would typically make an API call to reject the application
    console.log('Rejecting application:', applicationId);
    
    // Update the application status to rejected
    application.status = 'rejected';
    
    // Navigate back to dashboard
    navigate('/client-dashboard', { 
      state: { 
        action: 'reject',
        applicationId: application.id
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Application Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Project: {application.projectTitle}
            </p>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              {/* Personal Information */}
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Applicant Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{application.studentName}</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{application.studentEmail}</dd>
              </div>

              {/* Cover Letter */}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Cover Letter</dt>
                <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                  {application.coverLetter}
                </dd>
              </div>

              {/* Relevant Experience */}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Relevant Experience</dt>
                <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                  {application.relevantExperience}
                </dd>
              </div>

              {/* Portfolio */}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Portfolio</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <a
                    href={application.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {application.portfolio}
                  </a>
                </dd>
              </div>

              {/* Expected Timeline */}
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Expected Timeline</dt>
                <dd className="mt-1 text-sm text-gray-900">{application.expectedTimeline}</dd>
              </div>

              {/* Availability */}
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Availability</dt>
                <dd className="mt-1 text-sm text-gray-900">{application.availability}</dd>
              </div>

              {/* Why Interested */}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Why Interested in this Project</dt>
                <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                  {application.whyInterested}
                </dd>
              </div>
            </dl>
          </div>

          <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleReject}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
              >
                Reject Application
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Accept Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApplication; 