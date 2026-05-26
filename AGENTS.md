<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# ChoeJinHyeong — Portfolio

## Purpose
최진형의 개인 포트폴리오 웹사이트. Next.js 16 App Router 기반으로 구축된 싱글페이지 포트폴리오로, 기술 스택·활동·프로젝트·자격증·교육 섹션을 포함하며 다크모드를 지원한다. Vercel에 배포되어 있다.

## Key Files

| File | Description |
|------|-------------|
| `next.config.ts` | Next.js 설정 (Turbopack 기반) |
| `tailwind.config.ts` | Tailwind CSS v4 설정 |
| `tsconfig.json` | TypeScript strict 모드 설정, `@/` 경로 별칭 정의 |
| `eslint.config.mjs` | ESLint 설정 |
| `postcss.config.mjs` | PostCSS 설정 (@tailwindcss/postcss) |
| `package.json` | 의존성 및 스크립트 정의 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | 앱 소스 코드 전체 (see `src/AGENTS.md`) |
| `public/` | 정적 에셋 — 폰트, 이미지, SVG 아이콘 (see `public/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 패키지 매니저는 **yarn** (yarn.lock 존재). `npm install` 대신 `yarn add` 사용
- TypeScript strict 모드: 타입 에러 없이 빌드되어야 함
- 경로 별칭 `@/` = `src/` (tsconfig.json 정의)
- dev 서버: `yarn dev` (Turbopack), 빌드: `yarn build`, 린트: `yarn lint`

### Testing Requirements
- 별도 테스트 프레임워크 없음. 변경 후 `yarn build`로 타입/빌드 오류 확인
- 프로덕션 URL: https://choe-jinhyeong.vercel.app

### Common Patterns
- 모든 컴포넌트는 TypeScript, Tailwind CSS 사용
- 다크모드: `useThemeStore`에서 theme 상태 읽어 조건부 클래스 적용
- 애니메이션: framer-motion 사용
- 상태 관리: Zustand

## Dependencies

### External
- `next` ^16 — App Router, Image 최적화, Script
- `react` ^19 — UI 프레임워크
- `framer-motion` ^12 — 페이지·컴포넌트 애니메이션
- `zustand` ^5 — 전역 상태 (테마, 모달)
- `axios` ^1.9 — HTTP 클라이언트 (현재 미사용에 가깝지만 설정됨)
- `tailwindcss` ^4 — 유틸리티 CSS

<!-- MANUAL: -->
