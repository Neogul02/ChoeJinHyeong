import Link from 'next/link'

export default function Activities() {
  return (
    <section>
      <div className='flex flex-col items-center my-20 md:my-35'>
        <Link
          href='/about'
          className='w-[50%] text-[22px] font-bold text-left transition-colors duration-300 hover:text-[#3182f6]'>
          <div>{`About ->`}</div>
        </Link>
        <div
          className='w-[50%] md:w-[50%] h-px rounded-full opacity-60'
          style={{ background: 'var(--foreground)' }}
        />
      </div>
    </section>
  )
}
