import { useQuery } from 'react-query'
import config from '../config'
import { Contact } from '../types'

const apiUrl = config.apiUrl

export const useGetContacts = () => {
  const getContacts = async () => {
    const res = await fetch(`${apiUrl}/contact`)
    return await res.json()
  }

  const { data, error, isLoading, refetch } = useQuery<Contact[]>({
    queryKey: 'contacts',
    queryFn: getContacts,
    staleTime: 60000
  })

  return { data, error, isLoading, refetch }
}
