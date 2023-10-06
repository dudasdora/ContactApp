import express from 'express'
import {
  createContact,
  deleteContact,
  updateContact,
  getContacts
} from '../controllers/contactController'

const router = express.Router()

router.get('/', (request, response) => {
  return getContacts(request, response)
})

router.post('/', (request, response) => {
  return createContact(request, response)
})
router.put('/:id', (request, response) => updateContact(request, response))
router.delete('/:id', (request, response) => deleteContact(request, response))

export default router
