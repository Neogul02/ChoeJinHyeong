import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Project } from '@/lib/supabase'
import ProjectsClient from './ProjectsClient'

export default async function Projects() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')

  return <ProjectsClient projects={(data as Project[]) ?? []} />
}
