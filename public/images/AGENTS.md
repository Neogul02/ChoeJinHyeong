<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# public/images

## Purpose
포트폴리오에서 사용하는 모든 이미지. 프로필 이미지와 프로젝트별 갤러리 이미지로 구성된다.

## Key Files

| File | Description |
|------|-------------|
| `profile.png` | 홈 인트로 프로필 이미지 (280×280) |
| `og-image.jpg` | Open Graph / Twitter Card 미리보기 이미지 (1200×630) |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `deundeun/` | DeunDeun 프로젝트 이미지 6장 |
| `hanamory/` | Hanamory 프로젝트 이미지 7장 |
| `knock/` | Knock 프로젝트 이미지 6장 + GIF |
| `likelion/` | LikelionKNU 프로젝트 이미지 2장 |
| `portfolio/` | Portfolio 프로젝트 이미지 4장 |
| `runaway/` | 도망가자 프로젝트 이미지 3장 + PDF |

## For AI Agents

### Working In This Directory
- 각 프로젝트 이미지는 `projectsData.ts`의 `image` 필드에서 참조됨
- 메인 썸네일 컨벤션: `<project>_main.png` (또는 `.jpg`)
- 이미지 교체 시 Next.js `<Image>` width/height props도 함께 검토
- `runaway/` 에 PDF 파일이 있음 — Next.js `public`에서 직접 서빙 가능 (`/images/runaway/*.pdf`)

<!-- MANUAL: -->
