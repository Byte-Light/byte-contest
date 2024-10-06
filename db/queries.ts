// db/queries.ts
import { db } from '@/db/index';
import { contests } from '@/db/schema';

export const getContests = async () => {
  try {
    const allContests = await db.select().from(contests);
    console.log('Fetched contests:', allContests); // Log results
    return allContests;
  } catch (error) {
    console.error('Error fetching contests:', error);
    return [];
  }
};