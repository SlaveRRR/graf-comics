import prisma from "./prisma"
export const connect = async () =>{
    try {
        await prisma.$connect()
    } catch (error) {
        console.error(error)
        throw new Error('Unable set connection with database')
    }
    finally{
        await prisma.$disconnect()
    }
} 