// 기술 스택
export default function Education() {
  return (
    <section>
      {/* SSAFY */}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-16 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>SSAFY 15기</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2026.01 ~ 진행 중</div>
            <div className='font-light'>Samsung SW·AI academy For Youth - Java Track</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3 pr-4 md:pr-15'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>
              · SSAFY 자치회, 서울 14반 반장 <br />
              · 1월 월간 베스트 싸피 교육생 선정 <br />
            </div>
          </div>
        </div>
      </div>

      {/* 강남대학교 */}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-16 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>강남대학교</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2020.03 ~ 2026.02</div>
            <div className='font-light'>Engineering Department of Software</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3 pr-4 md:pr-15'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>
              · GPA 3.92 / 4.5 <br />
              · 4-8학기 연속 성적 우수,학년 수석 <br />
            </div>
          </div>
        </div>
      </div>

      {/* 고등학교 */}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-16 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>동두천고등학교</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2017.03 ~ 2020.01</div>
            {/* <div className='font-light'>자연계열</div> */}
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3 pr-4 md:pr-15'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>
              {`· 동두천고등학교 IT 동아리 '로봇빌' 개발 팀장`}
              <br />
              {`· 고교-대학 연계사업, 신한대 웹 개발 수업 수강`}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
