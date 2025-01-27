import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const { Fname, Lname, Pnumber, tornament } = await req.json();
    if (!Fname || !Lname || !Pnumber) {
        return NextResponse.json({ error: "Missing required fields", status: 400 });
    }
    const combineName = Fname + " " + Lname;

    try {
        const registerUser = await prisma.registerSolo.create({
            data: {
                name: combineName,
                phoneNumber: parseInt(Pnumber),
                tournamentId: tornament,
            },
        });
        return NextResponse.json(registerUser, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error registering user", status: 500 });
    }
}