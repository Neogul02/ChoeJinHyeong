<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/ui/buttons

## Purpose
화면 우하단에 고정(`fixed bottom-4 right-4`)되는 두 개의 플로팅 버튼. `app/layout.tsx`에서 전역 렌더링된다.

## Key Files

| File | Description |
|------|-------------|
| `DarkModeButton.tsx` | 다크/라이트 모드 토글 버튼 — `useThemeStore.toggleTheme()` 호출, 테마에 따라 아이콘 전환 |
| `ScrollToTopButton.tsx` | 페이지 최상단 스크롤 버튼 — `window.scrollTo({ top: 0, behavior: 'smooth' })` |

## For AI Agents

### Working In This Directory
- `DarkModeButton`은 `useEffect`에서 `document.documentElement.classList.toggle('dark', ...)`를 직접 호출함. `ThemeInitializer`와 동일 역할이 중복됨 — 리팩터링 시 한 곳으로 통합 고려
- 아이콘은 `public/dark-icon.svg`, `public/light-icon.svg` 참조 (`<img>` 태그). Next.js `<Image>`로 교체 가능
- 버튼 크기·위치는 `layout.tsx`의 부모 `div`에서 제어 (`fixed bottom-4 right-4 z-50 flex gap-3`)
- `DarkModeButton`에 `console.log` 디버그 출력이 남아 있음 — 프로덕션 전 제거 필요

### Common Patterns
- 버튼 공통 클래스: `rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer`
- 배경색: `theme === 'dark' ? 'bg-[#2c2d2e]' : 'bg-[#e6e6e6]'`

## Dependencies

### Internal
- `@/store/useThemeStore` — theme 상태, toggleTheme 액션

<!-- MANUAL: -->
