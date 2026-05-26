<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-26 | Updated: 2026-05-26 -->

# lib

## Purpose
공통 유틸리티 모듈. 현재는 axios HTTP 클라이언트 인스턴스 하나만 존재한다.

## Key Files

| File | Description |
|------|-------------|
| `axios.ts` | axios 인스턴스 — baseURL은 `NEXT_PUBLIC_API_URL` 환경변수, 기본값 `https://api.example.com` |

## For AI Agents

### Working In This Directory
- API 호출이 필요해지면 이 인스턴스를 임포트해서 사용 (`import api from '@/lib/axios'`)
- baseURL 변경은 `.env.local`의 `NEXT_PUBLIC_API_URL` 값으로 제어
- 현재 포트폴리오에서는 외부 API 호출이 없으므로 사실상 미사용 상태

<!-- MANUAL: -->
