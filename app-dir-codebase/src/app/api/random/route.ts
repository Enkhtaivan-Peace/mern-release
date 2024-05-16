import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    random: Math.floor(Math.random() * 1000),
  });
}
