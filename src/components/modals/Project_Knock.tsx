import SectionLine from '../SectionLine'

export default function Project_Knock() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-[24px] font-bold mb-2'>Knock: 부동산 등기부등본 AI 분석 서비스</div>
      <div className='text-[18px] mb-2'>2025.07 ~ 진행 중</div>
      <div className='text-[16px] mb-2'>Frontend 1, Backend 2, AI 1</div>
      <div className='text-[16px] font-bold'>
        <a
          href='https://www.knock-knock.site/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'>
          {`Link->`}
        </a>
        <a
          href='https://github.com/Hackathon-ROKANF/Knock-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'>
          {`GitHub FE->`}
        </a>
        <a
          href='https://github.com/Hackathon-ROKANF/KnockAI'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline m-2'>
          {`GitHub AI->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-[16px] mb-2'>
        <div className='m-2'>· 2025 멋쟁이사자처럼 해커톤에 제출한 부동산 등기부등본 AI 분석 서비스에요.</div>
        <div className='m-2'>· 복잡한 등기부등본을 AI가 분석하여 부동산 거래의 위험도를 쉽게 파악할 수 있는 웹 애플리케이션이에요.</div>
        <div className='m-2'>{`· 팀 '물땅참'으로 참여하여 일반인도 쉽게 이해할 수 있도록 위험도를 시각화해주는 서비스를 개발했어요.`}</div>
      </div>
      <SectionLine />
      <div className='text-[20px] font-bold my-2'>프로젝트 기능</div>
      <div className='text-[16px] mb-2'>
        <div className='m-2'>
          · <strong>등기부등본 업로드 및 분석</strong>: PDF 드래그 앤 드롭으로 업로드하면 AI가 약 30초만에 자동 분석해요.
        </div>
        <div className='m-2'>
          · <strong>위험도 시각화</strong>: 0-100% 척도로 위험도를 제공하고 애니메이션 원형 차트로 직관적으로 표시해요.
        </div>
        <div className='m-2'>
          · <strong>전문가 상담 연계</strong>: 분석 결과를 바탕으로 필요시 전문가와 직접 상담할 수 있어요.
        </div>
        <div className='m-2'>
          · <strong>사용자 가이드</strong>: 등기부등본 발급 방법과 어려운 부동산 용어를 쉽게 설명해요.
        </div>
      </div>
      <SectionLine />
      <div className='text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>

      <div className='text-[16px] font-bold my-2'>
        <a
          href='/images/knock/강남대학교_물땅참_Knock.pdf' // public 폴더 기준 경로
          download
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#3182f6] hover:underline'>
          {`프로젝트 발표 자료(PDF)로 보기->`}
        </a>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 '>
        <div className='flex flex-col items-center'>
          <div className='text-[18px] font-semibold mb-2'>Web</div>
          <img
            src='/images/knock/웹 시연.gif'
            alt='Knock 웹 시연'
            className='h-auto rounded-4xl'
          />
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-[18px] font-semibold mb-2'>Mobile</div>
          <img
            src='/images/knock/폰 시연.gif'
            alt='Knock 모바일 시연'
            className='w-2/5 h-auto rounded-4xl'
          />
        </div>
      </div>
      <SectionLine />
      <div className='text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-[16px] font-bold ml-2'>React + TypeScript</div>
      <div className='ml-2'>· 반응형 웹 애플리케이션 구현을 위해 React를 사용했고, TypeScript로 타입 안전성을 보장하여 안정적인 파일 업로드와 분석 결과 표시 기능을 구현했어요.</div>
      <div className='text-[16px] font-bold mt-5 ml-2'>TanStack Query</div>
      <div className='ml-2'>· 서버 상태 관리와 데이터 페칭을 위해 TanStack Query를 사용하여 파일 업로드, AI 분석 요청, 결과 조회 등의 비동기 처리를 효율적으로 관리했어요.</div>
      <div className='text-[16px] font-bold mt-5 ml-2'>Python Flask</div>
      <div className='ml-2'>· 백엔드 API 서버 구축을 위해 Python Flask를 사용하여 PDF 업로드, 파일 검증, AI 분석 요청 처리를 안정적으로 구현했어요.</div>
      <div className='text-[16px] font-bold mt-5 ml-2'>AI 모델 (등기부등본 분석)</div>
      <div className='ml-2'>· 등기부등본 PDF 파싱과 텍스트 분석을 위한 AI 모델을 활용하여 표제부, 갑구, 을구 정보를 자동으로 분석하고 위험도를 산출해요.</div>
      <div className='text-[16px] font-bold mt-5 ml-2'>Tailwind</div>
      <div className='ml-2'>· 드래그 앤 드롭, 원형 차트, 모달 등 직관적인 UI/UX 구현을 위해 Tailwind CSS를 활용하여 반응형 디자인을 구현했어요.</div>

      <SectionLine />
      <div className='text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>

      <div className='text-[16px] font-bold mt-5 m-2'>AI 모델 최적화</div>
      <div className='m-2'>· 등기부등본 PDF 파싱과 텍스트 분석을 위한 AI 모델을 최적화하여 정확한 위험도 분석을 구현했어요.</div>
      <div className='m-2'>· 표제부, 갑구, 을구 각 섹션별 가중치를 조정하여 실제 부동산 거래에 유용한 위험도 지표를 제공해요.</div>

      <div className='text-[16px] font-bold mt-5 m-2'>팀 협업 및 역할 분담</div>
      <div className='m-2'>· 프론트엔드 1명(본인), 백엔드 2명, AI 1명으로 구성된 총 4명의 팀에서 개발을 진행했어요.</div>
      <div className='m-2'>· 프론트엔드 파트를 전담하여 파일 업로드, AI 분석 결과 시각화, 사용자 인터페이스까지 전체 프론트엔드 개발을 책임졌어요.</div>

      <div className='text-[16px] font-bold mt-5 ml-2'>프론트엔드 개발 경험</div>
      <div className='m-2'>· 토스와 최신 UI/UX 디자인 레퍼런스를 참고하여 직관적이고 모던한 인터페이스를 설계했어요.</div>
      <div className='m-2'>· 일관된 디자인 시스템과 버튼, 색상, 타이포그래피를 통해 사용자 경험을 최대한 편리하도록 고려했어요.</div>
      <div className='m-2'>· 복잡한 등기부등본 분석 과정을 단순하고 직관적인 플로우로 만드는 것이 힘들었지만 매우 재미있는 도전이었어요.</div>

      <div className='text-[16px] font-bold mt-5 ml-2'>사용자 경험 개선</div>
      <div className='m-2'>· 드래그 앤 드롭 업로드, 실시간 분석 진행률, 애니메이션 차트 등 사용자 친화적인 인터페이스를 구현했어요.</div>
      <div className='m-2'>· 반응형 디자인을 통해 데스크탑과 모바일 모든 환경에서 일관된 사용자 경험을 제공했어요.</div>
    </div>
  )
}
