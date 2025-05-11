import React from 'react';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About College Freelance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting talented college students with meaningful projects and opportunities
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            College Freelance is dedicated to bridging the gap between academic learning and real-world experience. 
            We provide a platform where students can showcase their skills, gain practical experience, and build their 
            professional network while helping businesses and organizations find talented young professionals.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
              <AcademicCapIcon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Build a professional portfolio with real projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Gain practical experience in your field</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Connect with potential employers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
              <BriefcaseIcon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Access a pool of verified student talent</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Get fresh perspectives and innovative solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-600">Support the next generation of professionals</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Create Profile</h3>
              <p className="text-gray-600">Sign up and create your detailed profile</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <RocketLaunchIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Find Projects</h3>
              <p className="text-gray-600">Browse and apply for relevant projects</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Start Working</h3>
              <p className="text-gray-600">Get hired and begin your project</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@collegefreelance.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 