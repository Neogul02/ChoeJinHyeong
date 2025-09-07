// 기술 스택
export default function Activities() {
  return (
    <section>
      {/* Meta 인턴십 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>Intern In Meta</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2025.07 ~ 2025.08</div>
            <div className='font-light'>응용SW개발 파트</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              <br />· React Hooks, Recoil 상태관리를 활용한 효율적인 컴포넌트 설계 및 상태 관리
              <br />
              <br />· JEST를 이용한 단위 테스트 작성 및 Storybook을 통한 컴포넌트 테스트 환경 구축
              <br />
              <br />· GitHub Pages, Netlify를 활용한 배포 및 CI/CD 파이프라인 학습
              <br />
              <br />· Agile Scrum 기법과 Kanban 보드를 사용한 프로젝트 관리, Git Flow 브랜치 전략 적용
            </div>
          </div>
        </div>
      </div>

      {/* 멋사 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>멋쟁이사자처럼 13기</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2024.11 ~ 활동 중</div>
            <div className='font-light'>프론트엔드팀·운영진</div>
            <div className='font-light'>2025 강남대학교 우수 동아리상 수상</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              · 강남대학교 멋쟁이사자처럼 13기 프론트엔드 파트 운영진으로 활동
              <br />
              <br />· 매주 목요일 아기사자들에게 개발 지식을 공유하는
              <br />
              <a
                href='https://bit.ly/4lKIXPW'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3182f6] hover:underline m-2'>
                프론트엔드 세션 자료
              </a>
              를 직접 기획, 제작 및 운영 <br />
              <br />· 대학 연합 아이디어톤, 해커톤에 참여 및 진행, 팀원들과 협업하며 실전 프로젝트 경험을 쌓음
            </div>
          </div>
        </div>
      </div>

      {/* 경기청년 갭이어 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>경기청년 갭이어</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2024.05 ~ 2024.11</div>
            <div className='font-light'>경기도일자리재단 - 개인</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              · 경기도 일자리재단 주관, 경기청년 갭이어 프로젝트에 개인으로 참여 <br />
              <br />· React, TypeScript, SpringBoot 등 주요 기술스택을 공부할 수있는 기회가 되었음
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
