const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const getAll=()=>{
    return prisma.info.findMany();;
}
module.exports={
    getAll
}