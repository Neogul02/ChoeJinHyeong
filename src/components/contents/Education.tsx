// 기술 스택
export default function Education() {
  return (
    <section>
      {/* 멋사 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>강남대학교</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2020.03 ~ 2026.02 졸업 예정</div>
            <div className='font-light'>소프트웨어학과</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              · 전공학점 4.08/4.5 <br />
              · 4-8학기 연속 성적 우수 장학생 선발 <br />
            </div>
          </div>
        </div>
      </div>

      {/* 경기청년 갭이어 */}
      <div className='flex flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>동두천고등학교</div>
          <div className='text-[16px] font-bold ml-3'>
            <div>2017.03 ~ 2020.01 졸업</div>
            <div className='font-light'>자연계열</div>
          </div>
        </div>
        <div className='w-1/2 pl-5 pt-3 pr-15'>
          <div className='text-[16px] font-medium '>
            <div>
              · 동두천고등학교 IT 동아리 ‘로봇빌’ 개발 팀장
              <br />· 고교-대학 연계사업, 신한대 공학 수업 수강
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
