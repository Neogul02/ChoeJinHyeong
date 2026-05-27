interface SectionEntryProps {
  title: string
  period?: string | null
  subtitle?: string | null
  children?: React.ReactNode
  className?: string
}

export default function SectionEntry({ title, period, subtitle, children, className }: SectionEntryProps) {
  return (
    <div className={className ?? 'flex flex-col md:flex-row justify-between my-8 md:my-10 ml-4 md:ml-10'}>
      <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
        <div className='text-lg md:text-[22px] font-bold'>{title}</div>
        <div className='text-sm md:text-[16px] font-bold ml-3'>
          {period && <div>{period}</div>}
          {subtitle && <div className='font-light'>{subtitle}</div>}
        </div>
      </div>
      {children && (
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3 pr-4 md:pr-15 mb-10'>
          <div className='text-sm md:text-[16px] font-medium'>{children} </div>
        </div>
      )}
    </div>
  )
}
