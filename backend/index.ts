import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

import contactRoutes from './routes/contactRoutes'

const app = express()
app.use(cors())

app.use(express.json())

const port = process.env.PORT || 8000

const prisma = new PrismaClient()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
app.use(express.urlencoded({ extended: true }))

app.use('/api/contact', contactRoutes)

app.on('close', () => {
  prisma.$disconnect()
})

app.use('/', (request, response) => {
  response.send('Server is running')
})
