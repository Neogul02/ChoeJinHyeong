<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# public

## Purpose
Next.js가 정적으로 서빙하는 에셋 디렉토리. 폰트·아이콘 SVG·프로젝트 이미지가 포함된다. 이 폴더의 파일은 빌드 없이 루트 URL에서 직접 접근 가능하다 (`/images/profile.png` 등).

## Key Files

| File | Description |
|------|-------------|
| `dark-icon.svg` | 다크모드 전환 버튼 아이콘 |
| `light-icon.svg` | 라이트모드 전환 버튼 아이콘 |
| `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | 기타 UI용 SVG 아이콘 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `fonts/` | Pretendard Variable 웹폰트 |
| `images/` | 프로필 이미지 및 프로젝트별 이미지 갤러리 (see `images/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 새 이미지 추가 시 프로젝트명 디렉토리(`images/<project>/`) 아래에 배치
- SVG 아이콘은 루트에 직접 두고 Next.js `<Image>` 또는 `<img>` 로 참조
- 파일명 변경 시 코드 내 참조 경로도 함께 업데이트할 것

<!-- MANUAL: -->
