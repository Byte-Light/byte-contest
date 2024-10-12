import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Fetch the user with the provided email
    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Sign-in successful!' }, { status: 200 });
  } catch (error: any) {
    console.error('Sign-in failed:', error);
    return NextResponse.json({ message: 'Sign-in failed. Please try again.' }, { status: 500 });
  }
}
