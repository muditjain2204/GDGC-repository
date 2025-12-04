export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  bio: string;
  location: string;
  email: string;
  joinedDate: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export type RoleFilter = 'All' | 'Lead' | 'Co-Lead' | 'Tech Lead' | 'Member' | 'Designer' | 'Marketing';
export type SkillFilter = string;
