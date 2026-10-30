import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Indian 10-digit mobile number validation (with optional +91 or 0 prefix)
const INDIAN_PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;

// Standard email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      projectId,
      interestedProjectName,
      propertyType,
      budgetRange,
      preferredConfiguration,
      enquiryType = "GENERAL",
      message,
      leadSource = "WEBSITE",
      scheduledVisitDate,
      honeypot, // Spam honeypot: should always be empty
    } = body;

    // 1. Spam honeypot detection
    if (honeypot) {
      console.warn("Spam submission prevented via honeypot field.");
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 2. Validate required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || !INDIAN_PHONE_REGEX.test(phone.replace(/\s+/g, ""))) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Save to database
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        projectId: projectId || null,
        interestedProjectName: interestedProjectName || null,
        propertyType: propertyType || null,
        budgetRange: budgetRange || null,
        preferredConfiguration: preferredConfiguration || null,
        enquiryType,
        message: message ? message.trim() : null,
        leadSource,
        scheduledVisitDate: scheduledVisitDate ? new Date(scheduledVisitDate) : null,
        status: "NEW",
        ipAddress: req.headers.get("x-forwarded-for") || "local",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest. A Virasat relationship manager will connect with you shortly.",
        enquiryId: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating enquiry lead:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please try again or call our concierge." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // For admin/lead listing
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const projectId = searchParams.get("projectId");
    const search = searchParams.get("search");

    const where: any = {};
    if (status && status !== "ALL") where.status = status;
    if (projectId && projectId !== "ALL") where.projectId = projectId;
    if (search) {
      where.OR = [
        { fullName: { contains: search } },
        { phone: { contains: search } },
        { email: { contains: search } },
        { interestedProjectName: { contains: search } },
      ];
    }

    const leads = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        project: {
          select: { title: true, slug: true, propertyType: true },
        },
        notes: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json({ leads, count: leads.length });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
