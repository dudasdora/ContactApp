import { PrismaClient } from '@prisma/client'
import express from 'express'
import contactRoutes from './routes/contactRoutes'

const app = express()

app.use(express.json())

const port = process.env.PORT || 8000

const prisma = new PrismaClient()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.use('/api/contact', contactRoutes)

app.on('close', () => {
  prisma.$disconnect()
})
