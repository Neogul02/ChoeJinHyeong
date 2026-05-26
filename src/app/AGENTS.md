<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# app

## Purpose
Next.js App Router의 루트. 전역 레이아웃·메타데이터·글로벌 CSS를 정의하고, 메인 홈(`page.tsx`)과 `/about` 서브 라우트를 포함한다.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | 루트 레이아웃 — `<html>`, `<body>`, Nav, Footer, 고정 버튼, SectionNavigation, ThemeInitializer, OG/Twitter 메타데이터 |
| `page.tsx` | 홈 페이지 — intro, Stack, Activities, Projects, Certification, Education, About 섹션 조합 |
| `globals.css` | 전역 CSS — Tailwind base/utilities, Pretendard 폰트, CSS 변수(배경·전경색), 커서 깜빡임 |
| `favicon.ico` | 파비콘 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `about/` | `/about` 라우트 페이지 |

## For AI Agents

### Working In This Directory
- `layout.tsx`는 서버 컴포넌트 유지 (`metadata` export 필요). `ThemeInitializer`·버튼 등 클라이언트 전용 컴포넌트는 자식으로 임포트
- `page.tsx`는 `'use client'` 선언됨 (framer-motion 사용). 섹션 추가 시 동일 패턴으로 motion.section 래핑
- 페이지 전환 애니메이션은 `page-transition` 클래스로 처리 (globals.css)
- 섹션 id(`#intro`, `#stack` 등)는 `SectionNavigation`의 sections 배열과 반드시 일치시킬 것

### Common Patterns
- 각 섹션: `<motion.section id="<id>" className='max-w-5xl mx-auto py-16 px-4' initial/animate/transition>`
- 섹션 구분선: `<SectionLine>` (단순) 또는 `<SectionLineDivided>` (양분)

## Dependencies

### Internal
- `@/components/layout/` — Nav, Footer, ThemeInitializer
- `@/components/ui/` — DarkModeButton, ScrollToTopButton, SectionNavigation, CustomRotatingIntro, SectionLine, SectionLineDivided
- `@/components/sections/` — 모든 섹션 컴포넌트

### External
- `framer-motion` — 페이지·섹션 enter 애니메이션
- `next/script` — counter.dev 분석 스크립트

<!-- MANUAL: -->
