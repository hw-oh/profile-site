# ROADMAP.md — AI Developer Profile Site

## Overview

Hyunwoo Oh의 인공지능 개발자 웹 이력서/포트폴리오 사이트 개발 로드맵.
W&B Senior AI Solution Engineer, NAVER ML Engineer, VUNO Deep Learning Researcher 경력과
강화학습/의료AI 연구 배경을 효과적으로 전달하는 모던 웹사이트를 구축한다.

---

## Tech Stack

| 영역 | 기술 | 선정 이유 |
|------|------|-----------|
| Framework | **Next.js 14 (App Router)** | SSG로 빠른 로딩, SEO 최적화 |
| Language | **TypeScript** | 타입 안전성, 유지보수성 |
| Styling | **Tailwind CSS** | 빠른 UI 개발, 반응형 디자인 |
| Animation | **Framer Motion** | 스크롤 애니메이션, 페이지 전환 |
| Deployment | **Vercel** | Next.js 최적 배포, 무료 호스팅 |
| Content | **MDX** | 블로그/프로젝트 상세 페이지 (선택) |

---

## Phase 1: 프로젝트 초기 설정

- [ ] Next.js 14 + TypeScript 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] Framer Motion 설치
- [ ] 프로젝트 폴더 구조 설계
- [ ] 글로벌 레이아웃 및 테마 설정 (다크/라이트 모드)
- [ ] 기본 폰트 설정 (한/영/일 다국어 대응)
- [ ] SEO 메타데이터 기본 설정

### 폴더 구조 (예시)

```
src/
├── app/
│   ├── layout.tsx          # 글로벌 레이아웃
│   ├── page.tsx            # 메인 랜딩 페이지
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 네비게이션
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                 # 재사용 컴포넌트
├── data/
│   └── resume.ts           # CV 데이터 (구조화)
└── lib/
    └── utils.ts
```

---

## Phase 2: Hero & Navigation 섹션

- [ ] **Header/Navigation**
  - 스크롤 시 축소되는 고정 네비게이션 바
  - 섹션 간 스무스 스크롤 링크
  - 모바일 햄버거 메뉴
  - 다크/라이트 모드 토글 버튼

- [ ] **Hero 섹션**
  - 이름: **Hyunwoo Oh**
  - 타이틀: Senior AI Solution Engineer @ Weights & Biases
  - 한 줄 소개: ML Engineer | Reinforcement Learning Researcher
  - CTA 버튼: Resume PDF 다운로드, Contact, GitHub/LinkedIn 링크
  - 타이핑 애니메이션 또는 파티클 배경 (AI 느낌)

---

## Phase 3: About 섹션

- [ ] **자기소개**
  - AI/ML 분야 경력 요약 (의료AI, 검색/추천, LLM 리더보드)
  - 3개국어 (한국어/일본어/영어) 능력 강조
  - 연구 관심사: Machine Learning, Reinforcement Learning, Contextual Bandit

- [ ] **Education 카드**
  - M.S. — The University of Tokyo (2017-2019)
    - Thesis: Reinforcement Learning with RNN and Attention
    - Research Group of Game AI
  - B.A. — University of Tsukuba (2013-2017)
    - Thesis: Identifying Rush Strategies in RTS Game Logs
    - NLP Laboratory

---

## Phase 4: Experience (경력) 섹션 — 타임라인 UI

- [ ] **인터랙티브 타임라인** 형태로 경력 표시
- [ ] 각 경력 카드에 포함할 내용:

  ### Weights & Biases (2024-present)
  > Senior AI Solution Engineer, San Francisco
  - 한국 AI 시장 프리세일즈/포스트세일즈 리드
  - 호랑이 리더보드(Horangi Leaderboard) 설립 — 한국 대표 LLM 리더보드
  - 대규모 엔터프라이즈 관계 구축, $000K+ 매출
  - 밋업/워크숍 주도

  ### NAVER (2021-2024)
  > Machine Learning Engineer, Seongnam
  - 초개인화 검색팀 (Search & Discovery Group)
  - 온라인 머신러닝 파이프라인 구축 (from scratch)
  - 강화학습 기반 최적화
  - 네이버 검색 랭킹 알고리즘 최적화

  ### VUNO Inc. (2019-2021)
  > Deep Learning Researcher → Team Leader, Seoul
  - VUNO Med - DeepBrain: 뇌 영역 분할, 알츠하이머 분류 모델
  - PROMISE-I: 전립선 분할/분류 모델
  - AI 추론 속도 최적화, 임상시험 지원

---

## Phase 5: Projects & Highlights 섹션

