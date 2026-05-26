<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# src

## Purpose
애플리케이션 전체 소스 코드. Next.js App Router 구조를 따르며, 라우트·컴포넌트·상태 관리·유틸리티로 구성된다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router 라우트, 레이아웃, 글로벌 CSS (see `app/AGENTS.md`) |
| `components/` | 재사용 가능한 React 컴포넌트 (see `components/AGENTS.md`) |
| `store/` | Zustand 전역 상태 스토어 (see `store/AGENTS.md`) |
| `lib/` | 유틸리티 모듈 — axios 인스턴스 등 (see `lib/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 경로 별칭 `@/` 은 이 디렉토리(`src/`)를 가리킴
- 새 컴포넌트는 용도에 맞는 `components/` 하위 디렉토리에 배치
- 클라이언트 컴포넌트는 파일 상단에 `'use client'` 선언 필수

### Common Patterns
- 서버 컴포넌트(기본) vs 클라이언트 컴포넌트(`'use client'`) 구분 명확히 할 것
- 스타일은 Tailwind 유틸리티 클래스 우선, 인라인 style은 동적 색상값에만 사용

<!-- MANUAL: -->
