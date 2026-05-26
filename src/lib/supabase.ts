import { createBrowserClient } from '@supabase/ssr'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export function createClient() {
  return createBrowserClient(url, anon)
}

// Types matching DB schema
export interface Project {
  id: number
  title: string
  period: string | null
  image: string | null
  bg_dark: string | null
  bg_light: string | null
  sort_order: number
  content_md: string | null
  is_active: boolean
  updated_at: string
}

export interface StackItem {
  id: number
  category: 'Frontend' | 'Backend' | 'Infra' | 'Cooperation'
  name: string
  is_learning: boolean
  sort_order: number
}

export interface EducationEntry {
  id: number
  institution: string
  period: string | null
  department: string | null
  content_md: string | null
  sort_order: number
}

export interface CareerEntry {
  id: number
  company: string
  period: string | null
  department: string | null
  content_md: string | null
  sort_order: number
}

export interface ActivityEntry {
  id: number
  organization: string
  period: string | null
  role: string | null
  content_md: string | null
  external_link: string | null
  sort_order: number
}

export interface CertificationEntry {
  id: number
  title: string
  date_text: string | null
  issuer: string | null
  sort_order: number
}

export interface AboutContent {
  id: number
  section_key: string
  content_md: string | null
}
