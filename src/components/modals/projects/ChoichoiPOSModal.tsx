import Image from 'next/image'
import SectionLine from '@/components/ui/tools/SectionLine'

export default function ChoichoiPOSModal() {
  return (
    <div>
      <div className='text-xl md:text-[24px] font-bold mb-2'>choichoi POS</div>
      <div className='text-base md:text-[18px] mb-2'>2026.04 ~ 진행 중</div>
      <div className='text-sm md:text-[16px] mb-2'>개인 프로젝트 (기획·개발 1인)</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://github.com/Neogul02/choichoi'
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
          · 카페·베이커리 팝업스토어를 실제로 운영하면서 필요해진 웹 기반 POS 시스템이에요. 처음엔 빵 8종의 판매 수량과 합계만 보여주는 간단한 주문 요약 화면이었는데, 실제 매장을 운영하며 필요한 기능이 하나씩 늘어나 지금은 캐셔·재고·근무 스케줄·급여·근로계약서까지 다루는 풀스택 운영 시스템이 됐어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · 기획부터 설계, 개발, 실제 팝업 매장 배포·운영까지 혼자 담당했고, 매일 매장에서 쓰면서 발견한 버그와 불편한 점을 바로바로 고쳐나가는 방식으로 개발하고 있어요.
        </div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🎉 프로젝트 기능</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>POS 캐셔 화면:</strong> 터치와 키보드 단축키(1~9) 모두로 메뉴를 선택해 빠르게 주문을 처리해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>고객 실시간 디스플레이:</strong> Supabase Realtime Broadcast로 캐셔 화면의 장바구니를 손님용 화면에 그대로 미러링하고, 결제 완료 시 컨페티 애니메이션을 보여줘요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>재고 관리:</strong> 식재료를 봉/박스 단위로 등록하고 레시피(메뉴↔재료 매핑)를 걸어두면 주문마다 자동으로 재고가 차감돼요. 입고는 수동으로 기록해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>일정·급여 관리:</strong> 팝업 행사별로 근무자를 배정하고, 자동배정 알고리즘과 드래그 배치 그리드를 제공해요. 근무 시간을 기준으로 급여 계산서를 자동 생성해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>근로계약서 전자서명:</strong> 표준근로계약서 양식을 서버에서 PDF로 렌더링하고, 근로자는 캔버스에 직접 서명해 계약을 완료해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>AI 매출 분석:</strong> Gemini 2.5 Flash로 팝업별 매출 데이터를 운영 인사이트 텍스트로 요약해줘요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>어드민 통계:</strong> 오늘 매출, 메뉴별·시간대별 분석, 월간 캘린더, 팝업별 정산까지 한눈에 확인할 수 있어요.
        </div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold mb-2'>🌊 프로젝트 프리뷰</div>
      <Image
        src='/images/choichoipos/choichoipos_pos.png'
        alt='choichoi POS 캐셔 화면'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <Image
        src='/images/choichoipos/choichoipos_stats.png'
        alt='choichoi POS 매출 통계'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <Image
        src='/images/choichoipos/choichoipos_schedule.png'
        alt='choichoi POS 일정 관리'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <Image
        src='/images/choichoipos/choichoipos_inventory.png'
        alt='choichoi POS 재고 관리'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>💻 다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>Next.js 16 (App Router) + Server Actions</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · DB 호출을 전부 Server Actions로 통일해서 별도 API 서버 없이 함수 호출처럼 데이터를 다뤄요. `wrap()` 헬퍼 하나로 모든 에러를 일관된 응답 형태로 처리해요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Supabase (PostgreSQL + Auth + Realtime)</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · 인증은 직원·관리자 모두 Supabase Auth 계정으로 통일하고 역할(role)로 권한을 구분해요. 캐셔-디스플레이 간 실시간 카트 동기화는 DB 저장 없이 Realtime Broadcast로 처리해서 Vercel 서버리스 환경과 완전히 호환돼요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>TanStack Query v5</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 서버 상태를 관리하며 낙관적 업데이트(optimistic update)와 쿼리 캐시 무효화로 즉각적인 화면 반응을 만들었어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>@react-pdf/renderer</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 근로계약서를 서버에서 PDF로 렌더링하고, 작성 화면의 미리보기도 동일한 컴포넌트를 재사용해 최종 PDF와 시각적으로 완전히 일치하도록 만들었어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Google Gemini 2.5 Flash</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 팝업 매출 데이터를 운영 인사이트 텍스트로 요약해주는 AI 분석 기능에 사용했어요.</div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🚀 어떻게 개발했을까요?</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>실제 운영 속에서 커진 프로젝트</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · 빵 8종의 판매 수량만 세는 간단한 React 앱으로 시작했다가, 실제 팝업 매장을 운영하면서 재고·인력·정산이 전부 필요해져 Next.js 16 + Supabase 기반으로 다시 설계했어요. 기획, DB 스키마, 인증·권한, 실시간 동기화, 배포까지 전 과정을 혼자 진행했어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>도메인별 Server Actions 분리</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · `app/actions/`를 menu·orders·stats·inventory·schedule·workers·contracts·gemini 등 도메인별 파일로 나눠서 관심사를 분리했어요. 서버 액션은 페이지 미들웨어(`proxy.ts`)와 별개로 직접 호출이 가능하다는 걸 인지하고, 공용 `requireAdmin()` / `requireManagerOrAdmin()` 헬퍼로 액션 레벨에서도 권한을 검증하도록 설계했어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>클라이언트·서버 키 격리</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · Supabase 클라이언트를 용도별로 4개 모듈(`supabase-browser`, `supabase-server`, `supabase-admin`, `supabase`)로 나눴어요. 특히 RLS를 우회하는 service role 키는 `supabase-admin.ts` 한 파일로만 격리해서 클라이언트 번들에 절대 포함되지 않도록 물리적으로 막았어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>소프트 딜리트로 정합성 보존</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 메뉴를 삭제해도 과거 주문의 FK가 깨지지 않도록 `is_active = false`로 처리하는 소프트 딜리트를 적용해서 매출 통계 집계가 항상 정확하게 유지되도록 했어요.</div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>✨ 트러블 슈팅</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>서버 액션 68개에 권한 검증 누락 — 미들웨어 우회 가능</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · `proxy.ts` 미들웨어는 페이지 진입만 막을 뿐, Server Action 자체는 별도 엔드포인트라 보호되지 않는다는 걸 뒤늦게 발견했어요. 전체 액션 함수를 페이지별 권한 요구사항 기준으로 재분류해 대조한 결과 68개 함수에 검증이 아예 없었고, 그중 근로계약서 서명 URL을 인증 없이 workerId만으로 조회할 수 있는 가장 심각한 케이스도 있었어요. 공용 `requireAdmin()` / `requireManagerOrAdmin()` 헬퍼를 만들어 해당 함수 전체에 적용하고, 정상 인증된 요청의 동작은 전혀 바꾸지 않으면서 미인증 요청만 차단하도록 고쳤어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>재고 입고 동시성 버그</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 재고 입고를 select → JS에서 계산 → update 3단계로 처리하고 있어서, 동시에 두 번 입고하면 뒤에 처리된 요청이 앞의 변경분을 덮어써 수량이 유실될 수 있었어요. Postgres RPC(`apply_restock`)로 델타 갱신을 원자화해서 동시 요청에도 수량이 정확히 누적되도록 고쳤어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>주문 부분 실패 시 유령 주문</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 주문 생성이 `orders`와 `order_items`를 트랜잭션 없이 따로 insert하다 보니, 후자가 실패하면 캐셔 화면에는 "결제 실패"로 보이는데 항목 없는 주문 행만 DB에 남아 매출 통계에 잡히는 문제가 있었어요. `order_items` insert가 실패하면 방금 만든 `orders` 행을 즉시 삭제해서, 실패가 실제로 아무 일도 없었던 상태가 되도록 정합성을 맞췄어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>급여 데이터 인증 체크 누락</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 같은 파일 안에 있던 `fetchStaffMonthlyDetail`은 권한 검증이 있었는데, 전 직원의 이름·연락처·계좌번호·시급을 반환하는 `fetchMonthlyPayroll`은 검증이 빠져 있었어요. 페이지 진입은 관리자 레이아웃으로 막혀 있었지만 액션은 직접 호출이 가능했기 때문에 실제로는 인증 없이 호출할 수 있는 상태였어요. 같은 파일의 기존 검증 패턴을 그대로 적용해서 막았어요.
      </div>
    </div>
  )
}
