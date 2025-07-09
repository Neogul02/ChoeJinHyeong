import Image from 'next/image'
import SectionLine from '../SectionLine'
export default function Project_Likelion() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-[24px] font-bold mb-2'>LikeLionKNU - 멋쟁이사자처럼 부원 리쿠르팅 사이트</div>
      <div className='text-[18px] mb-2'>2025.01 ~ 2025.04 / 배포 중</div>
      <div className='text-[16px] mb-2'>Frontend 3, Backend 4, Design 1</div>
      <div className='text-[16px] font-bold'>
        <a
          href='https://www.likelionknu.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'
        >
          {`Link->`}
        </a>
        <a
          href='https://github.com/likelionknu/Likelion13-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'
        >
          {`GitHub FE->`}
        </a>
        <a
          href='https://github.com/likelionknu/Likelion13-BE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'
        >
          {`GitHub BE->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-[16px] mb-2'>
        · 강남대학교 멋쟁이사자처럼 13기 동아리 부원 모집 홈페이지에요.
        <br />
        · 부원 모집기간 중 300명 이상의 사용자가 접속했고 110명 이상의 유저가 회원가입했어요.
        <br />· 총 68명이 LikeLionKNU 서비스를 통해 지원서를 작성했어요.
      </div>
      <SectionLine />
      <div className='text-[20px] font-bold my-2'>프로젝트 기능 </div>
      <div className='text-[16px] mb-2'>· 동아리 소개, 지원서 작성/조회, 서류합격 결과 조회, 면접 공지, 동아리 공지사항 서비스를 제공해요.</div>
      <SectionLine />
      <div className='text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-[16px] font-bold'>React + TypeScript</div>
      <div>
        · 프론트엔드 개발을 처음하는 팀원이 있었기에 Next.js를 사용하지않고 React를 사용했어요, 페이지 라우팅, 폼 입력 등 전체적인 UI 로직을 컴포넌트 기반 구조로 설계했고, TypeScript 도입을 통해 타입
        안정성과 개발자 경험을 향상시켰어요.
      </div>
      <div className='text-[16px] font-bold mt-5'>Zustand</div>
      <div>
        · 프로젝트 마감이 얼마남지 않았을때 코드 전체적인 prop drilling 문제가 발생해 코드 유지보수가 어려운 상황이였어요, 빠르게 학습해 적용할 수 있는 Zustand를 활용해 유저 로그인정보를 관리했어요.{' '}
      </div>
      <div className='text-[16px] font-bold mt-5'>Vite (CRA → Vite Migration)</div>
      <div> · 초기에는 CRA(Create React App, Webpack)로 프로젝트를 시작했지만, Vite로 마이그레이션하여 빌드 속도가 약 3배 이상 개선시켰어요.</div>
      <div className='text-[16px] font-bold mt-5'>Vercel</div>
      <div>
        · 배포 및 프리뷰 환경은 Vercel을 통해 운영했습니다. Organization 레포지토리를 GitHub Actions를 활용해 Vercel과 연동해 팀원이 개발한 기능을 실시간으로 배포 화면에서 바로 확인할 수 있어요.
      </div>
      <div>
        · Gabia에서 구입한
        <a
          href='https://www.likelionknu.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'
        >{`www.likelionknu.com`}</a>
        도메인을 vercel 배포 도메인과 연결했어요.
      </div>
      <SectionLine />
      <div className='text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>
      <Image
        src='/images/likelion/likelion_Preview.gif'
        alt='likelion_Preview'
        width={600}
        height={400}
        className='w-full h-auto rounded-3xl mb-4'
        loading='lazy'
      />
      <SectionLine />
      <div className='text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>
      <div className='text-[16px] font-bold mt-5'>개발 프로세스</div>
      <div>
        매주 화요일, 모든 팀원이 전체 회의를 통해 파트별 진행 상황을 공유하고, 실시간 피드백을 통해 기획을 지속적으로 보완했어요. 프론트엔드 파트는 주요 기능을 컴포넌트 단위로 세분화하여 개발을
        진행했고, 전체 개발 상황을
        <a
          href='https://neogul02-portfolio.notion.site/22bcc92d46da8084a8b5d5039ca4742e?pvs=74'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'
        >{`Notion 문서`}</a>
        로 관리하며 체계적으로 협업했어요.
      </div>

      <div className='text-[16px] font-bold mt-5'>인증 및 권한 관리</div>
      <div>
        회원가입 시 학교 이메일 계정으로 인증 메일을 발송하고, 인증을 완료한 유저만 지원서를 작성할 수 있도록 했어요. 로그인한 유저 관리에서는 JWT 토큰을 활용해 인증과 권한 분리를 구현했어요. 운영진
        계정과 일반 사용자 계정을 구분하여, 관리자 전용 컴포넌트는 별도의 JWT 권한 체크로 분기하여 디자인했어요.
      </div>

      <div className='text-[16px] font-bold mt-5'></div>
      <div>
        회원가입 시 학교 이메일 계정으로 인증 메일을 발송하고, 인증을 완료한 유저만 지원서를 작성할 수 있도록 했어요. 로그인한 유저 관리에서는 JWT 토큰을 활용해 인증과 권한 분리를 구현했어요. 운영진
        계정과 일반 사용자 계정을 구분하여, 관리자 전용 컴포넌트는 별도의 JWT 권한 체크로 분기하여 디자인했어요.
      </div>
    </div>
  )
}
