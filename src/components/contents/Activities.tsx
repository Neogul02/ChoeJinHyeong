// 기술 스택
export default function Activities() {
  return (
    <section>
      {/* 멋사 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>멋쟁이 사자처럼</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2024.11 ~ 활동 중</div>
            <div className='font-light'>프론트엔드팀·운영진</div>
            <div className='font-light'>2025 강남대학교 우수 동아리상 수상</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              · 강남대학교 멋쟁이사자처럼 13기 프론트엔드 파트 운영진으로 활동함 <br />
              <br />
              · 매 주 아기사자들에게 웹개발 지식을 교육하는 세션 자료를 직접 제작 및 운영함 <br />
              <br />· 대학 연합 아이디어톤, 해커톤에 참여 및 진행, 다양한 배경을 가진 팀원들과 협업하고 실전 프로젝트 경험을 쌓음
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
              <br />· React, TypeScript 등 주요 기술스택을 공부할 수있는 기회가 되었으며, 자기주도형 미니 프로젝트를 실시함
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
