import { createServerSupabaseClient } from '@/lib/supabase-server'
import { ActivityEntry } from '@/lib/supabase'
import SectionEntry from '@/components/ui/SectionEntry'

export default async function Activities() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('activities').select('*').order('sort_order')
  const entries = (data as ActivityEntry[]) ?? []

  return (
    <section className='mb-12 md:mb-20'>
      {entries.map((entry) => (
        <SectionEntry
          key={entry.id}
          title={entry.organization}
          period={entry.period}
          subtitle={entry.role}>
          {entry.content_md && (
            <div className='whitespace-pre-line'>{entry.content_md}</div>
          )}
        </SectionEntry>
      ))}
    </section>
  )
}
