import Project_DeunDeun from '@/components/modals/Project_DeunDeun'
import Project_Knock from '@/components/modals/Project_Knock'
import Project_Portfolio from '@/components/modals/Project_Portfolio'
import Project_Likelion from '@/components/modals/Project_Likelion'
import Project_Hanamory from '@/components/modals/Project_Hanamory'
import Project_Runaway from '@/components/modals/Project_Runaway'

export interface Project {
  id: number
  title: string
  period: string
  image: string
  bgColor?: string
  component: React.ComponentType
}

export const projectsData = (theme: 'dark' | 'light'): Project[] => [
  {
    id: 0,
    title: 'DeunDeun 프로젝트',
    period: '2025. ~ 개발 중',
    image: '',
    bgColor: theme === 'dark' ? '#9333ea' : '#a855f7',
    component: Project_DeunDeun,
  },
  {
    id: 1,
    title: 'Knock: AI 등기부등본 분석 서비스 ',
    period: '2025.07 ~ 진행 중',
    image: '/images/knock/knock_main.png',
    bgColor: theme === 'dark' ? '#4a9eff' : '#2563eb',
    component: Project_Knock,
  },
  {
    id: 2,
    title: 'Portfolio',
    period: '2025.05 - 진행 중',
    image: '',
    bgColor: theme === 'dark' ? '#e6e6e6' : '#2c2d2e',
    component: Project_Portfolio,
  },
  {
    id: 3,
    title: 'LikelionKNU: 부원 리쿠르팅 서비스',
    period: '2025.01 - 2025.04',
    image: '/images/likelion/likelion_main.png',
    component: Project_Likelion,
  },
  {
    id: 4,
    title: 'Hanamory: AI 꽃다발 인식 서비스',
    period: '2025.03 ~ 2025.11',
    image: '/images/hanamory/hanamory_main.jpg',
    component: Project_Hanamory,
  },
  {
    id: 5,
    title: '도망가자: 재난상황 대피소 제공 서비스 ',
    period: '2025.02 ~ 2025.04',
    image: '/images/runaway/runaway_main.png',
    component: Project_Runaway,
  },
]
