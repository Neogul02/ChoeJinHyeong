import Image from 'next/image'
import SectionLine from '@/components/ui/tools/SectionLine'

export default function Project_Hanamory() {
  return (
    <div>
      <div className='text-xl md:text-[24px] font-bold mb-2'>Hanamory: AI 기반 꽃 인식 및 꽃말 공유 서비스</div>
      <div className='text-base md:text-[18px] mb-2'>2025.01 ~ 2025.11</div>
      <div className='text-sm md:text-[16px] mb-2'>개인 · 캡스톤 프로젝트</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://github.com/Neogul02/Hanamory-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub FE->`}
        </a>
        <a
          href='https://github.com/Neogul02/Hanamory-BE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub BE->`}
        </a>
        <a
          href='https://capstone-hanamory.notion.site/?pvs=74'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Notion->`}
        </a>
        <a
          href='https://neogul02.tistory.com/34'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Blog->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-lg md:text-[20px] font-bold my-2'>👋 이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· Hanamory는 사용자가 촬영한 꽃 사진을 커스텀 학습한 Yolov5 AI로 자동 인식하고, 꽃말과 상세 정보를 제공하는 웹 서비스에요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 복잡한 꽃 이름을 몰라도 사진 한 장으로 즉시 꽃에 대한 정보를 얻을 수 있으며, 감성적인 이미지로 변환하여 인스타그램 등 SNS에 공유할 수 있어요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 대학 졸업작품으로 진행한 1인 풀스택 프로젝트로, YOLOv5 모델 커스텀 학습부터 Docker 기반 Cloudtype 클라우드 배포까지 전체 개발 과정을 담당했어요.</div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🎉 프로젝트 기능 </div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>간편한 꽃 사진 업로드</strong>: 드래그 앤 드롭, 클릭, 붙여넣기 등 다양한 방식으로 꽃 사진을 업로드할 수 있어요. 이미지 형식 자동 검증 및 20MB 이하 파일 크기 제한으로 안정적인 업로드를 보장해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>AI 기반 실시간 꽃 인식</strong>: YOLO 객체 인식 모델을 활용하여 사진 속 꽃을 실시간으로 인식해요. 다중 꽃 인식을 지원하여 한 장의 사진에서 여러 종류의 꽃을 동시에 분석할 수 있어요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>Gemini AI 기반 꽃 정보 제공</strong>: Google Gemini AI를 활용하여 인식된 꽃의 한국어 이름, 꽃말, 관리 방법 등 상세 정보를 제공해요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>커스터마이징 가능한 공유 이미지</strong>: 배경 스타일, 투명도, 텍스트 색상을 조절하여 자신만의 감성적인 꽃말 이미지를 만들 수 있어요. 인스타그램 스토리에 최적화된 9:16 비율로 자동 생성돼요.
        </div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · <strong>내 주변 꽃집 찾기</strong>: 카카오맵 API를 활용하여 현재 위치 기반으로 가까운 꽃집을 찾을 수 있어요.
        </div>
      </div>
      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold mb-2'>🌊 프로젝트 프리뷰</div>
      <div className='text-sm md:text-[16px] font-bold my-2'>
        <a
          href='https://drive.google.com/file/d/1fh_QNGVnCUIRBYV3uofGSfc--VXXgeXu/view?usp=drive_link'
          download
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`프로젝트 발표 자료(PDF)로 보기->`}
        </a>
      </div>
      <Image
        src='/images/hanamory/hanamory_Preview.gif'
        alt='likelion_Preview'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Image
          src='/images/hanamory/2.jpg'
          alt='likelion_F1'
          width={1920}
          height={1080}
          className='w-full h-auto rounded-4xl mb-4'
          loading='lazy'
        />
        <Image
          src='/images/hanamory/3.jpg'
          alt='likelion_F1'
          width={1920}
          height={1080}
          className='w-full h-auto rounded-4xl mb-4'
          loading='lazy'
        />
        <Image
          src='/images/hanamory/4.jpg'
          alt='likelion_Sample'
          width={300}
          height={200}
          className='w-full h-auto rounded-4xl mb-4'
          loading='lazy'
        />
      </div>
      <div className='flex justify-center'>
        <Image
          src='/images/hanamory/hanamory_F1.png'
          alt='likelion_F1'
          width={1920}
          height={1080}
          className=' rounded-4xl mb-4 u'
          loading='lazy'
        />
      </div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>💻 다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>Next.js 14 + TypeScript</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· AI 모델의 응답 시간이 상대적으로 길 수 있다는 점을 고려해, SEO 최적화와 빠른 초기 렌더링을 위해 SSR과 CSR을 하이브리드로 쉽게 적용할 수 있는 Next.js 14를 사용했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· App Router를 활용하여 API Routes를 효율적으로 관리하고, TypeScript로 타입 안정성을 확보했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>YOLOv5 Object Detection</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Roboflow에서 직접 수집하고 라벨링한 꽃 이미지 데이터셋을 기반으로, YOLOv5를 커스텀 학습해 mAP 약 0.72의 성능을 달성했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 하이퍼파라미터를 조정해가며 F1 Curve와 결과 샘플 이미지를 통해 모델 성능을 분석하고, 다중 꽃 인식이 가능하도록 바운딩 박스 시각화 기능을 구현했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Google Gemini AI</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Gemini AI를 활용하여 인식된 꽃의 한국어 이름, 꽃말, 특징, 관리 방법 등 상세 정보를 자연어로 생성해요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 프롬프트 엔지니어링을 통해 일관된 형식의 응답을 받도록 최적화했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Tailwind CSS + Framer Motion</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Tailwind CSS로 반응형 디자인 시스템을 구축하고, Framer Motion으로 부드러운 페이지 전환 애니메이션을 구현했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Zustand</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 가볍고 직관적인 전역 상태 관리를 위해 Zustand를 사용하여 이미지 업로드 상태와 인식 결과를 관리했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Flask + Docker + Cloudtype</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· YOLOv5로 학습한 AI 모델을 REST API로 배포하기 위해 Flask를 사용해 추론 서버를 구현했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · Flask 백엔드와 학습시킨 YOLOv5 모델을 하나의 Docker 컨테이너로 패키징해 Cloudtype에 배포하여 구동 환경 일관성과 유지보수성을 확보했어요. Cloudtype은 무료로 https를 제공하여 비용 효율적으로 배포할 수 있었어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Canvas API</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· HTML5 Canvas API를 활용하여 사용자가 커스터마이징한 꽃말 이미지를 실시간으로 생성하고 다운로드할 수 있도록 구현했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Kakao Maps API</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 카카오맵 API를 연동하여 사용자의 현재 위치 기반으로 주변 꽃집을 검색하고 지도에 표시하는 기능을 구현했어요.</div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🚀 어떻게 개발했을까요?</div>
      <div className='flex justify-center'>
        <Image
          src='/images/hanamory/hanamory_logic.png'
          alt='likelion_logic'
          width={1920}
          height={1080}
          className=' rounded-4xl mb-4 pt-2'
          loading='lazy'
        />
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 my-1 md:m-2 ml-1 md:ml-2'>개발 프로세스</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        1인 풀스택 개발로 프론트엔드, 백엔드, AI 모델 학습, 인프라 구축까지 모든 과정을 담당했어요. 일주일 단위로 개발 목표를 설정하고 계획한 일정에 맞춰 진행했으며, AI 모델 학습은 처음이었지만 공식문서와 참고자료를 보며 빠르게 학습하며 개발했어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 my-1 md:m-2 ml-1 md:ml-2'>AI 모델 학습 및 MLOps 파이프라인 구축</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 약 4,000장의 꽃 이미지를 수집하고 클래스별로 분류했어요. Roboflow 라벨링 툴을 활용하여 추가적인 이미지들에 대해 직접 바운딩 박스를 그리며 라벨링 작업을 수행했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 라벨링이 완료된 데이터셋으로 다양한 하이퍼파라미터를 조정해가며 여러 YOLOv5 모델을 반복 학습·평가했어요. F1 Score, mAP 등 성능 지표를 기반으로 가장 추론 성능이 우수한 모델을 선정했어요.
      </div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· Flask API 서버와 학습된 YOLOv5 모델을 Docker로 하나의 이미지로 패키징하여, 환경 의존성 문제를 해결하고 배포를 자동화했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 완성된 Docker 이미지를 Cloudtype에 배포하고, 실 서비스 환경에서 안정적으로 운영할 수 있도록 전체 파이프라인을 직접 설계·구현했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>사용자 경험 최적화</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 드래그 앤 드롭, 클립보드 붙여넣기 등 다양한 이미지 업로드 방식을 지원하여 사용자 편의성을 높였어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· Canvas API를 활용한 실시간 이미지 커스터마이징 기능으로 사용자가 직접 배경, 색상, 투명도를 조절할 수 있도록 구현했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 인스타그램 스토리에 최적화된 9:16 비율의 공유 이미지를 자동으로 생성하여 SNS 공유 경험을 개선했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>트러블 슈팅</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · <strong>크로스 플랫폼 경로 문제</strong>: Windows에서 학습한 모델의 경로 정보(WindowsPath)를 리눅스 빌드 환경에서 인식하지 못하는 문제가 발생했어요. 모델 파일을 재저장하여 경로 정보를 제거하고 상대 경로로 변경하여 해결했어요.
      </div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · <strong>배포 플랫폼 변경 (EC2 → Cloudtype)</strong>: 초기에는 AWS EC2로 Flask API 서버를 배포했지만, https 도메인 구매 비용이 부담되어 Docker 컨테이너로 패키징 후 Cloudtype으로 배포 플랫폼을 변경했어요. Cloudtype은 무료로 https를 제공하며,
        Docker 이미지 배포가 간편해 빠르게 전환할 수 있었어요.
      </div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · <strong>AI 응답 시간 최적화</strong>: Gemini AI의 응답 시간이 길어 사용자 경험이 저하되는 문제가 있었어요. 프롬프트를 최적화하고, 로딩 상태를 시각적으로 표시하여 체감 대기 시간을 줄였어요.
      </div>

      <div className='my-6 md:my-8'>
        <SectionLine />
      </div>
      <div className='text-lg md:text-[20px] font-bold my-2'>🏆 수상 내역</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · 강남대학교 캡스톤디자인 졸업작품 <strong>개인부문 최우수상</strong>을 수상했어요.
      </div>
    </div>
  )
}
