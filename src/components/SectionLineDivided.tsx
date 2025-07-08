export default function SectionLineDivided({ text }: { text?: string }) {
  return (
    <div>
      {text && <div className='text-[24px] font-bold'>{text}</div>}
      <div className='flex flex-row justify-center items-center space-x-4 my-4'>
        <div
          className='w-1/2 h-[1px] rounded-full '
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
        <div
          className='w-[4px] h-[1px] rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
        <div
          className='w-1/2 h-[1px] rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
      </div>
    </div>
  )
}
