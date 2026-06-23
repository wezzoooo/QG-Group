import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "qb-profile.pdf");
    
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Qraytna_Group_Profile.pdf"',
      },
    });
  } catch (error) {
    console.error("فشل تحميل ملف الـ Profile:", error);
    return new NextResponse("الملف غير موجود حالياً", { status: 404 });
  }
}