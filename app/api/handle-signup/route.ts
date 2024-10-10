import { db } from '@/db';
import { users } from '@/db/schema';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Fetch user details from Clerk API
    const clerkUser = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    }).then((res) => {
      if (!res.ok) {
        console.error('Failed to fetch Clerk user:', res.status, res.statusText);
        throw new Error(`Failed to fetch Clerk user: ${res.statusText}`);
      }
      return res.json();
    });

    if (clerkUser) {
      // Insert user data into NeonDB via Drizzle ORM
      await db.insert(users).values({
        clerkId: clerkUser.id,
        email: clerkUser.email_addresses[0]?.email_address || 'no-email',
        username: clerkUser.username || 'default_username',
      });

      return NextResponse.json({ message: 'User saved to NeonDB', status: 200 });
    } else {
      return NextResponse.json({ message: 'User not found', status: 404 });
    }
  } catch (error) {
    console.error('Error saving user:', (error as Error).message); // Cast error to Error type
    return NextResponse.json({ message: 'Error saving user', error: (error as Error).message }, { status: 500 });
  }
}
