'use client'

import ReactMarkdown from 'react-markdown'

interface Props {
  content: string
  className?: string
}

export default function MarkdownContent({ content, className = '' }: Props) {
  return (
    <div className={className}>
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className='text-xl md:text-[22px] font-bold mt-6 mb-2'>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-base md:text-[18px] font-semibold mt-4 mb-1'>{children}</h3>
        ),
        p: ({ children }) => (
          <p className='text-sm md:text-[16px] mb-3 leading-relaxed'>{children}</p>
        ),
        ul: ({ children }) => (
          <ul className='text-sm md:text-[16px] space-y-1 mb-3 list-none'>{children}</ul>
        ),
        li: ({ children }) => (
          <li className='text-sm md:text-[16px]'>· {children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className='text-mainblue hover:underline'
            target='_blank'
            rel='noopener noreferrer'>
            {children}
          </a>
        ),
        strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
        hr: () => <hr className='my-4 opacity-30' />,
      }}>
      {content}
    </ReactMarkdown>
    </div>
  )
}
