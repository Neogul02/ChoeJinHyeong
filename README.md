# ChoeJinHyeong Portfolio

최진형 개인 포트폴리오 웹사이트. Next.js App Router 기반 퍼블릭 사이트 + Supabase로 구동되는 어드민 CMS를 함께 담고 있습니다.

**Live**: [choe-jinhyeong.vercel.app](https://choe-jinhyeong.vercel.app)

## 목차

- [개요](#개요)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
  - [퍼블릭 사이트](#퍼블릭-사이트)
  - [어드민 CMS](#어드민-cms)
- [프로젝트 구조](#프로젝트-구조)
- [데이터 모델](#데이터-모델)
- [상태 관리](#상태-관리)
- [로컬 개발 환경](#로컬-개발-환경)
- [알려진 제약사항](#알려진-제약사항)

## 개요

한 페이지 스크롤 형태의 퍼블릭 포트폴리오와, Supabase 인증으로 보호되는 `/admin` 대시보드로 구성된 프로젝트입니다. 어드민에서 스택 · 학력 · 경력 · 대외활동 · 자격증 · 소개 문구를 편집하면 퍼블릭 페이지에 즉시 반영되고, 드래그 앤 드롭으로 노출 순서를 조정할 수 있습니다.

## 기술 스택

| 영역 | 스택 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5, Tailwind CSS 4 |
| 애니메이션 | Framer Motion |
| 드래그 앤 드롭 | @dnd-kit (core / sortable / utilities) |
| 상태 관리 | Zustand |
| 백엔드 / 인증 | Supabase (`@supabase/supabase-js`, `@supabase/ssr`) |
| 마크다운 렌더링 | react-markdown |
| 기타 | axios |

## 주요 기능

### 퍼블릭 사이트

한 페이지 스크롤(`src/app/page.tsx`)에 아래 섹션이 순서대로 배치되고, 각 섹션은 `AnimatedSection`으로 감싸 스크롤 시 fade/slide-in 애니메이션이 적용됩니다.

- **Intro** — 프로필 사진, 기술 스택/이름을 순환 노출하는 타이핑 이펙트(`CustomRotatingIntro`), 이력서(Figma) 링크.
- **Stack** — Supabase `stack_items` 테이블을 서버 컴포넌트에서 조회해 Frontend/Backend/Infra/Cooperation 카테고리별로 표시. 학습 중인 항목은 🍅 표시.
- **Activities (배너)** — `/about` 페이지로 연결되는 링크 배너.
- **Projects** — 하드코딩된 프로젝트 카드 그리드. 카드를 클릭하면 이전/다음 탐색이 가능한 풀스크린 모달로 프로젝트 상세(기능, 기술 스택 선정 이유, 트러블슈팅, 수상 내역 등)를 확인.
- **Certification** — Supabase `certifications` 테이블 기반 자격증 목록.
- **Education** — Supabase `education` 테이블 기반 학력 목록.

`/about` 페이지는 별도 라우트로, 자기소개 문구와 연락처를 보여줍니다.

공통 UI로 좌측 스크롤 스파이 네비게이션(`SectionNavigation`), 다크모드 토글, 맨 위로 가기 버튼이 항상 떠 있습니다.

### 어드민 CMS

`middleware.ts`가 Supabase 세션 쿠키를 검사해 `/admin/login`을 제외한 모든 `/admin/*` 경로를 보호합니다. 로그인은 이메일/비밀번호 방식(`supabase.auth.signInWithPassword`)이며, 별도 가입 화면은 없고 계정은 Supabase 콘솔에서 직접 생성합니다.

대시보드에서 아래 엔티티를 관리합니다: **Stack · Education · Career · Activities · Certification · About**.

- 각 엔티티는 동일한 패턴을 공유합니다 — 목록 조회 → `AdminEditPanel`(편집/미리보기 듀얼 패널)로 생성·수정 → `upsert`, 삭제는 확인창 후 `delete`.
- **드래그 앤 드롭 순서 변경**: Stack(카테고리별), Career, Education, Certifications, Activities 페이지에서 `@dnd-kit`의 `DndContext` + `SortableContext`로 항목을 재정렬하면 `sort_order`가 일괄 업데이트됩니다.
- **Projects 어드민**은 DB CRUD가 아니라, 프로젝트 카드/모달을 수정하려면 소스 코드(`src/components/modals/projects/*.tsx`, `projectsData.ts`)를 직접 편집하라는 안내 페이지입니다.

## 프로젝트 구조

```
src/
├─ app/
│  ├─ page.tsx              # 홈(원페이지 스크롤)
│  ├─ about/                # 소개 페이지
│  ├─ admin/                # 어드민 대시보드 및 엔티티별 CRUD 페이지
│  └─ layout.tsx            # 전역 레이아웃(Nav, Footer, 다크모드, SEO)
├─ components/
│  ├─ sections/              # 퍼블릭 섹션(Stack, Projects, Certification, Education 등)
│  ├─ admin/                 # AdminEditPanel, SortableItem 등 어드민 공용 컴포넌트
│  ├─ modals/projects/       # 프로젝트별 상세 모달
│  ├─ layout/                # Nav, Footer, SectionNavigation, ThemeInitializer
│  └─ ui/                    # 버튼 등 공용 UI
├─ lib/
│  ├─ supabase.ts            # 브라우저 Supabase 클라이언트 + DB 타입 정의
│  ├─ supabase-server.ts     # 서버 컴포넌트용 Supabase 클라이언트
│  └─ axios.ts                # (미사용 스캐폴딩)
├─ store/
│  └─ useThemeStore.ts        # 다크모드 / 모달 오픈 상태 (Zustand)
└─ middleware.ts               # /admin 라우트 인증 가드
```

## 데이터 모델

`src/lib/supabase.ts`에 정의된 주요 타입:

| 테이블 | 용도 |
| --- | --- |
| `stack_items` | 기술 스택 (카테고리, 학습중 여부, 정렬 순서) |
| `education` | 학력 |
| `career` | 경력 |
| `activities` | 대외활동 |
| `certifications` | 자격증 |
| `about_content` | 소개/연락처 문구 |
| `projects` | 타입은 정의되어 있으나 실제로는 조회하지 않음 (아래 참고) |

## 상태 관리

Zustand 단일 스토어(`useThemeStore`)에서 다크/라이트 테마(로컬스토리지 + `prefers-color-scheme` 동기화)와 프로젝트 모달 오픈 여부를 관리합니다.

## 로컬 개발 환경

```bash
yarn install
yarn dev      # http://localhost:3000
```

빌드 / 린트:

```bash
yarn build
yarn lint
```

Supabase 연동이 필요한 페이지(퍼블릭 섹션 대부분 + 전체 어드민)를 실행하려면 아래 환경 변수가 필요합니다. 리포지토리에는 `.env.example`이 없으므로 직접 생성하세요.

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 알려진 제약사항

- **Projects는 DB 미연동**: `Project` 타입과 `projects` 테이블 스키마는 정의되어 있지만 실제로는 사용되지 않고, 홈 화면 프로젝트 카드는 `projectsData.ts`에 하드코딩되어 있습니다.
- **About 페이지는 정적 텍스트**: `/about`의 소개 문구는 어드민에서 편집하는 `about_content` 테이블이 아니라 컴포넌트에 하드코딩된 텍스트를 렌더링합니다.
- **Career 섹션 미노출**: 어드민에서 경력을 관리할 수 있지만, 홈/About 어디에도 렌더링되지 않습니다.
- Supabase 마이그레이션/스키마 SQL은 리포지토리에서 제외되어 있으며, 현재 스키마의 유일한 근거는 `src/lib/supabase.ts`의 TypeScript 인터페이스입니다.
