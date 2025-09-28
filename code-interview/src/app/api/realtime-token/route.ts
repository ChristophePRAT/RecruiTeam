import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    console.log("IJSDPOIASJFPOIJE");
    return NextResponse.json({ msg: "hello" });
}

export async function POST(request: NextRequest) {
    console.log("POSTED TO here");
    try {
        const response = await fetch(
            "https://api.openai.com/v1/realtime/client_secrets",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session: {
                        type: "realtime",
                        model: "gpt-realtime",
                    },
                }),
            },
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "Failed to create client secret",
            );
        }

        return NextResponse.json({
            clientSecret: data.client_secret.value,
        });
    } catch (error) {
        console.error("Error creating realtime token:", error);
        return NextResponse.json(
            { error: "Failed to create realtime token" },
            { status: 500 },
        );
    }
}
