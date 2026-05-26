<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# store

## Purpose
Zustand 기반 전역 상태 관리. 다크/라이트 테마 상태와 모달 오픈 상태를 앱 전역에서 공유한다.

## Key Files

| File | Description |
|------|-------------|
| `useThemeStore.ts` | 테마(`dark`/`light`) 토글·초기화, 모달 열림 상태(`isModalOpen`) 관리 |
| `useStore.ts` | 범용 카운터 스토어 (현재 실제 사용처 없음 — 보일러플레이트) |

## For AI Agents

### Working In This Directory
- `useThemeStore`가 핵심 스토어. 테마 관련 로직은 여기에만 집중
- `initializeTheme()`은 `ThemeInitializer` 컴포넌트에서 마운트 시 1회 호출됨
- `isModalOpen`은 `SectionNavigation` 숨김 처리에 사용됨 — 모달 열고 닫을 때 반드시 `setIsModalOpen` 호출
- SSR 안전: `getSystemTheme`은 `typeof window === 'undefined'` 가드를 포함. 스토어에 window 접근 코드 추가 시 동일 패턴 유지
- `useStore`는 실제 기능 없음. 새 전역 상태가 필요하면 `useThemeStore`에 추가하거나 별도 스토어 파일 생성

### Common Patterns
```ts
// 컴포넌트에서 테마 읽기
const { theme } = useThemeStore()

// 모달 열기/닫기
const { setIsModalOpen } = useThemeStore()
setIsModalOpen(true)   // 열기
setIsModalOpen(false)  // 닫기
```

## Dependencies

### External
- `zustand` ^5 — 상태 관리 라이브러리

<!-- MANUAL: -->
