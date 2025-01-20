-- CreateTable
CREATE TABLE "RegisterSolo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegisterSolo_pkey" PRIMARY KEY ("id")
);
