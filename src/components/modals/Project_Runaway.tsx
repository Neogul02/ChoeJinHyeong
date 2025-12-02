import Image from 'next/image'
import SectionLine from '../SectionLine'

export default function Project_Runaway() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-xl md:text-[24px] font-bold mb-2'>Runaway: 재난상황 대피소 제공 서비스</div>
      <div className='text-base md:text-[18px] mb-2'>2025.02 ~ 2025.04</div>
      <div className='text-sm md:text-[16px] mb-2'>Frontend 2, Backend 2</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://github.com/likelionknu/Likelion13-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub FE->`}
        </a>
        <a
          href='https://github.com/likelionknu/Likelion13-BE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub BE->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-lg md:text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2'>· 도망가자는 서울시 공공데이터 경진대회에 출품하기위해 서울시 공공데이터 API를 활용해 개발한 Android, ios 앱 프로젝트에요.</div>
        <div className='my-1 md:m-2'>· 각종 재난 상황에서 사용자의 위치를 기반으로 대피소, AED의 위치, 서울시 미세먼지, 여름철 모기지수 등 공공데이터를 앱 형태로 시각적으로 제공하는 AI 기반 스마트 재난 안내 서비스에요</div>
      </div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>프로젝트 기능 </div>

      <div className='text-sm md:text-base my-1 md:m-2'>· 서울시의 실시간 미세먼지(대기질 지수), 여름철 모기지수를 제공해요.</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· Naver Map API 기반 UI를 통해 주변 대피소 위치를 마커 형태로 제공해요.</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· AI 챗봇(CLOVA)을 연동해, 재난상황 맞춤 1:1 챗봇을 서비스해요.</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· 실시간 재난문자, 키워드 검색/필터링 기능을 제공해요.</div>

      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>React Native + Expo CLI</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· 기존 React 기반 컴포넌트 구조에 익숙했기 때문에, Expo 환경의 React Native를 선택했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· 개발 과정에서 실제 Android 공기계에 앱을 빌드해, 실시간 테스트와 디버깅을 진행하며 개발했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Naver Cloud Platform API</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· Naver Cloud Platform 에서 제공하는 API를 적극 활용했어요. NaverMapAPI를 활용해 주변 대피소 위치를 지도에 마커 형태로 표시했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2'>· CLOVA AI API를 활용해 간단한 AI 챗봇을 구현했어요. 사용자가 재난 상황에 대한 질문을 입력하면, 재난상황에 적절한 답변을 제공해요.</div>

      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>
      <div className='text-sm md:text-[16px] font-bold my-2'>
        <a
          href='https://youtube.com/shorts/RTiNDdH2Pk0'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`유튜브 영상으로 보기->`}
        </a>
      </div>
      <div className='text-[16px] font-bold my-2'>
        <a
          href='/images/runaway/도망가자-멋쟁이호랑이.pdf' // public 폴더 기준 경로
          download
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`프로젝트 발표 자료(PDF)로 보기->`}
        </a>
      </div>
      <Image
        src='/images/runaway/runaway_1.png'
        alt='Runaway_1'
        width={1920}
        height={1080}
        quality={100}
        className='w-full h-auto rounded-4xl mb-4 shadow-lg'
      />
      <Image
        src='/images/runaway/runaway_2.png'
        alt='Runaway_2'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4 shadow-lg'
      />
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>개발환경 세팅</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        Expo 환경 설정과 Android 빌드를 위한 SDK 설정, JDK 버전 호환성 문제 등, ReactNative는 웹 개발과는 달리 복잡하고 시간이 오래 걸렸어요. 초기 세팅에 어려움을 겪었지만, 설정이 완료된 이후에는 기존 웹 개발 경험을 살려 빠르게 화면을 구성하고 기능을
        구현할 수 있었어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>트러블 슈팅</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        앱 개발 도중, 기기에서 지도 화면이 빈 화면으로 표시되는 문제가 발생했어요. 원인을 파악해보니, Naver 지도 SDK가 Expo Go 환경에서는 제대로 동작하지 않는다는 문제가 있었어요. 이를 해결하기 위해 Expo EAS 빌드를 활용하여 디바이스에 직접 APK를
        배포하고 네이티브 모듈 설정을 통해 지도가 정상적으로 출력되도록 설정했어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>오픈 API의 활용</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        여러 오픈 API를 활용해 앱의 기능을 구현했어요. 다양한 API를 직접 연동하면서, 공식 문서를 빠르게 파악하고 API 호출 코드를 작성하는 능력이 크게 향상되었어요. 특히, 지도에 많은 데이터를 한 번에 표시하면 렌더링 시간이 길어지는 문제가 발생했는데,
        사용자 화면(Viewport) 기준으로 필요한 마커만 랜더링되도록 최적화해 성능을 크게 개선했어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>공모전 및 학술제에 출전</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        프로젝트 도망가자로 서울시 공공데이터 활용 공모전에 출전하며 실전 경험을 쌓았어요. 아쉽게도 수상에는 실패했지만, 실제 데이터를 기반의 협업으로 서비스를 개발한 값진 경험이였어요. 이후 교내 소프트웨어 학술제에서는 앱 UI/UX와 여러 API,
        공공데이터 활용 면에서 높은 평가를 받아 우수상을 수상했어요.
      </div>
    </div>
  )
}
