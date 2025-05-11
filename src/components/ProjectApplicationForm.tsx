import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  skills: string[];
}

interface ApplicationFormData {
  coverLetter: string;
  relevantExperience: string;
  portfolio: string;
  expectedTimeline: string;
  whyInterested: string;
  availability: string;
}

const ProjectApplicationForm: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This would typically come from an API call
  const project: Project = {
    id: projectId || '1',
    title: 'Website Development for Local Restaurant',
    description: 'Looking for a student to develop a responsive website for a local restaurant.',
    budget: 500,
    deadline: '2024-05-15',
    skills: ['React', 'Node.js', 'MongoDB', 'UI/UX Design']
  };

  const [formData, setFormData] = useState<ApplicationFormData>({
    coverLetter: '',
    relevantExperience: '',
    portfolio: '',
    expectedTimeline: '',
    whyInterested: '',
    availability: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to submit the application
      console.log('Submitting application:', { projectId, ...formData });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate back to projects page after successful submission
      navigate('/projects');
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-white" />
              <h3 className="ml-3 text-xl font-semibold text-white">
                Apply for {project.title}
              </h3>
            </div>
          </div>

          <div className="px-6 py-8">
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Project Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Budget:</span>
                  <span className="ml-2 font-medium text-gray-900">${project.budget}</span>
                </div>
                <div>
                  <span className="text-gray-600">Deadline:</span>
                  <span className="ml-2 font-medium text-gray-900">{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Required Skills:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
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
              </div>
            </div>
          
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      required
                      className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                      placeholder="Explain why you're the best fit for this project..."
                      value={formData.coverLetter}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="relevantExperience"
                      name="relevantExperience"
                      rows={3}
                      required
                      className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                      placeholder="Describe your relevant experience..."
                      value={formData.relevantExperience}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                    Portfolio URL
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      required
                      className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                      placeholder="https://your-portfolio.com"
                      value={formData.portfolio}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="expectedTimeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Timeline
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="expectedTimeline"
                        name="expectedTimeline"
                        required
                        className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                        placeholder="e.g., 2-3 weeks"
                        value={formData.expectedTimeline}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Availability
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="availability"
                        name="availability"
                        required
                        className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                        placeholder="e.g., 20 hours per week"
                        value={formData.availability}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="whyInterested" className="block text-sm font-medium text-gray-700 mb-1">
                    Why are you interested in this project?
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="whyInterested"
                      name="whyInterested"
                      rows={3}
                      required
                      className="block w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:border-gray-300"
                      placeholder="Tell us why you're interested in this project..."
                      value={formData.whyInterested}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 border-2 border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectApplicationForm; 