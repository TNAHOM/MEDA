import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { name, location, locationLink, Date: dateString } = await req.json();
    if (!name || !location || !locationLink || !dateString) {
        return NextResponse.json({ error: "Missing required fields", status: 400 })
    }

    try {
        const registerTournament = await prisma.tournament.create({
            data: {
                name: name,
                location: location,
                locationLink: locationLink,
                Date: new Date(dateString)
            }
        })
        return NextResponse.json(registerTournament, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error registering tournament", status: 500 })
    }

}

export async function GET() {
    try {
        const tournaments = await prisma.tournament.findMany();
        return NextResponse.json(tournaments, { status: 200 });
    } catch (error) {
        console.error('error', error);
        return NextResponse.json({ error: "Error fetching tournaments", status: 500 });
    }
}