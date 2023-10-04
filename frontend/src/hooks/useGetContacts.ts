import { useQuery } from 'react-query'
import config from '../config'

const apiUrl = config.apiUrl

export const useGetContacts = () => {
  const getContacts = async () => {
    const res = await fetch(`${apiUrl}/contact`)
    return res.json()
  }

  const { data, error, isLoading, refetch } = useQuery('contacts', getContacts)

  return { data, error, isLoading, refetch }
}
