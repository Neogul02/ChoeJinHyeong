<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/layout

## Purpose
전체 페이지 구조를 구성하는 레이아웃 컴포넌트. `app/layout.tsx`에서 임포트되어 모든 페이지에 공통 적용된다.

## Key Files

| File | Description |
|------|-------------|
| `Nav.tsx` | 상단 내비게이션 바 — 로고(CJH/ChoeJinHyeong), About·LinkedIn·Blog·Github 링크 |
| `Footer.tsx` | 하단 푸터 — 저작권 텍스트, 마지막 업데이트 날짜 |
| `ThemeInitializer.tsx` | 마운트 시 localStorage/시스템 테마 감지 후 초기화, 테마 변경 시 `<html>` 클래스 토글 |

## For AI Agents

### Working In This Directory
- `ThemeInitializer`는 렌더 출력이 없는 사이드이펙트 전용 컴포넌트 (`return null`). DOM 조작만 수행
- `Nav`는 하이드레이션 불일치 방지를 위해 `mounted` 상태 확인 후 렌더 (SSR에서 `null` 반환)
- `DarkModeButton`도 `useEffect`로 `document.documentElement.classList.toggle`을 직접 호출함. `ThemeInitializer`와 중복 적용되지 않도록 주의
- 외부 링크는 `target="_blank" rel="noopener noreferrer"` 필수

### Common Patterns
- 테마 색상: `hover:text-[#3182f6]` (브랜드 블루) 일관 적용

## Dependencies

### Internal
- `@/store/useThemeStore` — 테마 상태 읽기/초기화

### External
- `next/link` — 내부·외부 링크

<!-- MANUAL: -->
