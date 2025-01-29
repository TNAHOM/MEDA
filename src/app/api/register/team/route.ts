import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { FilterType } from "../../../../../types/FormData";


export async function POST(req: NextRequest) {
    const { Fname, Lname, Pnumber, tornament, TeamName, PlayerNum } = await req.json();
    const combineName = Fname + " " + Lname;
    if (!Fname || !Lname || !Pnumber || !TeamName || !PlayerNum || !tornament) {
        return NextResponse.json({ error: "Missing required fields", status: 400 });
    }

    try {
        const registerTeam = await prisma.registerTeam.create({
            data: {
                name: combineName,
                phoneNumber: parseInt(Pnumber),
                tournamentId: tornament,
                teamName: TeamName,
                numberOfPlayers: parseInt(PlayerNum),
            },
        })
        return NextResponse.json(registerTeam, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error registering user", status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const nameParam = searchParams.get("name");
    const phoneParam = searchParams.get("phone");
    const tournamentParam = searchParams.get("tournament");

    if (!tournamentParam) {
        return NextResponse.json({ error: "Tournament is required" }, { status: 400 });
    }
    if (!nameParam && !phoneParam) {
        return NextResponse.json({ error: "Either phone or name is required" }, { status: 400 });
    }


    const filters: FilterType = { tournamentId: tournamentParam };

    const name = nameParam?.toLowerCase();
    const phone = phoneParam;

    if (name && phone) {
        filters.AND = [
            { name: name },
            { phoneNumber: parseInt(phone) },
        ];
    } else if (name) {
        filters.name = name
    } else if (phone) {
        filters.phoneNumber = parseInt(phone);
    }

    try {
        const registrations = await prisma.registerTeam.findMany({
            where: filters,
        });
        return NextResponse.json(
            { exists: registrations.length > 0, count: registrations.length, type: "team" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Search error " + error, type: "team" }, { status: 500 });
    }
}