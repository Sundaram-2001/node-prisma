const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const getAll=prisma.info.findMany();
module.exports={
    getAll
}