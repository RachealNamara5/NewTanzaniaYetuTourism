import { useQuery } from '@tanstack/react-query'
import { db } from '../lib/supabase'

export const useServices = () => {
  const {
    data: services,
    isLoading,
    error
  } = useQuery({
    queryKey: ['services'],
    queryFn: () => db.services.getAll(),
    select: (data) => data?.data || [],
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  return {
    services: services || [],
    isLoading,
    error
  }
}

export const useService = (id) => {
  const {
    data: service,
    isLoading,
    error
  } = useQuery({
    queryKey: ['service', id],
    queryFn: () => db.services.getById(id),
    select: (data) => data.data,
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })

  return {
    service,
    isLoading,
    error
  }
}
