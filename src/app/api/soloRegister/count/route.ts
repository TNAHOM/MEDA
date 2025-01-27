
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const count = await prisma.registerSolo.count();
        return NextResponse.json({ count }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error fetching solo registration count", status: 500 });
    }
}