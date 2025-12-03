'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Counter.dev API를 통해 방문자 수 가져오기
    axios
      .get('https://api.counter.dev/count/a9a6b5ea-808a-49cf-91b0-91681288e73a')
      .then((res) => {
        setCount(res.data.count || 0)
      })
      .catch((err) => {
        console.error('Failed to fetch visitor count:', err)
      })
  }, [])

  if (count === null) {
    return null // 로딩 중에는 아무것도 표시하지 않음
  }

  return <div className='text-sm md:text-[16px] text-gray-400 mt-2'>👥 방문자 수: {count.toLocaleString()}명</div>
}
