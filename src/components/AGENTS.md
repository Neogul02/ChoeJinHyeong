<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components

## Purpose
포트폴리오의 모든 React 컴포넌트. 역할에 따라 layout(전체 구조), modals(프로젝트 상세), sections(홈 페이지 섹션), ui(재사용 UI 요소) 4개 하위 디렉토리로 구성된다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `layout/` | Nav, Footer, ThemeInitializer — 전체 페이지 구조 컴포넌트 (see `layout/AGENTS.md`) |
| `modals/` | 프로젝트별 상세 모달 컴포넌트 + 공통 Modal 래퍼 (see `modals/AGENTS.md`) |
| `sections/` | 홈 페이지 각 섹션 컴포넌트 및 projectsData 데이터 (see `sections/AGENTS.md`) |
| `ui/` | 재사용 UI 요소 — 버튼, 도구, CustomRotatingIntro (see `ui/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 새 컴포넌트는 용도에 맞는 하위 디렉토리에만 추가. 이 레벨에 파일을 직접 두지 말 것
- 클라이언트 상태·이벤트 핸들러 필요 시 `'use client'` 선언 필수
- 다크모드 대응: `useThemeStore`에서 `theme`를 읽어 조건부 클래스/인라인 스타일 적용

<!-- MANUAL: -->
