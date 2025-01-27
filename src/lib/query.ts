import prisma from './prisma';

export const getAllTournaments = async () => {
    try {
        const tournaments = await prisma.tournament.findMany();
        console.log('Fetched Tournaments:', tournaments); // Add this line
        return tournaments;
    } catch (error) {
        console.error('Error fetching tournaments:', error);
        return [];
    }
};