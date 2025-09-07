import React from 'react'
import CustomRotatingIntro from '@/components/CustomRotatingIntro'

export default function About() {
  return (
    <main className='min-h-screen relative animate-fadeIn'>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
        {/* 텍스트 영역 */}
        <div className='flex-1 z-10 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </div>

        {/* 프로필 이미지 */}
        <div className='mb-4 md:mb-4 md:ml-8'>
          <img
            src='/images/profile.png'
            alt='Profile_Image'
            className='
              w-[280px]
              h-[280px]
              object-cover
            '
          />
        </div>
      </section>

      {/* <section className='flex flex-col justify-center my-20'>
        <p className='text-center text-base font-semibold md:text-[20px] leading-relaxed'>안녕하세요! 더 자세한 저의 이야기를 들려드릴게요.</p>
      </section> */}

      <section className='flex flex-col text-[22px] font-bold p-[16px] max-w-5xl mx-auto'>
        <div>
          Name. <span className='font-light'>최진형 </span>
        </div>

        <div>
          Email. <span className='font-light'>wlsgud2414@naver.com</span>
        </div>

        <div>
          Residence. <span className='font-light'>Seoul, South Korea </span>
        </div>
      </section>

      {/* <section className='max-w-5xl mx-auto mt-12 mb-12 px-4'>
        <SectionLine text='개발자가 되기까지의 스토리' />
        <div className='my-10'>
          <div className='text-[20px] font-bold mb-4'>어떻게 개발의 세계에 발을 들였을까요?</div>
          <div className='text-[16px] leading-relaxed space-y-4'>
            <p>• 대학에서 컴퓨터공학을 전공하며 처음 코딩을 접했지만, 처음에는 단순히 과제를 위한 도구 정도로만 생각했어요.</p>
            <p>• 하지만 첫 웹사이트를 만들어보면서 코드가 실제 화면으로 구현되는 순간의 감동을 느꼈고, 그때부터 개발에 진심으로 빠져들게 되었어요.</p>
            <p>• 특히 사용자가 직접 보고 만질 수 있는 인터페이스를 만드는 것에 매력을 느껴 프론트엔드 개발자의 길을 선택하게 되었어요.</p>
          </div>
        </div>

        <SectionLineDivided text='개발 철학과 가치관' />
        <div className='my-10'>
          <div className='text-[20px] font-bold mb-4'>저만의 개발 철학이 있어요</div>
          <div className='text-[16px] leading-relaxed space-y-4'>
            <p>
              • <strong>사용자 중심 사고</strong>: 기술은 도구일 뿐, 개발의 목표는 사람에게 닿는 경험이라 생각해요.
            </p>
            <p>
              • <strong>꾸준한 성장</strong>: 빠르게 변하는 기술 트렌드에 맞춰 지속적으로 학습하고 적응하려 노력해요.
            </p>
            <p>
              • <strong>협업의 가치</strong>: 혼자서는 할 수 없는 것들을 팀과 함께 만들어가는 과정에서 큰 보람을 느껴요.
            </p>
          </div>
        </div>

        <SectionLineDivided text='왜 프론트엔드 개발일까요?' />
        <div className='my-10'>
          <div className='text-[20px] font-bold mb-4'>프론트엔드 개발을 선택한 이유</div>
          <div className='text-[16px] leading-relaxed space-y-4'>
            <p>
              • <strong>즉각적인 피드백</strong>: 코드를 작성하면 바로 시각적인 결과를 확인할 수 있어서 재미있어요.
            </p>
            <p>
              • <strong>사용자와의 접점</strong>: 실제 사용자가 제품을 어떻게 경험하는지 직접 관찰하고 개선할 수 있어요.
            </p>
            <p>
              • <strong>창의성과 기술의 조화</strong>: 디자인적 감각과 기술적 구현 능력을 모두 발휘할 수 있는 분야라고 생각해요.
            </p>
            <p>
              • <strong>끊임없는 발전</strong>: 새로운 프레임워크와 도구들이 계속 나오면서 항상 배울 것이 많아 지루하지 않아요.
            </p>
          </div>
        </div>

        <SectionLineDivided text='취미와 관심사' />
        <div className='my-10'>
          <div className='text-[20px] font-bold mb-4'>개발 외의 시간은 이렇게 보내요</div>
          <div className='text-[16px] leading-relaxed space-y-4'>
            <p>
              • <strong>독서</strong>: 기술서적 뿐만 아니라 인문학, 자기계발서 등 다양한 분야의 책을 읽으며 시야를 넓히려 노력해요.
            </p>
            <p>
              • <strong>운동</strong>: 규칙적인 운동을 통해 체력 관리를 하고, 건강한 개발자가 되기 위해 노력하고 있어요.
            </p>
            <p>
              • <strong>여행</strong>: 새로운 곳을 여행하며 다양한 문화와 사람들을 만나는 것을 좋아해요.
            </p>
            <p>
              • <strong>음악 감상</strong>: 코딩할 때나 휴식할 때 음악을 듣는 것을 좋아하며, 다양한 장르의 음악을 즐겨요.
            </p>
          </div>
        </div>

        <SectionLineDivided text='관심 분야와 앞으로의 목표' />
        <div className='my-10'>
          <div className='text-[20px] font-bold mb-4'>계속 관심을 가지고 있는 것들</div>
          <div className='text-[16px] leading-relaxed space-y-4'>
            <p>
              • <strong>사용자 경험(UX/UI)</strong>: 더 직관적이고 접근성 좋은 인터페이스를 만들기 위해 UX/UI 디자인을 공부하고 있어요.
            </p>
            <p>
              • <strong>웹 성능 최적화</strong>: 사용자에게 더 빠르고 쾌적한 경험을 제공하기 위한 성능 최적화 기술에 관심이 많아요.
            </p>
            <p>
              • <strong>최신 기술 트렌드</strong>: AI, Web3, 모바일 크로스 플랫폼 등 새로운 기술들을 꾸준히 학습하고 적용해보려 해요.
            </p>
            <p>
              • <strong>오픈소스 기여</strong>: 개발 커뮤니티에 기여하고 다른 개발자들과 지식을 나누는 것이 목표에요.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  )
}
