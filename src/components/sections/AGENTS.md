<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/sections

## Purpose
홈 페이지(`page.tsx`)를 구성하는 각 섹션 컴포넌트와 프로젝트 데이터. 스크롤 기반 포트폴리오의 핵심 컨텐츠 영역이다.

## Key Files

| File | Description |
|------|-------------|
| `projectsData.ts` | 프로젝트 배열 데이터 — id, title, period, image, bgColor, component 정의. `Project` 인터페이스 export |
| `Projects.tsx` | 프로젝트 카드 그리드 + 모달 렌더링. 이전/다음 네비게이션 포함 |
| `About.tsx` | About 섹션 — `/about` 링크 |
| `Activities.tsx` | 대외활동 섹션 — `/about` 링크로 위임 |
| `Stack.tsx` | 기술 스택 섹션 |
| `Career.tsx` | 이력 섹션 (현재 `page.tsx`에서 주석 처리됨) |
| `Education.tsx` | 교육 섹션 |
| `Certification.tsx` | 자격증 섹션 |

## For AI Agents

### Working In This Directory
- 프로젝트 순서 변경은 `projectsData.ts` 배열 순서로 제어
- `Projects.tsx`의 이전/다음 네비게이션은 프로젝트 수(현재 6개)에 하드코딩됨. 프로젝트 추가/삭제 시 `handlePrevious`/`handleNext` 인덱스 범위 업데이트 필요
- `bgColor`는 이미지가 없는 프로젝트(Portfolio)에 사용 — 다크/라이트 테마별 값 쌍으로 제공
- `Career` 섹션은 `page.tsx`에서 주석 처리됨. 활성화 시 `SectionNavigation`의 sections 배열에 `{ id: 'career', label: '이력' }` 추가 필요

### Common Patterns
```ts
// 새 프로젝트 추가 예시 (projectsData.ts)
{
  id: 6,
  title: '프로젝트명',
  period: 'YYYY.MM ~ YYYY.MM',
  image: '/images/<project>/<project>_main.png',
  component: Project_NewProject,
}
```

## Dependencies

### Internal
- `@/components/modals/` — 각 `Project_*.tsx` 컴포넌트
- `@/components/modals/Modal` — 공통 모달 래퍼
- `@/store/useThemeStore` — 테마 및 모달 상태

### External
- `next/image` — 프로젝트 썸네일 이미지 최적화

<!-- MANUAL: -->
