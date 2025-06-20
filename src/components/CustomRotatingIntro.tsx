'use client'
import { useEffect, useState } from 'react'

const skills_texts = ['Next.js', 'React', 'TypeScript', 'JavaScript']
const names_texts = ['최진형', 'ChoeJinHyeong', '崔眞亨', 'チェ・ジンヒョン', '너굴먹', 'Neogul02']

export default function CustomRotatingIntro() {
  const [skillIndex, setSkillIndex] = useState(0)
  const [nameIndex, setNameIndex] = useState(0)

  const [skillText, setSkillText] = useState('')
  const [nameText, setNameText] = useState('')

  // skill 타이핑 효과
  useEffect(() => {
    let i = 0
    const currentSkill = skills_texts[skillIndex]
    setSkillText('') // 초기화

    const typeSkill = () => {
      if (i <= currentSkill.length) {
        setSkillText(currentSkill.slice(0, i))
        i++
        setTimeout(typeSkill, 75) // 타이핑 속도
      } else {
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills_texts.length)
        }, 3000) // 다 찍고 난 후 다음 단어로 넘어가는 시간
      }
    }

    typeSkill()
  }, [skillIndex])

  // name 타이핑 효과
  useEffect(() => {
    let i = 0
    const currentName = names_texts[nameIndex]
    setNameText('') // 초기화

    const typeName = () => {
      if (i <= currentName.length) {
        // console.log(`Typing name: ${currentName.slice(0, i)}`) // 디버깅용 로그
        setNameText(currentName.slice(0, i))
        i++
        setTimeout(typeName, 60) // 타이핑 속도
      } else {
        setTimeout(() => {
          setNameIndex((prev) => (prev + 1) % names_texts.length)
        }, 4000) // 다 찍고 난 후 다음 이름으로 넘어가는 시간
      }
    }

    typeName()
  }, [nameIndex])

  return (
    <div
      className='
        w-full
        max-w-[320px]
        md:max-w-[500px]
        min-h-[120px]
        text-[22px] 
        md:text-[40px] 
        leading-[32px] 
        md:leading-[57px] 
        inline-block 
        z-10
        whitespace-nowrap
        break-keep
      '
    >
      안녕하세요!
      <br />
      <strong>
        <span
          className='underline cursor-blink'
          style={{ color: '#3182f6' }}
        >
          {skillText}
        </span>
      </strong>
      {`를 좋아하는`}
      <br />
      {`개발자 `}
      <strong>
        <span
          className='underline cursor-blink'
          style={{ color: '#3182f6' }}
        >
          {nameText}
        </span>
      </strong>
      {`입니다.`}
    </div>
  )
}
