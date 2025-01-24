/*
  Warnings:

  - A unique constraint covering the columns `[tournamentId]` on the table `RegisterSolo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RegisterSolo_tournamentId_key" ON "RegisterSolo"("tournamentId");

-- AddForeignKey
ALTER TABLE "RegisterSolo" ADD CONSTRAINT "RegisterSolo_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
