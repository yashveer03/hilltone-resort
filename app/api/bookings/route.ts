import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const booking = await Booking.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Booking saved successfully",
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("BOOKING_POST_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save booking",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const bookings = await Booking.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("BOOKING_GET_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}