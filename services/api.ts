import { Member } from '../types';
import { MOCK_MEMBERS } from '../constants';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MemberService = {
  // GET /members
  getAll: async (): Promise<Member[]> => {
    await delay(800); // Simulate network latency
    // Randomly fail sometimes to test error handling? No, let's keep it stable for the demo.
    return [...MOCK_MEMBERS];
  },

  // GET /members/:id
  getById: async (id: string): Promise<Member | undefined> => {
    await delay(500);
    return MOCK_MEMBERS.find(m => m.id === id);
  }
};
