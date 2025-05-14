import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface StudentProfile {
  name: string;
  email: string;
  bio: string;
}

const StudentProfile: React.FC = () => {
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('user');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  if (!profile) {
    return (
      <div className="text-center py-10 text-gray-600">
        No profile data found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/student-dashboard" className="text-blue-600 hover:underline flex items-center mb-6">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
          <div className="flex items-center text-gray-600">
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            {profile.email}
          </div>
          <p className="text-gray-700 mt-2">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
