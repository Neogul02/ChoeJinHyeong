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
        <SectionEntry
          key={entry.id}
          title={entry.institution}
          period={entry.period}
          subtitle={entry.department}
          className='flex flex-col md:flex-row justify-between my-8 md:my-16 ml-4 md:ml-10'>
          {entry.content_md && (
            <div className='flex flex-col gap-2'>
              {entry.content_md.split('\n').filter(Boolean).map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          )}
        </SectionEntry>
      ))}
    </section>
  )
}
