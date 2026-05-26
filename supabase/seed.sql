-- ============================================================
-- Seed Data — run after schema.sql
-- ============================================================

-- Projects
INSERT INTO projects (title, period, image, bg_dark, bg_light, sort_order, content_md) VALUES
(
  'DeunDeun: 모든 아이들이 든든한 한 끼를',
  '2024.10 ~ 2024.12',
  '/images/deundeun/deundeun_main.png',
  NULL, NULL, 0,
  E'## 👋 프로젝트 소개\n\n저소득층 아동의 급식 지원 서비스. 아동급식카드 가맹점 정보를 공공데이터와 통합하여 지도 기반으로 제공합니다.\n\n- **팀 구성**: Frontend 2, Backend 2, Design 1\n- **GitHub**: [Frontend](https://github.com/)\n\n## 🎉 주요 기능\n\n- 공공데이터 통합 (아동급식카드, 좋은이웃가게, 선한영향력가게, 수원시)\n- 카카오맵 + 클러스터링\n- Upstage AI 영수증 인증\n- 리뷰 시스템 (최대 5장 이미지)\n- 우리 동네 랭킹 TOP5\n\n## 💻 기술 스택\n\n- React + TypeScript + Vite\n- Zustand, Tailwind CSS, Framer Motion\n- Kakao Maps API, Upstage AI\n\n## 🏆 수상\n\n간지톤(干支thon) 14팀 중 3등, 우수상'
),
(
  'Knock: 간편하게 전세사기를 예방하는 방법',
  '2025.07 ~ 2025.11',
  '/images/knock/knock_main.png',
  '#4a9eff', '#2563eb', 1,
  E'## 👋 프로젝트 소개\n\n전세사기 예방을 위한 등기부등본 AI 분석 서비스. 2025 멋쟁이사자처럼 중앙 해커톤 출품작.\n\n- **팀명**: 물땅참\n- **팀 구성**: Frontend 1, Backend 2, AI 1\n\n## 🎉 주요 기능\n\n- 등기부등본 PDF 업로드 및 AI 분석 (~30초)\n- 위험도 시각화 (0-100%)\n- 전문가 상담 연계\n- 드래그 앤 드롭 + 실시간 진행률\n\n## 💻 기술 스택\n\n- React + TypeScript + TanStack Query\n- Python Flask, OneClassSVM AI 모델\n- Tailwind CSS\n\n## 🏆 수상\n\n- 어흥콘 혁신부문 우수상\n- 강남대학교 학술제 16팀 중 2등, 우수상'
),
(
  'Portfolio',
  '2025.05 - now',
  '',
  '#e6e6e6', '#2c2d2e', 2,
  E'## 👋 프로젝트 소개\n\n개인 포트폴리오 웹사이트. Next.js App Router + Tailwind CSS + Supabase CMS.\n\n## 💻 기술 스택\n\n- Next.js 16, React 19, TypeScript\n- Tailwind CSS v4, Framer Motion\n- Zustand, Supabase'
),
(
  'Hanamory: Yolov5 꽃다발 인식 서비스',
  '2025.03 ~ 2025.12',
  '/images/hanamory/hanamory_main.jpg',
  NULL, NULL, 3,
  E'## 👋 프로젝트 소개\n\nYOLOv5 기반 꽃다발 인식 및 추천 서비스.\n\n## 💻 기술 스택\n\n- React + TypeScript\n- YOLOv5, Python Flask'
),
(
  '도망가자: 재난상황 대피소 제공 서비스',
  '2025.02 ~ 2025.04',
  '/images/runaway/runaway_main.png',
  NULL, NULL, 4,
  E'## 👋 프로젝트 소개\n\n재난 발생 시 주변 대피소 정보를 실시간으로 제공하는 서비스.\n\n## 💻 기술 스택\n\n- React + TypeScript\n- Kakao Maps API, 공공데이터 API'
),
(
  'LikeionKNU: 아기사자 리크루팅 서비스',
  '2024.12 - 2025.03',
  '/images/likelion/likelion_main.png',
  NULL, NULL, 5,
  E'## 👋 프로젝트 소개\n\n강남대학교 멋쟁이사자처럼 신입 부원 모집 전용 웹 서비스.\n\n## 💻 기술 스택\n\n- React + TypeScript + Vite\n- Tailwind CSS'
);

