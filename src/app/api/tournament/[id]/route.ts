
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name, location, locationLink, Date: dateString, ClosingDate } = await req.json();

    if (!id || !name || !location || !locationLink || !dateString) {
        return NextResponse.json({ error: "Missing required fields", status: 400 });
    }

    try {
        const updatedTournament = await prisma.tournament.update({
            where: { id },
            data: {
                name,
                location,
                locationLink,
                Date: new Date(dateString),
                ClosingDate: new Date(ClosingDate),
            },
        });
        return NextResponse.json(updatedTournament, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error updating tournament", status: 500 });
    }
}