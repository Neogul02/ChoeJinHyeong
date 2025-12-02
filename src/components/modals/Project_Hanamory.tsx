import Image from 'next/image'
import SectionLine from '../SectionLine'

export default function Project_Hanamory() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-xl md:text-[24px] font-bold mb-2'>Hanamory: AI 꽃다발 인식 서비스</div>
      <div className='text-base md:text-[18px] mb-2'>2025.03 ~ 개발 중</div>
      <div className='text-sm md:text-[16px] mb-2'>개인 프로젝트</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='https://neogul02.tistory.com/34'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Blog->`}
        </a>
        <a
          href='https://github.com/Neogul02/Hanamory-FE'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub FE->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-lg md:text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 대학 졸업작품으로 진행하는 1인 풀스택 프로젝트에요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>
          · Hanamory는 꽃다발 이미지를 업로드하면, AI가 꽃의 종류를 인식해 정보와 꽃말을 SNS 공유가 가능한 카드 형태로 제공하는 서비스에요.YOLOv5 커스텀 학습과, Docker 기반 EC2 클라우드 배포까지 개발 중이에요.
        </div>
      </div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>프로젝트 기능 </div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 커스텀 트레이닝을 통한 YOLOv5 모델의 꽃다발 추론 API를 제공해요. API를 통해 꽃다발 이미지에서 꽃의 종류를 인식하고, Gemini 모델을 활용해 해당 꽃의 정보와 꽃말을 제공해요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 카드형태의 SNS 공유 기능, 위치기반 주변 꽃집 정보 등, 플로워에게 친화적인 다양한 기능을 추가할 예정이에요.</div>
      </div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>Next.js</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· AI 모델의 응답 시간이 상대적으로 길 수 있다는 점을 고려해, SEO 최적화와 빠른 초기 렌더링을 위해 SSR과 CSR을 하이브리드로 쉽게 적용할 수 있는 Next.js를 사용했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>YOLOv5</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>
        · Roboflow에서 직접 수집하고 라벨링한 꽃 이미지 데이터셋을 기반으로, YOLOv5를 커스텀 학습해 mAP 약 0.72의 성능을 달성했어요.
        <br />· 모델 학습시 하이퍼파라미터를 조정해가며 F1 Curve와 결과 샘플 이미지를 통해 모델 성능을 분석하며 학습했어요.
      </div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Flask</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'> · YOLOv5로 학습한 AI 모델을 REST API로 배포하기 위해 Flask를 사용해 추론 서버를 구현했어요.</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 모델 학습시 Python 언어를 사용했기에, node.js가 아닌 python을 사용하는 서버 프레임워크를 사용했어요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>Docker</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· Flask 백엔드와 학습시킨 YOLOv5 모델을 하나의 Docker 컨테이너로 패키징해 AWS EC2 서버 위에서 배포해 구동 환경 일관성과 코드 유지보수성을 챙겼어요.</div>

      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>
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

      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>
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
      <div className='text-sm md:text-base ml-1 md:ml-2 flex flex-wrap gap-1'>
        1인 개발이기에 나태해지지 않도록 일주일 단위로 개발 목표를 정해두고, 계획 한 일정에 맞추어 최대한 개발일정을 맞췄어요. AI모델 학습도 처음, 학습한 모델을 Docker로 배포하는 것도 처음이었기에 빠르게 공부하며 개발했어요. 개발 진행상황은 모두
        <a
          href='https://capstone-hanamory.notion.site/?pvs=74'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>{`Notion 문서`}</a>
        와
        <a
          href='https://neogul02.tistory.com/34'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>{`블로그`}</a>
        에 정리하며 체계적으로 관리했어요.
      </div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 my-1 md:m-2 ml-1 md:ml-2'>MLOps</div>

      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · Roboflow를 활용해 꽃 이미지 데이터를 수집하고 직접 라벨링한 뒤, 다양한 하이퍼파라미터로 여러 YOLOv5 모델을 반복 학습·평가했어요. F1 Score, mAP 등 성능 지표를 기반으로 가장 추론 성능이 우수한 모델을 선정했어요.
      </div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· Flask API 서버와 학습된 YOLOv5 모델을 Docker로 하나의 이미지로 패키징하여, 환경 의존성 문제를 해결하고 배포를 자동화했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 완성된 Docker 이미지를 AWS EC2 서버에 배포하고, 실 서비스 환경에서 안정적으로 운영할 수 있도록 전체 파이프라인을 직접 설계·구현했어요.</div>

      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>트러블 슈팅</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'> · Windows에서 학습한 모델의 경로 정보(WindowsPath)를 리눅스 빌드 환경에서는 인식하지 못해, 모델 파일을 직접 재저장/수정하여 문제를 해결했어요.</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>
        · Vercel 환경에서 프론트엔드는 https로 서비스되고 있지만, 백엔드 Flask API 서버는 http로 요청이 이루어져 mixed-content로 인한 브라우저 보안 에러가 발생했어요. 단순히 보안 설정을 끄는 임시 해결책은 안전하지 않다고 판단해, Nginx를 이용한 리버스
        프록시를 적용해 Flask API 서버에도 https 인증서를 적용했어요.
      </div>
    </div>
  )
}
