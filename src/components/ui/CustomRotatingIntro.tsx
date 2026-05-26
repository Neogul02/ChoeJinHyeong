'use client'
import { useEffect, useRef, useState } from 'react'

const SKILLS = ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Java', 'SpringBoot']
const NAMES = ['최진형', 'ChoeJinHyeong', '崔眞亨', 'チェ・ジンヒョン', 'Neogul02']

function useTypingEffect(texts: string[], typingSpeed: number, holdDuration: number): string {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    let i = 0
    const current = texts[index]
    setDisplayText('')

    const schedule = () => {
      if (i <= current.length) {
        setDisplayText(current.slice(0, i++))
        timerRef.current = setTimeout(schedule, typingSpeed)
      } else {
        timerRef.current = setTimeout(
          () => setIndex((prev) => (prev + 1) % texts.length),
          holdDuration
        )
      }
    }

    timerRef.current = setTimeout(schedule, typingSpeed)
    return () => clearTimeout(timerRef.current)
  }, [index, texts, typingSpeed, holdDuration])

  return displayText
}

export default function CustomRotatingIntro() {
  const skillText = useTypingEffect(SKILLS, 90, 3000)
  const nameText = useTypingEffect(NAMES, 60, 4000)

  return (
    <div
      className='
        w-full
        max-w-[320px]
        md:max-w-[500px]
        min-h-[120px]
        text-[22px]
        font-bold
        md:text-[38px]
        leading-[32px]
        md:leading-[57px]
        inline-block
        z-10
        whitespace-nowrap
        break-keep
      '>
      안녕하세요!
      <br />
      <strong>
        <span className='underline cursor-blink' style={{ color: '#3182f6' }}>
          {skillText}
        </span>
      </strong>
      {`를 좋아하는`}
      <br />
      {`개발자 `}
      <strong>
        <span className='underline cursor-blink' style={{ color: '#3182f6' }}>
          {nameText}
        </span>
      </strong>
      {`입니다`}
    </div>
  )
}
