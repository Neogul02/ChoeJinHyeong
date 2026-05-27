export interface ProjectData {
  id: number
  title: string
  period: string
  image?: string
  bgDark?: string
  bgLight?: string
  titleSize?: string
}

export const projectsData: ProjectData[] = [
  {
    id: 0,
    title: 'choichoi POS',
    period: '2026.04 ~ 진행 중',
    bgDark: '#1a1a2e',
    bgLight: '#e8e4f0',
    titleSize: 'text-sm md:text-[18px]',
  },
  {
    id: 1,
    title: 'DeunDeun: 결식아동 통합지원 플랫폼',
    period: '2024.10 ~ 2024.12',
    image: '/images/deundeun/deundeun_main.png',
    titleSize: 'text-sm md:text-[18px]',
  },
  {
    id: 2,
    title: 'Knock: 부동산 거래 위험도 분석 서비스',
    period: '2025.07 ~ 2025.11',
    image: '/images/knock/knock_main.png',
    titleSize: 'text-sm md:text-[18px]',
  },
  // {
  //   id: 3,
  //   title: 'Portfolio',
  //   period: '2025.05 - now',
  //   bgDark: '#3a3b3c',
  //   bgLight: '#d5d5d5',
  // },
  {
    id: 4,
    title: 'Hanamory: YOLOv5 꽃다발 학습 프로젝트',
    period: '2025.03 ~ 2025.12',
    image: '/images/hanamory/hanamory_main.jpg',
    titleSize: 'text-sm md:text-[18px]',
  },
  {
    id: 5,
    title: '도망가자: 재난상황 대피소 제공 서비스',
    period: '2025.02 ~ 2025.04',
    image: '/images/runaway/runaway_main.png',
    titleSize: 'text-sm md:text-[18px]',
  },
  {
    id: 6,
    title: 'LikeionKNU: 아기사자 리크루팅 웹 서비스',
    period: '2024.12 - 2025.03',
    image: '/images/likelion/likelion_main.png',
    titleSize: 'text-sm md:text-[18px]',
  },
  
]