-- Stack items
INSERT INTO stack_items (category, name, is_learning, sort_order) VALUES
('Frontend', 'TypeScript / React', false, 0),
('Frontend', 'Next.js', true, 1),
('Frontend', 'React Query', false, 2),
('Frontend', 'Zustand / Tailwind', false, 3),
('Backend', 'Java / Spring Boot', true, 0),
('Backend', 'Python', false, 1),
('Backend', 'MySQL / PostgreSQL', false, 2),
('Infra', 'AWS (EC2, S3)', false, 0),
('Infra', 'GitHub Actions (CI/CD)', false, 1),
('Infra', 'Vite / Webpack (Build)', false, 2),
('Infra', 'Docker / k8s', true, 3),
('Cooperation', 'Git / GitHub', false, 0),
('Cooperation', 'Figma', false, 1),
('Cooperation', 'Mattermost / Slack', false, 2),
('Cooperation', 'Notion', false, 3);

-- Education
INSERT INTO education (institution, period, department, content_md, sort_order) VALUES
('SSAFY 15기', '2026.01 ~ 진행 중', 'Samsung SW·AI academy For Youth - Java Track',
 E'· SSAFY 자치회, 서울 14반 반장\n· 1월 월간 베스트 싸피 교육생 선정', 0),
('강남대학교', '2020.03 ~ 2026.02', 'Engineering Department of Software',
 E'· GPA 3.92 / 4.5\n· 4-8학기 연속 성적 우수, 학년 수석', 1),
('동두천고등학교', '2017.03 ~ 2020.01', '',
 E'· 동두천고등학교 IT 동아리 ''로봇빌'' 개발 팀장\n· 고교-대학 연계사업, 신한대 웹 개발 수업 수강', 2);

-- Career
INSERT INTO career (company, period, department, content_md, sort_order) VALUES
('근로복지공단 용인지사', '2025.03 ~ 재직 중', '가입지원부',
 E'· 4대보험 관련업무 처리, 전산처리\n· 컴퓨터 장비 수리 및 유지보수', 0),
('경인지방우정청 신갈우체국', '2024.01 ~ 2025.03', '우편물류과',
 E'· 택배, 우편 관련 전산처리 및 물류 접수', 1),
('777사령부 특수정보병', '2021.09 ~ 2023.06', '대한민국 공군 830기',
 E'· 군용 소프트웨어 개발 및 유지보수\n· 군 관련 첩보 관리 및 특수정보처리', 2);

-- Activities
INSERT INTO activities (organization, period, role, content_md, external_link, sort_order) VALUES
('멋쟁이사자처럼 13기', '2024.11 ~ 2026.02', '부회장 · 프론트엔드운영진',
 E'· 강남대학교 멋쟁이사자처럼 13기 프론트엔드 파트 운영진으로 활동\n· 매주 목요일 아기사자들에게 개발 지식을 공유하는 프론트엔드 세션을 기획, 진행\n· 대학 연합 아이디어톤, 중앙 해커톤, 어흥콘, 간지톤 등 팀원들과 협업',
 'https://bit.ly/4lKIXPW', 0),
('경기청년 갭이어', '2024.05 ~ 2024.11', '경기도일자리재단 - 개인',
 E'· 경기도 일자리재단 주관, 경기청년 갭이어 프로젝트에 개인으로 참여',
 NULL, 1);

-- Certifications
INSERT INTO certifications (title, date_text, issuer, sort_order) VALUES
('정보처리기사', '2025.09', '한국산업인력공단', 0);

-- About content
INSERT INTO about_content (section_key, content_md) VALUES
('contact', E'Name. 최진형\nEmail. wlsgud2414@naver.com\nResidence. Seoul, South Korea'),
('bio', E'안녕하세요, **경험을 설계하는 개발자 최진형**입니다.\n\n저는 단순히 기능을 구현하는 것을 넘어, **사용자에게 어떻게 전달할지를 고민**합니다.\n기술은 도구일 뿐, 개발의 진정한 목표는 사람에게 닿는 경험이라고 생각하기 때문입니다.\n\n**새로운 기술을 빠르게 습득하고 적용하는 것**을 좋아합니다.\n아직 최신 기술이 닿지 않은 영역을 찾아 AI 모델과 소프트웨어를 빠르게 개발하고 실험합니다.\n\n**현재는 삼성청년SW·AI아카데미(SSAFY) 15기 Java 트랙을 수료중이며\n개발자로서의 역량을 키우고 있습니다.**');
