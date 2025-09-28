import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { code, percentage } = await request.json();

  console.log('Received submission:');
  console.log('Code:', code);
  console.log('Percentage:', percentage);

  return NextResponse.json({ message: 'Submission received' });
}
