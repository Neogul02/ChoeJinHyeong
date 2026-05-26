import { createServerSupabaseClient } from '@/lib/supabase-server'
import { EducationEntry } from '@/lib/supabase'
import SectionEntry from '@/components/ui/SectionEntry'

export default async function Education() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('education').select('*').order('sort_order')
  const entries = (data as EducationEntry[]) ?? []

  return (
    <section>
      {entries.map((entry) => (
        <SectionEntry key={entry.id} title={entry.institution} period={entry.period} subtitle={entry.department}>
          {entry.content_md && (
            <div className='whitespace-pre-line'>{entry.content_md}</div>
          )}
        </SectionEntry>
      ))}
    </section>
  )
}
