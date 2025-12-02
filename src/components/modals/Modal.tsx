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
        className='relative w-[90%] md:max-w-[70%] h-[95%] md:max-h-[90vh] rounded-xl md:rounded-xl shadow-lg z-10 mx-2 md:mx-4 flex flex-col items-center justify-center'
        style={style}>
        {/* 스크롤 가능한 영역 */}
        <div className='overflow-auto no-scrollbar w-full md:max-w-[120vh] h-full md:max-h-[80vh] py-6 md:py-10 px-4 md:px-30'>{children}</div>

        {/* 닫기 버튼 */}
        <button
          className='absolute top-3 md:top-4 right-4 md:right-8 hover:text-white text-3xl md:text-4xl cursor-pointer z-20'
          onClick={onClose}
          aria-label='닫기'>{`×`}</button>

        {/* 네비게이션 버튼 */}
        {showNavigation && (
          <>
            {/* 이전 버튼 */}
            {onPrevious && (
              <button
                className='absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 hover:text-white text-2xl md:text-3xl cursor-pointer p-1 md:p-2 rounded-full transition-colors z-20'
                onClick={onPrevious}
                aria-label='이전 프로젝트'>
                {`‹`}
              </button>
            )}
            {/* 다음 버튼 */}
            {onNext && (
              <button
                className='absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 hover:text-white text-2xl md:text-3xl cursor-pointer p-1 md:p-2 rounded-full transition-colors z-20'
                onClick={onNext}
                aria-label='다음 프로젝트'>
                {`›`}
              </button>
            )}
          </>
        )}
        <style
          jsx
          global>{`
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
