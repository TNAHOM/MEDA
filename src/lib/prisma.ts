import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the Prisma instance
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Create or reuse the PrismaClient instance
const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Optional: add logging for better visibility in development
});

// Save the Prisma instance globally in development to prevent re-instantiation during hot reloads
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;


// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//     return new PrismaClient()
// }

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClientSingleton | undefined
// }

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma