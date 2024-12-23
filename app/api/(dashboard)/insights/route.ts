import { dummyWeeklyData } from "../../../../lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ insights: dummyWeeklyData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong, please try again!" },
      { status: 500 }
    );
  }
}
