# Tanzania Yetu Tourism - Supabase Setup Guide

## 🚀 Quick Start

Follow these steps to set up Supabase for your Tanzania Yetu Tourism website:

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - **Name**: Tanzania Yetu Tourism
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your users (e.g., Europe for European users)
6. Click "Create new project"

### 2. Get Project Credentials

Once your project is created:

1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **API Key (anon public)** (starts with `eyJhbGciOi...`)

### 3. Configure Environment Variables

1. Open your project's `.env.local` file
2. Replace the placeholder values:

```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Set Up Database Schema

1. Go to your Supabase dashboard
2. Click on **SQL Editor** in the sidebar
3. Copy the entire content from `supabase-schema.sql` file in your project root
4. Paste it into the SQL Editor
5. Click **Run** to execute the schema

This will create all necessary tables:
- `profiles` - User profiles
- `services` - Safari services and tours
- `destinations` - Travel destinations
- `wildlife` - Wildlife information
- `bookings` - Customer bookings
- `contact_submissions` - Contact form submissions
- `meeting_requests` - Meeting requests

### 5. Configure Authentication

1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Configure the following settings:

#### Email Settings:
- Enable email confirmations
- Set up custom SMTP (optional, but recommended for production)

#### URL Configuration:
- **Site URL**: `http://localhost:3000` (for development)
- **Redirect URLs**: Add your production domain when deploying

### 6. Test the Integration

1. Start your development server:
```bash
npm start
```

2. Visit `http://localhost:3000/booking`
3. Try creating an account and making a booking
4. Check your Supabase dashboard to see the data

### 7. Row Level Security (RLS)

The schema automatically sets up Row Level Security policies:

- **Users** can only see/edit their own profiles and bookings
- **Services, Destinations, Wildlife** are publicly readable
- **Contact forms** can be submitted by anyone
- **Admin access** will be handled through a separate admin panel

## 🔧 Features Implemented

### ✅ User Authentication
- Email/password signup and login
- User profiles with additional info (phone, location)
- Secure session management

### ✅ Booking System
- Real-time booking submissions
- Service selection from database
- User-specific booking history
- Status tracking (pending, confirmed, cancelled)

### ✅ Contact Forms
- Contact form submissions stored in database
- Meeting request scheduling
- Real-time form validation and feedback

### ✅ Data Management
- Dynamic services loaded from database
- Wildlife and destination information
- Automatic timestamps and updates

## 🛠️ Admin Panel (Separate Project)

The admin panel will be a separate website for managing:
- Bookings (view, confirm, cancel)
- Contact submissions and responses
- Services and pricing management
- Content management (destinations, wildlife)
- User management

## 📱 Production Deployment

### Environment Variables for Production:
```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-production-anon-key
REACT_APP_ENVIRONMENT=production
```

### Supabase Production Settings:
1. Update **Site URL** to your production domain
2. Add production domain to **Redirect URLs**
3. Configure custom email templates
4. Set up database backups
5. Monitor usage and performance

## 🔒 Security Notes

- Never expose your `service_role` key in frontend code
- The `anon` key is safe to use in frontend applications
- All sensitive operations are protected by Row Level Security
- User data is automatically encrypted at rest

## 📊 Database Schema Overview

```sql
profiles (user info)
├── id (UUID, links to auth.users)
├── full_name, phone, location
└── timestamps

services (safari offerings)
├── id, title, description
├── features[], duration, price_from
├── category, image_url
└── is_active flag

bookings (customer reservations)
├── id, user_id → profiles
├── service_id → services  
├── dates, guests, requests
├── status, total_price
└── timestamps

contact_submissions & meeting_requests
├── customer contact info
├── message/preferred_date
├── status tracking
└── timestamps
```

## 🆘 Troubleshooting

### Common Issues:

1. **"Invalid API key"**
   - Check your `.env.local` file
   - Ensure no extra spaces in the keys
   - Restart your development server

2. **"Row Level Security policy violation"**
   - Check if RLS policies are set up correctly
   - Ensure user is authenticated for protected operations

3. **"Failed to fetch"**
   - Check your internet connection
   - Verify Supabase project is active
   - Check browser console for detailed errors

### Need Help?
- Check Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Review the SQL schema in `supabase-schema.sql`
- Check the browser console for detailed error messages

## 🎉 You're All Set!

Your Tanzania Yetu Tourism website now has a fully functional backend with:
- User authentication and profiles
- Real booking system with database persistence
- Contact form submissions
- Dynamic content management
- Secure data handling

The admin panel will be created as a separate project for managing all this data!
