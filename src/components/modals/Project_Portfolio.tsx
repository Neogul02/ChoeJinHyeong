import Image from 'next/image'
import SectionLine from '../SectionLine'

export default function Project_Portfolio() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-xl md:text-[24px] font-bold mb-2'>Portfolio</div>
      <div className='text-base md:text-[18px] mb-2'>2025.05 ~ 2025.07 / 디벨롭 중 </div>
      <div className='text-sm md:text-[16px] mb-2'>개인 프로젝트</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://choe-jinhyeong.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Link->`}
        </a>
        <a
          href='https://neogul02.tistory.com/39'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Blog->`}
        </a>
        <a
          href='https://github.com/Neogul02/ChoeJinHyeong'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>

      <div className='text-lg md:text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2'>지금, 이 글을 보고 있는 사이트에요. 제가 개발자가 되기 위해 노력했던 흔적과 경험을 최대한 보기 쉽게 정리해 보았어요. 개발자로 활동하는 동안의 모든 경험을 이 사이트에 담아가며 지속적으로 디벨롭할 예정이에요.</div>
      </div>
      <SectionLine />

      <div className='text-lg md:text-[20px] font-bold my-2'>프로젝트 기능 </div>
      <div className='text-sm md:text-[16px] mb-2 ml-1 md:ml-2'>· 자기 소개, 기술 스택, 프로젝트 포트폴리오, 학력, 경력 사항을 한 눈에 볼 수 있는 종합 포트폴리오 웹 서비스를 제공해요.</div>
      <SectionLine />

      <div className='text-lg md:text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>Next.js + TypeScript</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· SEO와 초기 렌더링 속도, 그리고 사용자 경험(UX)까지 모두 고려해, SSR과 CSR을 하이브리드로 사용할 수 있는 Next.js를 사용했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· TypeScript 도입으로 코드 타입 안정성을 확보하고, 컴포넌트 기반 구조를 설계해 재사용성과 유지보수성을 높였어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Tailwind CSS</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 빠른 UI 구현과 일관성 있는 디자인 시스템을 위해 Tailwind CSS를 공부하며 바로 사용했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 반응형 디자인, 다크/라이트 모드 지원 등 css파일 없이 다양한 UI 요구 사항을 쉽고 효율적으로 처리했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Zustand</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· tailwind css에서 지원하는 기능으로만 완전한 다크/라이트모드를 구현하기는 어려웠어요. 때문에 전역 상태 관리툴로 Zustand를 활용해 테마별로 컴포넌트의 스타일을 관리했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Vercel</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 배포 및 프리뷰 환경은 Vercel을 통해 운영했습니다. GitHub과 연동해 코드 변경사항을 실시간으로 배포 화면에서 바로 확인할 수 있어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· GitHub 연동 및 자동 배포 파이프라인을 구축해, 코드 변경 시마다 실시간으로 최신 배포본을 바로 확인할 수 있어요.</div>
      <SectionLine />

      <div className='text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>
      <Image
        src='/images/portfolio/portfolio_preview.gif'
        alt='portfolio_main'
        width={600}
        height={400}
        className='w-full h-auto rounded-4xl mb-4 shadow-lg '
        loading='lazy'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
        <Image
          src='/images/portfolio/portfolio_wireframe.png'
          alt='portfolio_wireframe'
          width={1580}
          height={1370}
          className='w-full h-auto rounded-4xlshadow-lg '
          loading='lazy'
        />
        <Image
          src='/images/portfolio/portfolio_figma.png'
          alt='portfolio_figma'
          width={1580}
          height={1370}
          className='w-full h-auto rounded-4xl shadow-lg '
          loading='lazy'
        />
      </div>
      <Image
        src='/images/portfolio/portfolio_designSystem.png'
        alt='portfolio_designSystem'
        width={1280}
        height={720}
        quality={100}
        className='w-full rounded-4xl mb-8 shadow-lg '
        loading='lazy'
      />
      <SectionLine />

      <div className='text-lg md:text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>다른 템플릿을 사용하지 않은 이유</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        기존 노션이나 다른 템플릿의 포트폴리오가 아닌, 저만의 포트폴리오를 직접 구현해 보여주는것이 더욱 경쟁력있다고 생각해 개발하게 되었어요. 피그마를 사용해 와이어프레임과 디자인 시스템까지 시각화 한후 디자인을 진행했어요. 컴포넌트 구조를
        설계했어요. 반응형 디자인과 다크모드를 고려한 UI/UX를 구현하며, 성능 최적화와 SEO를 중점으로 개발을 진행했어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>사용자 경험 개선</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        라이트/다크 모드 지원으로 사용자 선호도에 맞는 환경을 제공하고자 했어요. 방문자가 쉽게 정보를 찾을 수 있도록 직관적인 nav바 네비게이션과 애니메이션 효과를 적용했어요. 화면 위에 창을 올려 보여주는 모달 시스템으로 분리해 각 프로젝트 별 상세
        정보를 효과적으로 전달하고, 반복적으로 사용되는 포맷과 UI 요소들은 컴포넌트로 분리해 코드의 재사용성과 유지보수성을 높였어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>지속적인 업데이트</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        개인 포트폴리오로서 지속적으로 새로운 프로젝트와 기술 스택을 추가하며 업데이트하고 있어요. 방문자 피드백을 반영하여 사용자 경험을 개선하고, 최신 웹 기술을 적용해 포트폴리오의 완성도를 높여가고 있어요. 추후 Playground 페이지를 구현해 웹의
        실험적인 기능을 체험해 볼 수 있도록 기획하고 있어요.
      </div>
    </div>
  )
}
