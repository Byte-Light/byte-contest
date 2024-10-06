// app/api/contest/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db/index';
import { contests } from '@/db/schema';

export async function POST(req: NextRequest) {
  const { category, title, description, prize } = await req.json();

  try {
    await db.insert(contests).values({
      category,
      title,
      description,
      prize,
    });

    return NextResponse.json({ message: 'Contest created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error inserting contest data:', error);
    return NextResponse.json({ message: 'Error creating contest' }, { status: 500 });
  }
}
