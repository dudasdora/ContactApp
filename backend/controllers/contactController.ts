import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getContacts = async (request: Request, response: Response) => {
  try {
    const contacts = await prisma.contact.findMany()

    response.status(200).json(contacts)
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' })
  }
}

export const createContact = async (request: Request, response: Response) => {
  try {
    const contact = await prisma.contact.create({
      data: request.body
    })

    response.status(201).json(contact)
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' })
  }
}

export const updateContact = async (request: Request, response: Response) => {
  try {
    const contact = await prisma.contact.update({
      where: { id: Number(request.params.id) },
      data: request.body
    })

    response.status(200).json(contact)
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' })
  }
}

export const deleteContact = async (request: Request, response: Response) => {
  try {
    const deleted = await prisma.contact.delete({
      where: { id: Number(request.params.id) }
    })
    response.status(204).json(deleted)
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' })
  }
}
