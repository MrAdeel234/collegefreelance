export interface Student {
  id: string;
  name: string;
  email: string;
  skills: string[];
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  budget: number;
  deadline: string;
  status: 'open' | 'assigned' | 'completed';
  assignedStudentId?: string;
}

export interface Application {
  id: string;
  projectId: string;
  studentId: string;
  coverLetter: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Feedback {
  id: string;
  projectId: string;
  studentId: string;
  rating: number;
  comment: string;
} 