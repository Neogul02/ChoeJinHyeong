// 기술 스택
export default function Stack() {
  return (
    <section className='mb-12 md:mb-20'>
      {/* 근로복지공단 용인지사*/}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-10 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>근로복지공단 용인지사</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2025.03 ~ 재직 중</div>
            <div className='font-light'>가입지원부</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>· 4대보험 관련업무 처리, 전산처리</div>
            <div>· 컴퓨터 장비 수리 및 유지보수</div>
          </div>
        </div>
      </div>

      {/* 신갈우체국 */}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-10 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>경인지방우정청 신갈우체국</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2024.01 ~ 2025.03</div>
            <div className='font-light'>우편물류과</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>· 택배, 우편 관련 전산처리 및 물류 접수</div>
          </div>
        </div>
      </div>

      {/* 777 */}
      <div className='flex flex-col md:flex-row justify-between my-8 md:my-10 ml-4 md:ml-10'>
        <div className='w-full md:w-1/2 md:pr-6 mb-4 md:mb-0'>
          <div className='text-lg md:text-[22px] font-bold'>777사령부 특수정보병</div>
          <div className='text-sm md:text-[16px] font-bold ml-3'>
            <div>2021.09 ~ 2023.06</div>
            <div className='font-light'>대한민국 공군 830기</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-5 md:pt-3'>
          <div className='text-sm md:text-[16px] font-medium'>
            <div>· 군용 소프트웨어 개발 및 유지보수</div>
            <div>· 군 관련 첩보 관리 및 특수정보처리</div>
          </div>
        </div>
      </div>
    </section>
  )
}
