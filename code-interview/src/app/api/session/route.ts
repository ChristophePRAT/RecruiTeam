import { NextResponse } from "next/server";
import { resolveRealtimeModel } from "@/app/voice/lib/realtimeModel";

const REALTIME_MODEL = resolveRealtimeModel(
  process.env.REALTIME_MODEL || process.env.NEXT_PUBLIC_REALTIME_MODEL,
);

async function createSession() {
  try {
    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: REALTIME_MODEL,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating realtime session", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return createSession();
}

export async function POST() {
  return createSession();
}
