import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://biqfnvbxdsqheuezpnho.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcWZudmJ4ZHNxaGV1ZXpwbmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MTYwODAsImV4cCI6MTk2OTI5MjA4MH0.T9g-UrQ0Bqfhqk6dpPKfrRmHXVaL2lq1NsIyGt2pr1g')