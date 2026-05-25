import { NextRequest, NextResponse } from "next/server";

const REEL_PASSWORD = process.env.REEL_PASSWORD;

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    console.log("ENV PASSWORD:", REEL_PASSWORD);
    console.log("INPUT PASSWORD:", password);

    if (!REEL_PASSWORD) {
      console.error("REEL_PASSWORD environment variable is not set.");
      return NextResponse.json(
        { error: "Server misconfiguration." },
        { status: 500 }
      );
    }

    if (typeof password !== "string" || password.trim() === "") {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    const isValid = password === REEL_PASSWORD;

    return NextResponse.json({ authorized: isValid }, { status: 200 });

  } catch {
    return NextResponse.json(
      { error: "Bad request." },
      { status: 400 }
    );
  }
}