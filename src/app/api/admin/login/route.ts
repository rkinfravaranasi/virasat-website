import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const admin = await prisma.adminUser.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!admin || admin.password !== password) {
      return NextResponse.json(
        { error: "Invalid admin credentials." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: { id: admin.id, name: admin.name, email: admin.email, role: admin.role },
    });

    // Set secure HTTP-only cookie
    response.cookies.set("virasat_admin_session", admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Authentication failed." }, { status: 500 });
  }
}
