import { createServerSupabaseClient } from '@/lib/supabase-server'
import { CareerEntry } from '@/lib/supabase'
import SectionEntry from '@/components/ui/SectionEntry'

export default async function Career() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('career').select('*').order('sort_order')
  const entries = (data as CareerEntry[]) ?? []

  return (
    <section className='mb-12 md:mb-20'>
      {entries.map((entry) => (
        <SectionEntry key={entry.id} title={entry.company} period={entry.period} subtitle={entry.department}>
          {entry.content_md && (
            <div className='whitespace-pre-line'>{entry.content_md}</div>
          )}
        </SectionEntry>
      ))}
    </section>
  )
}
