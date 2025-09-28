import { useMutation } from '@tanstack/react-query'
import { db } from '../lib/supabase'
import toast from 'react-hot-toast'

export const useContactSubmission = () => {
  const mutation = useMutation({
    mutationFn: (contactData) => db.contacts.create(contactData),
    onSuccess: () => {
      toast.success('Thank you! We will get back to you soon.')
    },
    onError: (error) => {
      console.error('Contact submission error:', error)
      toast.error('Failed to send message. Please try again.')
    }
  })

  return {
    submitContact: mutation.mutate,
    isSubmitting: mutation.isPending,
    error: mutation.error
  }
}

export const useMeetingRequest = () => {
  const mutation = useMutation({
    mutationFn: (meetingData) => db.meetings.create(meetingData),
    onSuccess: () => {
      toast.success('Meeting request sent! We will confirm your appointment soon.')
    },
    onError: (error) => {
      toast.error('Failed to schedule meeting. Please try again.')
      console.error('Meeting request error:', error)
    }
  })

  return {
    submitMeeting: mutation.mutate,
    isSubmitting: mutation.isPending,
    error: mutation.error
  }
}
