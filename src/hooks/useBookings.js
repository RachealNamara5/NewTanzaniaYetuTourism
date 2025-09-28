import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { db } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

export const useBookings = () => {
  const { user } = useAuth()
  const queryClient = useQueryClient()

  // Get user's bookings
  const {
    data: bookings,
    isLoading,
    error
  } = useQuery({
    queryKey: ['bookings', user?.id],
    queryFn: () => db.bookings.getByUserId(user.id),
    enabled: !!user?.id,
    select: (data) => data.data
  })

  // Create booking mutation
  const createBookingMutation = useMutation({
    mutationFn: async (bookingData) => {
      console.log('🎫 Attempting to submit booking:', bookingData)
      console.log('👤 Current user:', user)
      
      if (!user) {
        throw new Error('User not authenticated')
      }
      
      const result = await db.bookings.create(bookingData)
      console.log('✅ Booking submission result:', result)
      return result
    },
    onSuccess: (data) => {
      console.log('🎉 Booking successful:', data)
      queryClient.invalidateQueries(['bookings', user?.id])
      toast.success('Booking submitted successfully! We will contact you soon.')
      return data
    },
    onError: (error) => {
      console.error('❌ Booking submission error:', error)
      console.error('Error details:', error.message, error.details)
      toast.error(`Failed to submit booking: ${error.message || 'Please try again.'}`)
    }
  })

  // Update booking mutation
  const updateBookingMutation = useMutation({
    mutationFn: ({ id, updates }) => db.bookings.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings', user?.id])
      toast.success('Booking updated successfully!')
    },
    onError: (error) => {
      toast.error('Failed to update booking. Please try again.')
      console.error('Update booking error:', error)
    }
  })

  return {
    bookings,
    isLoading,
    error,
    createBooking: createBookingMutation.mutate,
    updateBooking: updateBookingMutation.mutate,
    isCreating: createBookingMutation.isPending,
    isUpdating: updateBookingMutation.isPending
  }
}
