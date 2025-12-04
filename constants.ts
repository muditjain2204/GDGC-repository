import { Member } from './types';

// Using a high-quality professional avatar for all members as requested.
// (The provided link was a redirect page, so a direct image link is used here to ensuring rendering)
const SHARED_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

export const MOCK_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'mudit jain',
    role: 'Lead',
    avatar: SHARED_AVATAR,
    skills: ['Leadership', 'Public Speaking', 'React'],
    bio: 'Passionate about building communities and tech. Leading the GDGC chapter to new heights with innovative events and workshops.',
    location: 'Campus Center',
    email: 'mudit@gdgc.example.com',
    joinedDate: '2023-01-15',
    socials: { twitter: '@alex', linkedin: 'in/alex' }
  },
  {
    id: '2',
    name: 'nakul sharma',
    role: 'Tech Lead',
    avatar: SHARED_AVATAR,
    skills: ['Python', 'AI/ML', 'TensorFlow'],
    bio: 'AI enthusiast and Python guru. I love teaching others how to build intelligent systems and deploy models.',
    location: 'Engineering Lab',
    email: 'nakul@gdgc.example.com',
    joinedDate: '2023-02-10',
    socials: { github: 'samlee', linkedin: 'in/samlee' }
  },
  {
    id: '3',
    name: 'tejas',
    role: 'Designer',
    avatar: SHARED_AVATAR,
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    bio: 'Designing experiences that matter. I bridge the gap between aesthetics and functionality in our projects.',
    location: 'Remote',
    email: 'tejas@gdgc.example.com',
    joinedDate: '2023-03-05',
    socials: { linkedin: 'in/jordanchen' }
  },
  {
    id: '4',
    name: 'aditya',
    role: 'Member',
    avatar: SHARED_AVATAR,
    skills: ['JavaScript', 'HTML/CSS', 'Web Dev'],
    bio: 'Full stack developer in the making. Eager to learn and contribute to open source projects within the club.',
    location: 'Library',
    email: 'aditya@gdgc.example.com',
    joinedDate: '2023-04-20',
  },
  {
    id: '5',
    name: 'aagam jain',
    role: 'Marketing',
    avatar: SHARED_AVATAR,
    skills: ['Social Media', 'Content Creation', 'SEO'],
    bio: 'Storyteller for the tech generation. I make sure everyone knows about the amazing things GDGC is doing.',
    location: 'Student Union',
    email: 'aagam@gdgc.example.com',
    joinedDate: '2023-05-12',
    socials: { twitter: '@morgan_mkt' }
  },
  {
    id: '6',
    name: 'aryan jain',
    role: 'Co-Lead',
    avatar: SHARED_AVATAR,
    skills: ['Management', 'Event Planning', 'Node.js'],
    bio: 'Organizing chaos into productive hackathons. Co-leading the team to ensure every member feels valued.',
    location: 'Campus Center',
    email: 'aryan@gdgc.example.com',
    joinedDate: '2023-01-20',
  },
  {
    id: '7',
    name: 'sanyam jain',
    role: 'Tech Lead',
    avatar: SHARED_AVATAR,
    skills: ['Flutter', 'Mobile Dev', 'Dart'],
    bio: 'Mobile development wizard. Teaching the next generation of app developers using Flutter and Dart.',
    location: 'Remote',
    email: 'sanyam@gdgc.example.com',
    joinedDate: '2023-06-01',
    socials: { github: 'jamie_dev' }
  },
  {
    id: '8',
    name: 'akshat',
    role: 'Member',
    avatar: SHARED_AVATAR,
    skills: ['Cloud', 'GCP', 'DevOps'],
    bio: 'Cloud computing enthusiast. Exploring the vast possibilities of Google Cloud Platform.',
    location: 'Engineering Lab',
    email: 'akshat@gdgc.example.com',
    joinedDate: '2023-07-15',
  }
];

export const ROLES = ['All', 'Lead', 'Co-Lead', 'Tech Lead', 'Designer', 'Marketing', 'Member'];
export const LOCATIONS = ['All', 'Campus Center', 'Engineering Lab', 'Remote', 'Library', 'Student Union'];