
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const tournaments = await prisma.tournament.findMany({
            select: {
                id: true,
                name: true,
                _count: {
                    select: { registerSolo: true },
                },
            },
        });
        return NextResponse.json(tournaments, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error fetching solo registration counts", status: 500 });
    }
}