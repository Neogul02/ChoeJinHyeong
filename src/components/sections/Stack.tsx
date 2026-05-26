import { createServerSupabaseClient } from '@/lib/supabase-server'
import { StackItem } from '@/lib/supabase'

const CATEGORY_ORDER = ['Frontend', 'Backend', 'Infra', 'Cooperation'] as const

export default async function Stack() {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('stack_items').select('*').order('sort_order')
  const items = (data as StackItem[]) ?? []

  const grouped = CATEGORY_ORDER.reduce<Record<string, StackItem[]>>((acc, cat) => {
    acc[cat] = items.filter((i) => i.category === cat)
    return acc
  }, {} as Record<string, StackItem[]>)

  return (
    <section className='mb-12 md:mb-20'>
      <div className='text-sm md:text-[16px] flex flex-row justify-center px-4 mb-4 md:mb-0'>
        현재 공부하고 있는 기술 스택은 🍅 표시를 해두었어요, 항상 쉬지 않고 새로운 기술을 탐구하고 있습니다.
      </div>

      <div className='flex flex-col md:flex-row justify-between my-4 md:my-6 ml-4 md:ml-10 mr-4 md:mr-0'>
        {(['Frontend', 'Backend'] as const).map((cat) => (
          <div key={cat} className='w-full md:w-1/2 md:pr-6 mb-6 md:mb-0'>
            <div className='text-base md:text-[22px] font-bold'>{cat}</div>
            <div className='text-sm md:text-[16px] ml-2 md:ml-3 space-y-1'>
              {grouped[cat].map((item) => (
                <div key={item.id}> · {item.name}{item.is_learning ? ' 🍅' : ''}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row justify-between my-6 md:my-8 ml-4 md:ml-10 mr-4 md:mr-0'>
        {(['Infra', 'Cooperation'] as const).map((cat) => (
          <div key={cat} className='w-full md:w-1/2 md:pr-6 mb-6 md:mb-0 last:md:pr-0 last:md:pl-4'>
            <div className='text-base md:text-[22px] font-bold'>{cat}</div>
            <div className='text-sm md:text-[16px] ml-2 md:ml-3 space-y-1'>
              {grouped[cat].map((item) => (
                <div key={item.id}>· {item.name}{item.is_learning ? ' 🍅' : ''}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
