-- CreateTable
CREATE TABLE "RegisterTeam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "numberOfPlayers" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegisterTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RegisterTeam" ADD CONSTRAINT "RegisterTeam_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
