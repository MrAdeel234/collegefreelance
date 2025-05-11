import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  RocketLaunchIcon, 
  CodeBracketIcon, 
  LightBulbIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Screen Background */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8">
            College Freelance
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Where talented college students meet real-world projects. 
            Build your portfolio, gain experience, and launch your career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 transform transition hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium rounded-full text-white border-2 border-white hover:bg-white hover:text-blue-900 transform transition hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRightIcon className="h-8 w-8 text-white rotate-90" />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition hover:scale-105">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-8">
                <UserGroupIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Students</h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Create a detailed profile showcasing your skills and experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Browse and apply for projects that match your expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Build your portfolio with real-world projects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition hover:scale-105">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-8">
                <BriefcaseIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Clients</h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Post your project requirements and budget</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Review applications from qualified students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Collaborate with talented students on your projects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition hover:scale-105">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-8">
                <RocketLaunchIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Sign up as a student or client</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Complete your profile with relevant information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Start connecting and collaborating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition hover:scale-105">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-8">
                <CodeBracketIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Verified Students</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                All students are verified through their educational institutions, ensuring you work with qualified and talented individuals.
              </p>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Educational verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Skill assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Portfolio review</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition hover:scale-105">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-8">
                <LightBulbIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Work</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Projects are reviewed and monitored to ensure high-quality deliverables and successful collaborations.
              </p>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Project milestones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join our community of students and clients today. Start your journey towards successful collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 transform transition hover:scale-105 shadow-lg"
            >
              Sign Up Now
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium rounded-full text-white border-2 border-white hover:bg-white hover:text-blue-900 transform transition hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 