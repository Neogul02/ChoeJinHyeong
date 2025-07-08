export default function SectionLine({ text }: { text?: string }) {
  return (
    <div>
      {text && <div className='text-[24px] font-bold'>{text}</div>}
      <div className='flex flex-row justify-center items-center space-x-4 my-4'>
        <div
          className='w-full h-[1px] rounded-full'
          style={{ background: 'var(--foreground)', opacity: 0.6 }}
        />
      </div>
    </div>
  )
}