- [ ] **주요 프로젝트 카드형 그리드 레이아웃**

  ### Horangi Leaderboard
  - 설명: 한국 대표 LLM 리더보드, 대형 엔터프라이즈 채택
  - 태그: `LLM`, `Evaluation`, `Leaderboard`, `W&B`

  ### VUNO Med - DeepBrain
  - 설명: MRI 기반 뇌 영역 자동 분할 및 알츠하이머 진단 AI
  - 태그: `Medical AI`, `Segmentation`, `Classification`, `PyTorch`
  - 링크: 뉴스 기사 연결

  ### PROMISE-I
  - 설명: 전립선 MRI 자동 분석 AI (분할 + 분류)
  - 태그: `Medical AI`, `Clinical Trial`, `Deep Learning`

  ### NAVER Search Optimization
  - 설명: 강화학습/Contextual Bandit 기반 검색 랭킹 최적화
  - 태그: `Reinforcement Learning`, `Search`, `Ranking`, `PySpark`

  ### Kaggle
  - SIIM-FISABIO-RSNA COVID-19 Detection — Top 6% (Bronze)
  - 태그: `Kaggle`, `Object Detection`, `Medical AI`

- [ ] 각 카드에 hover 효과 및 상세 모달/페이지 연결

---

## Phase 6: Publications 섹션

- [ ] **논문 목록** — 연도별 정렬, 카테고리 필터 (Journal / Workshop)
- [ ] 각 논문 항목에 포함:
  - 제목, 저자 (본인 하이라이트), 학회/저널명, 연도
  - Co-first author 등 역할 배지
  - DOI/링크 버튼

  ### Refereed Publications (3편)
  - Kim, D. Y., **Oh, H. W.**, et al. (2023) — Korean Journal of Radiology
  - Park, H. Y., ..., **Oh, H. W.**, et al. (2023) — European Radiology
  - Bae, J. B., ..., **Oh, H.**, et al. (2020) — Scientific Reports

  ### Workshop Papers (7편)
  - RSNA 2021, RSNA 2020 (의료AI)
  - TAAI 2018, GPW 2017/2018, ICEC 2017/2018 (게임AI/강화학습)

- [ ] **Research of the Day, RSNA 2021** 수상 하이라이트 배지

---

## Phase 7: Skills 섹션

- [ ] **기술 스택 시각화**

  ### AI/ML Framework
  - PyTorch, TensorFlow — 숙련도 바 또는 아이콘

  ### Data Engineering
  - PySpark, Scala, Spark, SQL

  ### Programming
  - Python (주력), Scala

  ### Languages
  - 🇰🇷 Korean (Native) | 🇯🇵 Japanese (Advanced) | 🇺🇸 English (Conversational)

- [ ] 아이콘 기반 깔끔한 그리드 또는 태그 클라우드 형태

---

## Phase 8: Awards & Activities 섹션

- [ ] **수상 내역**
  - Research of the Day, RSNA 2021
  - 한일공동이공계학부유학생 장학프로그램 13기 (2012-2017)

- [ ] **활동 (선택적 표시)**
  - 도쿄대/쓰쿠바대 한인회 대표
  - 축구팀 활동 (FC 청춘, 대학 축구부 등) — 인간미 표현

---

## Phase 9: Contact 섹션 & Footer

- [ ] **Contact Form** 또는 mailto 링크
  - Email: tinkerrman@gmail.com
  - Phone: +82-10-7595-2756
  - LinkedIn 프로필 링크
  - GitHub 프로필 링크
  - Kaggle 프로필 링크

- [ ] **Footer**
  - Copyright
  - "Built with Next.js" 등 기술 스택 표기
  - 소셜 링크 아이콘

---

## Phase 10: 폴리싱 & 배포

- [ ] **반응형 디자인** — 모바일/태블릿/데스크탑 완벽 대응
- [ ] **성능 최적화**
  - 이미지 최적화 (next/image)
  - 폰트 최적화 (next/font)
  - Lighthouse 점수 90+ 목표
- [ ] **SEO 최적화**
  - Open Graph 메타태그
  - JSON-LD 구조화 데이터 (Person schema)
  - sitemap.xml, robots.txt
- [ ] **애니메이션 마무리**
  - 스크롤 트리거 fade-in 애니메이션
  - 섹션 전환 효과
- [ ] **접근성(a11y)** 검수
- [ ] **Vercel 배포**
- [ ] **커스텀 도메인 연결** (선택)

---

## 디자인 방향

| 항목 | 방향 |
|------|------|
| 톤 | 프로페셔널하면서 모던, 테크 감성 |
| 색상 | 다크 모드 기본, 딥블루/퍼플 계열 액센트 |
| 타이포 | 깔끔한 산세리프 (Inter / Pretendard) |
| 레이아웃 | 싱글 페이지 스크롤 (SPA 느낌) |
| 차별점 | AI/ML 키워드 시각화, 인터랙티브 타임라인, 논문 필터링 |

---

## 우선순위 요약

```
Phase 1  → 프로젝트 셋업 (Day 1)
Phase 2  → Hero & Navigation (Day 1-2)
Phase 3  → About (Day 2)
Phase 4  → Experience 타임라인 (Day 2-3)
Phase 5  → Projects (Day 3-4)
Phase 6  → Publications (Day 4)
Phase 7  → Skills (Day 4-5)
Phase 8  → Awards & Activities (Day 5)
Phase 9  → Contact & Footer (Day 5)
Phase 10 → 폴리싱 & 배포 (Day 5-6)
```
