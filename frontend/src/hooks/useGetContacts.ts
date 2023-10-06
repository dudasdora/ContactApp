import { useQuery } from 'react-query'
import config from '../config'
import { Contact } from '../types'

const apiUrl = config.apiUrl

const getContacts = async () => {
  const res = await fetch(`${apiUrl}/contact`)
  return await res.json()
}

export const useGetContacts = () => {
  return useQuery<Contact[]>({
    queryKey: ['contact', 'list'],
    queryFn: getContacts,
    staleTime: 60000
  })
}
