import { createServerSupabaseClient } from '@/lib/supabase-server'
import { CertificationEntry } from '@/lib/supabase'
import SectionEntry from '@/components/ui/SectionEntry'

export default async function Certification() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('certifications').select('*').order('sort_order')
  const entries = (data as CertificationEntry[]) ?? []

  return (
    <section className='mb-12 md:mb-20'>
      {entries.map((entry) => (
        <SectionEntry key={entry.id} title={entry.title} period={entry.date_text} subtitle={entry.issuer} />
      ))}
    </section>
  )
}
