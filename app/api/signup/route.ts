// app/api/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Insert user data into the 'users' table
    await db.insert(users).values({ name, email, password });

    return NextResponse.json({ message: 'Signup successful!' }, { status: 201 });
  } catch (error: any) {
    console.error('Signup failed:', error);

    // Handle any DB errors or constraints violations
    const message =
      error.message.includes('unique') ? 'Email already exists.' : 'Signup failed. Please try again.';

    return NextResponse.json({ message }, { status: 500 });
  }
}
