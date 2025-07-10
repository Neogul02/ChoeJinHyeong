interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  style?: React.CSSProperties
  onPrevious?: () => void
  onNext?: () => void
  showNavigation?: boolean
}

export default function Modal({ open, onClose, children, style, onPrevious, onNext, showNavigation = false }: ModalProps) {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center overflow-auto'>
      {/* 배경 */}
      <div
        className='absolute inset-0 bg-[#00000066] bg-opacity-50 transition-opacity'
        onClick={onClose}
      />
      {/* 모달 본체 */}
      <div
        className='relative w-full max-w-[70%] h-full max-h-[90vh] rounded-xl shadow-lg z-10 mx-4 flex flex-col items-center justify-center'
        style={style}
      >
        {/* 스크롤 가능한 영역 */}
        <div className='overflow-auto no-scrollbar max-w-[120vh] max-h-[80vh] py-10 px-30'>{children}</div>

        {/* 닫기 버튼 */}
        <button
          className='absolute top-4 right-8 hover:text-white text-4xl cursor-pointer'
          onClick={onClose}
          aria-label='닫기'
        >{`×`}</button>

        {/* 네비게이션 버튼 */}
        {showNavigation && (
          <>
            {/* 이전 버튼 */}
            {onPrevious && (
              <button
                className='absolute left-4 top-1/2 transform -translate-y-1/2 hover:text-white text-3xl cursor-pointer p-2 rounded-full transition-colors'
                onClick={onPrevious}
                aria-label='이전 프로젝트'
              >
                {`‹`}
              </button>
            )}
            {/* 다음 버튼 */}
            {onNext && (
              <button
                className='absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-white text-3xl cursor-pointer p-2 rounded-full  transition-colors'
                onClick={onNext}
                aria-label='다음 프로젝트'
              >
                {`›`}
              </button>
            )}
          </>
        )}
        <style
          jsx
          global
        >{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  )
}
