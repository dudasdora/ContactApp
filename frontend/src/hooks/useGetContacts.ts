import { useQuery } from 'react-query'
import { Contact } from '../types'
import { getContacts } from '../utils/getContacts'

export const useGetContacts = () => {
  return useQuery<Contact[]>({
    queryKey: ['contact', 'list'],
    queryFn: getContacts,
    staleTime: 6000
  })
}
