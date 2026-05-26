<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# components/modals

## Purpose
프로젝트 상세 내용을 보여주는 모달 컴포넌트들. 공통 `Modal` 래퍼와 각 프로젝트별 컨텐츠 컴포넌트로 구성된다. `Projects` 섹션에서 카드 클릭 시 해당 프로젝트 모달이 열린다.

## Key Files

| File | Description |
|------|-------------|
| `Modal.tsx` | 공통 모달 래퍼 — 오버레이, 닫기 버튼, 이전/다음 네비게이션 화살표, 스크롤 잠금 |
| `Project_DeunDeun.tsx` | DeunDeun(아동 급식 지원) 프로젝트 상세 |
| `Project_Knock.tsx` | Knock(전세사기 예방) 프로젝트 상세 |
| `Project_Portfolio.tsx` | 본 포트폴리오 프로젝트 상세 |
| `Project_Hanamory.tsx` | Hanamory(YOLOv5 꽃다발 인식) 프로젝트 상세 |
| `Project_Runaway.tsx` | 도망가자(재난 대피소) 프로젝트 상세 |
| `Project_Likelion.tsx` | LikelionKNU(아기사자 리크루팅) 프로젝트 상세 |
| `Project_InternInMeta.tsx` | InternInMeta 프로젝트 상세 (projectsData에 미등록) |

## For AI Agents

### Working In This Directory
- 새 프로젝트 추가 시: `Project_<Name>.tsx` 생성 → `projectsData.ts`에 등록 → `Projects.tsx`에 반영
- 모달 열기/닫기 시 반드시 `useThemeStore`의 `setIsModalOpen(true/false)` 호출 (SectionNavigation 숨김 연동)
- 이전/다음 네비게이션은 `Projects.tsx`에서 인덱스 기반으로 처리 (`handlePrevious`, `handleNext`)
- 모달 컴포넌트는 `projectsData.ts`의 `component` 필드에 직접 참조됨 (`React.ComponentType`)

### Common Patterns
- 각 `Project_*.tsx`는 단순 표시용 컴포넌트 (props 없음)
- `Modal.tsx` props: `open`, `onClose`, `style`, `onPrevious`, `onNext`, `showNavigation`

## Dependencies

### Internal
- `@/store/useThemeStore` — `isModalOpen` 상태 제어

<!-- MANUAL: -->
