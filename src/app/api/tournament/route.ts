import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { name, location, locationLink, date } = await req.json();
    if (!name || !location || !locationLink || !date) {
        return NextResponse.json({ error: "Missing required fields", status: 400 })
    }

    try {
        const registerTournament = await prisma.tournament.create({
            data: {
                name: name,
                location: location,
                locationLink: locationLink,
                Date: new Date(date)
            }
        })
        return NextResponse.json(registerTournament, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error registering tournament", status: 500 })
    }

}