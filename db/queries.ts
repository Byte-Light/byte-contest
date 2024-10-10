// db/queries.ts
import { db } from '@/db/index';
import { contests } from '@/db/schema';

export const getContests = async () => {
  try {
    const allContests = await db.select().from(contests);
    return allContests;
  } catch (error) {
    return [];
  }
};