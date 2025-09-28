-- Fix Row Level Security Policies for Contact Forms and Meeting Requests
-- Run this in your Supabase SQL Editor

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Anyone can create contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can create meeting requests" ON meeting_requests;

-- Create new permissive policies for contact submissions
CREATE POLICY "Allow anonymous contact submissions" 
ON contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow authenticated contact submissions" 
ON contact_submissions 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Create new permissive policies for meeting requests
CREATE POLICY "Allow anonymous meeting requests" 
ON meeting_requests 
FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow authenticated meeting requests" 
ON meeting_requests 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Verify the policies are working
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('contact_submissions', 'meeting_requests');
