import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://kgvxqdcrwzqwzlbmqfie.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndnhxZGNyd3pxd3psYm1xZmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNjA2MTgsImV4cCI6MjA3NDYzNjYxOH0.pfpKNzz6qHHVF8cxzW6JVSsCiEr23f32I4B4o5AFx0o'

// Debug environment variables (only once)
if (!window.supabaseLogged) {
  console.log('✅ Supabase connected:', supabaseUrl)
  console.log('🔑 API Key:', supabaseKey ? 'Present' : 'Missing')
  console.log('📁 Source:', process.env.REACT_APP_SUPABASE_URL ? 'env file' : 'fallback')
  window.supabaseLogged = true
}

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('Missing REACT_APP_SUPABASE_URL environment variable')
}

if (!supabaseKey) {
  throw new Error('Missing REACT_APP_SUPABASE_ANON_KEY environment variable')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Auth helpers
export const auth = {
  // Sign up with email and password
  signUp: async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  // Sign in with email and password
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Listen to auth changes
  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helpers
export const db = {
  // Bookings
  bookings: {
    create: async (bookingData) => {
      const { data, error } = await supabase
        .from('bookings')
        .insert([bookingData])
        .select()
      return { data, error }
    },

    getByUserId: async (userId) => {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          services (
            title,
            price_from,
            image_url
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      return { data, error }
    },

    update: async (id, updates) => {
      const { data, error } = await supabase
        .from('bookings')
        .update(updates)
        .eq('id', id)
        .select()
      return { data, error }
    }
  },

  // Contact submissions
  contacts: {
    create: async (contactData) => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([contactData])
        .select()
      return { data, error }
    }
  },

  // Meeting requests
  meetings: {
    create: async (meetingData) => {
      const { data, error } = await supabase
        .from('meeting_requests')
        .insert([meetingData])
        .select()
      return { data, error }
    }
  },

  // Services
  services: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true })
      return { data, error }
    },

    getById: async (id) => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single()
      return { data, error }
    }
  },

  // Destinations
  destinations: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .eq('is_active', true)
        .order('name', { ascending: true })
      return { data, error }
    },

    getByType: async (type) => {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .eq('type', type)
        .eq('is_active', true)
        .order('name', { ascending: true })
      return { data, error }
    }
  },

  // Wildlife
  wildlife: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('wildlife')
        .select('*')
        .order('name', { ascending: true })
      return { data, error }
    },

    getByTag: async (tag) => {
      const { data, error } = await supabase
        .from('wildlife')
        .select('*')
        .eq('tag', tag)
        .order('name', { ascending: true })
      return { data, error }
    }
  },

  // User profiles
  profiles: {
    create: async (profileData) => {
      const { data, error } = await supabase
        .from('profiles')
        .insert([profileData])
        .select()
      return { data, error }
    },

    update: async (userId, updates) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
      return { data, error }
    },

    getById: async (userId) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      return { data, error }
    }
  }
}

export default supabase
