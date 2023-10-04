import { PrismaClient } from '@prisma/client'
import express from 'express'
const app = express()

const port = process.env.PORT || 8000

const prisma = new PrismaClient()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.on('close', () => {
  prisma.$disconnect()
})
