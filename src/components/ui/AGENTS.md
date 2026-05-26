<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/ui

## Purpose
재사용 가능한 UI 원자 컴포넌트. 버튼, 섹션 구분선, 섹션 네비게이션, 타이핑 인트로 애니메이션으로 구성된다.

## Key Files

| File | Description |
|------|-------------|
| `CustomRotatingIntro.tsx` | 홈 인트로 — 기술 스택명과 이름을 타이핑 애니메이션으로 순환 표시 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `buttons/` | DarkModeButton, ScrollToTopButton — 화면 우하단 고정 버튼 (see `buttons/AGENTS.md`) |
| `tools/` | SectionLine, SectionLineDivided, SectionNavigation — 섹션 구분 및 탐색 도구 (see `tools/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- `CustomRotatingIntro`의 skills_texts / names_texts 배열을 수정하면 인트로 텍스트 변경 가능
- 새 재사용 UI 컴포넌트는 버튼류 → `buttons/`, 레이아웃/네비게이션 도구 → `tools/`, 그 외 → 이 레벨에 배치
- 모든 컴포넌트는 다크모드 대응 필수 (`useThemeStore` 또는 Tailwind `dark:` 변형)

## Dependencies

### Internal
- `@/store/useThemeStore` — 테마 상태

### External
- `framer-motion` — SectionNavigation 애니메이션

<!-- MANUAL: -->
