import { createClient } from "@supabase/supabase-js"

const URL = "https://yxpjtfwqagabplacrgvh.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cGp0ZndxYWdhYnBsYWNyZ3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNzE2NzEsImV4cCI6MjA0NTc0NzY3MX0.cFRYsPnNJH1oJx_sLWiurmjee5vEJ4ysWGmDjrKE9HE"

export const supabase = createClient(URL, API_KEY)