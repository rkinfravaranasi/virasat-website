import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status, note, author = "Admin" } = await req.json();

    const updateData: any = {};
    if (status) updateData.status = status;

    if (note && note.trim()) {
      updateData.notes = {
        create: {
          note: note.trim(),
          author,
        },
      };
    }

    const updatedLead = await prisma.enquiry.update({
      where: { id },
      data: updateData,
      include: {
        notes: { orderBy: { createdAt: "desc" } },
      },
    });

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}
