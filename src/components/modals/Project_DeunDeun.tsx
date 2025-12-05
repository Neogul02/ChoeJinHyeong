import Image from 'next/image'
import SectionLine from '@/components/ui/tools/SectionLine'

export default function Project_DeunDeun() {
  return (
    <div>
      <div className='text-xl md:text-[24px] font-bold mb-2'>DeunDeun: 결식아동 지원 가맹점 통합 서비스</div>
      <div className='text-base md:text-[18px] mb-2'>2024.10 ~ 2024.12</div>
      <div className='text-sm md:text-[16px] mb-2'>Frontend 2, Backend 2, Design 1</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://deundeun.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Link->`}
        </a>
        <a
          href='https://github.com/GanziTongTong/Deundeun-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub ->`}
        </a>
      </div>
      <br />
      <br />
      <div className='text-lg md:text-[20px] font-bold my-2'>👋 이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · 멋쟁이사자처럼 12개교 연합 해커톤 <strong>간지톤(干支thon)</strong>에서 <strong>공공데이터를 활용한 사회적 문제 해결</strong>이 주제였어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 결식아동 급식카드 사용자들이 겪는 실질적인 불편함과 심리적 어려움을 해소하는 것을 목표로 기획하고 개발했어요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 지자체 및 비영리 단체의 결식아동 지원 서비스를 한곳에 모아 다양한 가맹점 정보를 통합해 확인 할 수 있도록 지원해요.</div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🎉 프로젝트 기능</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>공공데이터 통합:</strong> 정부의 아동급식카드 가맹점과 비영리 단체인 좋은이웃가게, 선한영향력가게 등의 데이터를 통합해 제공해요. 개발 기간 상 경기도에서 인구가 제일 많은 수원시 한정으로 API를 받아 처리했어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>카카오맵 통합:</strong> 실시간 위치 기반으로 주변 식당을 검색하고, 클러스터링으로 많은 매장도 한눈에 확인할 수 있어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>영수증 인증:</strong> Upstage AI를 활용한 영수증 업로드 및 검증으로 실제 방문을 인증해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>리뷰 시스템:</strong> 키워드 기반 리뷰(맛있어요, 재료가 신선해요 등)와 최대 5장의 이미지를 업로드하고 저장할 수 있어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>우리 동네 랭킹 시스템:</strong> 우리집 근처 인기 식당 TOP5를 확인하고, 카테고리별 필터링이 가능해요.
        </div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold mb-2'>🌊 프로젝트 프리뷰</div>

      <div className='text-sm md:text-[16px] font-bold my-2'>
        <a
          href='https://drive.google.com/file/d/10m202urdEAFX27mhZUcxdGQXJt7PsKSf/view?usp=drive_link'
          download
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`프로젝트 발표 자료(PDF)로 보기->`}
        </a>
      </div>
      <Image
        src='/images/deundeun/deundeun_1.png'
        alt='deundeun_1'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <Image
        src='/images/deundeun/deundeun_2.png'
        alt='deundeun_map'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <Image
        src='/images/deundeun/deundeun_3.png'
        alt='deundeun_map'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>💻 다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>React + TypeScript + Vite</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 빠른 개발 속도와 HMR(Hot Module Replacement)을 위해 Vite를 선택했어요. 해커톤 일정에 맞춰 신속한 프로토타이핑이 가능했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Zustand</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 가볍고 직관적인 상태관리를 위해 Zustand를 사용했어요. Redux보다 보일러플레이트가 적어 빠른 개발에 적합했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Tailwind CSS + Framer Motion</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Tailwind CSS로 일관된 디자인 시스템을 구축하고, Framer Motion으로 페이지 전환 애니메이션을 구현해 사용자 경험을 개선했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Kakao Maps API</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 카카오맵 API를 활용해 위치 기반 서비스를 구현했으며, 클러스터링 기능으로 많은 마커도 효율적으로 표시했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Upstage AI</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Upstage의 Document OCR API를 사용해 영수증 이미지에서 텍스트를 추출하고 검증하는 기능을 구현했어요.</div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🚀 어떻게 개발했을까요?</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 my-1 md:m-2 ml-1 md:ml-2'>개발 프로세스</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 공공데이터를 활용한 기획들은 너무 진부한 내용들이 많아 주제를 정하고 기획하는데 많은 시간을 들였고, 짧은 해커톤 일정 속에서 매일 새벽까지 디스코드 회의를 하며 개발했어요</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · 프론트엔드를 개발을 처음하는 팀원과 역할을 분담해 개발했어요, 저는 메인 화면과, 백엔드 API 연동, 영수증 인증 페이지 등 난이도 있는 부분을 담당했으며 다른 팀원은 기본적인 레이아웃과 세부 스타일링을 담당했고 서로 코드 작성 이후에 코드리뷰와
        피드백을 하며 협업했어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>모바일 반응형 디자인</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 주요 사용자층이 모바일 사용자임을 고려해 모바일 환경을 우선해 개발했어요. Tailwind의 반응형 유틸리티를 활용해 데스크톱과 모바일 모두에서 최적화된 UI를 제공했어요.</div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>✨ 트러블 슈팅</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>카카오맵 마커 성능 개선</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 초기에는 모든 식당 위,경도를 하나하나 마커로 개별적으로 렌더링해 성능 저하가 발생했어요. 카카오맵의 커스텀 클러스터 라이브러리를 적용해 줌 레벨에 따라 마커를 그룹화하여 랜더링 성능과 UX를 개선했어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>영수증 인증 API 응답 시간</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 기존 백엔드에 연동해 Upstage OCR API를 요청했었는데 응답 시간이 3-5초 소요되어 사용자 경험이 저하되었어요. 때문에 백엔드에서 로직을 처리하지말고 프론트에서 OCR API 요청을 바로 보내 처리하도록 변경해 응답 시간을 1-2초로 단축했어요.
      </div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🏆 수상 내역</div>

      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 멋쟁이사자처럼 대학 연합 해커톤 <strong>간지톤(干支thon)</strong>에서 14팀 중 <strong>3등, 우수상</strong>을 수상했어요.
      </div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>·심사위원분들께서 실제 기업에 적용한다면 자선적인 측면에서 이런 서비스는 기업 이미지에 큰 도움이 될것같아 충분히 가치있는 프로젝트라고 평가해주셨어요.</div>
      <Image
        src='/images/deundeun/deundeun_award.png'
        alt='deundeun_award'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
    </div>
  )
}
