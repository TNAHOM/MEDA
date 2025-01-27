import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

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