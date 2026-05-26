export default function SectionLineDivided({ text }: { text?: string }) {
  return (
    <div>
      {text && <div className='text-xl md:text-[24px] font-bold'>{text}</div>}
      <div className='flex flex-row justify-center items-center space-x-4 my-3 md:my-4'>
        <div
          className='w-1/2 h-px rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
        <div
          className='w-1 h-px rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
        <div
          className='w-1/2 h-px rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
      </div>
    </div>
  )
}
