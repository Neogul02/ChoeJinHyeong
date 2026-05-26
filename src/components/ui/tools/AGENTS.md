<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/ui/tools

## Purpose
섹션 구분선과 우측 고정 섹션 네비게이션 도구 컴포넌트. 페이지의 구조적 흐름을 시각화하고 섹션 간 이동을 지원한다.

## Key Files

| File | Description |
|------|-------------|
| `SectionLine.tsx` | 텍스트 + 전체 너비 구분선 (Stack 섹션 등 단독 헤더에 사용) |
| `SectionLineDivided.tsx` | 텍스트 + 좌우 분할 구분선 (대부분 섹션 헤더에 사용) |
| `SectionNavigation.tsx` | 우측 고정 대시 형태 섹션 인디케이터 — 스크롤 감지로 활성 섹션 표시, 클릭 시 해당 섹션으로 이동 |

## For AI Agents

### Working In This Directory
- `SectionNavigation`의 `sections` 배열이 `page.tsx`의 섹션 id와 반드시 일치해야 함. 섹션 추가/삭제 시 두 곳 모두 업데이트
- `SectionNavigation`은 `/about`, `/contact` 경로와 모달 열림 상태에서 자동으로 숨겨짐 — 새 페이지 라우트 추가 시 pathname 조건에 추가 고려
- 구분선 색상은 CSS 변수 `var(--foreground)` 사용 — `globals.css`에서 다크/라이트 값 정의됨
- 스크롤 감지: `offsetTop` + `100px` 오프셋으로 현재 섹션 판별. 섹션 높이가 매우 짧으면 감지 오류 가능

### Common Patterns
```tsx
// 섹션 헤더 표준 패턴
<SectionLineDivided text='Section Title' />
<div id='section-id'>
  <SectionComponent />
</div>
```

## Dependencies

### Internal
- `@/store/useThemeStore` — theme, isModalOpen 상태

### External
- `framer-motion` — 대시 크기·색상 애니메이션, 레이블 hover 애니메이션
- `next/navigation` — `usePathname()` 현재 라우트 감지

<!-- MANUAL: -->
