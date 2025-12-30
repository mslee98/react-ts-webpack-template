# React + TypeScript + Webpack Boilerplate

React 19와 TypeScript, Webpack 5를 기반으로 구성된 프론트엔드 개발 보일러플레이트입니다.

## 목차

- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [사전 요구사항](#사전-요구사항)
- [설치 방법](#설치-방법)
- [개발 환경 설정](#개발-환경-설정)
- [스크립트 명령어](#스크립트-명령어)
- [빌드 및 배포](#빌드-및-배포)
- [주요 설정 파일](#주요-설정-파일)
- [개발 가이드라인](#개발-가이드라인)
- [문제 해결](#문제-해결)

## 기술 스택

### Core
- **React** 19.2.3 - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Webpack** 5.104.1 - 모듈 번들러

### Build Tools
- **Babel** - JavaScript/TypeScript 트랜스파일러
  - `@babel/preset-env` - 최신 JavaScript 문법 변환
  - `@babel/preset-react` - JSX 변환 (automatic runtime)
  - `@babel/preset-typescript` - TypeScript 변환

### Development Tools
- **Webpack Dev Server** 5.2.2 - 개발 서버 (HMR 지원)
- **ESLint** 9.39.2 - 코드 린팅
- **Prettier** 3.7.4 - 코드 포맷팅
- **web-vitals** 2.1.4 - 성능 측정

### Loaders & Plugins
- **babel-loader** - Babel을 통한 트랜스파일링
- **css-loader** - CSS 모듈 처리
- **style-loader** - CSS를 `<style>` 태그로 주입
- **html-webpack-plugin** - HTML 파일 자동 생성

## 주요 기능
- **React 19** 최신 버전 지원
- **TypeScript** 엄격 모드 설정
- **Hot Module Replacement (HMR)** 지원
- **Path Alias** (`@/`) 설정
- **ESLint + Prettier** 통합 설정
- **Web Vitals** 성능 측정
- **Asset Modules** 이미지/폰트 처리
- **History API Fallback** SPA 라우팅 지원
- **자동 브라우저 열기** 개발 서버 실행 시

## 프로젝트 구조

```
study/
├── public/                 # 정적 파일
│   ├── assets/            # 이미지, 폰트 등
│   │   └── Inter-Medium.woff2
│   └── index.html         # HTML 템플릿
├── src/                    # 소스 코드
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── pages/             # 페이지 컴포넌트
│   │   └── Home.tsx
│   ├── utils/             # 유틸리티 함수
│   ├── App.tsx             # 루트 컴포넌트
│   ├── main.tsx            # 애플리케이션 진입점
│   ├── style.css           # 전역 스타일
│   └── reportWebVitals.js  # 성능 측정
├── dist/                   # 빌드 결과물 (자동 생성)
├── node_modules/           # 의존성 패키지
├── .eslintrc.cjs           # ESLint 설정
├── .prettierrc             # Prettier 설정
├── .gitignore              # Git 무시 파일
├── package.json            # 프로젝트 메타데이터 및 의존성
├── tsconfig.json           # TypeScript 설정
└── webpack.config.js       # Webpack 설정
```

## 사전 요구사항

- **Node.js** 22.x 이상 권장
- **npm** 7.x 이상 (또는 yarn, pnpm)

## 설치 방법

1. 의존성 패키지 설치
```bash
npm install
```

## 개발 환경 설정

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면:
- 자동으로 브라우저가 열립니다 (포트 3000)
- Hot Module Replacement (HMR)가 활성화됩니다
- 코드 변경 시 자동으로 새로고침됩니다

### 빌드

```bash
npm run build
```

프로덕션 빌드가 `dist/` 디렉토리에 생성됩니다.

## 스크립트 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (포트 3000) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm test` | 테스트 실행 (현재 미구현) |

## 빌드 및 배포


### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다:
- `dist/bundle.js` - 번들된 JavaScript 파일
- `dist/index.html` - HTML 파일
- `dist/public/assets/` - 정적 자산 파일

### 배포

`dist/` 디렉토리의 내용을 정적 호스팅 서비스(AWS S3, Netlify, Vercel 등)에 업로드하면 됩니다.

## 주요 설정 파일

### Webpack 설정 (`webpack.config.js`)

#### 주요 기능
- **Entry**: `src/main.tsx`
- **Output**: `dist/bundle.js`
- **Babel Loader**: TypeScript/TSX 파일을 JavaScript로 변환
- **CSS Loader**: CSS 파일을 JavaScript 모듈로 변환
- **Style Loader**: CSS를 `<style>` 태그로 DOM에 주입
- **Asset Modules**: 이미지, 폰트 등 정적 자산 처리
- **Path Alias**: `@/` → `src/` 경로 별칭
- **Dev Server**: HMR, History API Fallback 지원

#### Babel Preset React 설정
```javascript
["@babel/preset-react", { runtime: 'automatic' }]
```
- `automatic` 모드로 설정하면 React 17+ 스타일의 JSX 변환을 사용합니다
- `import React from 'react'` 구문이 필요 없습니다
- React 16 이하 버전에서는 이 설정이 없으면 JSX 변환이 되지 않습니다

### TypeScript 설정 (`tsconfig.json`)

- **Target**: ES6
- **Module**: ESNext (트리 쉐이킹 최적화)
- **Strict Mode**: 활성화 (엄격한 타입 체크)
- **JSX**: `react-jsx` (React 17+ 스타일)
- **Path Alias**: `@/*` → `src/*`

### ESLint 설정 (`.eslintrc.cjs`)

#### Extends
- `eslint:recommended` - 기본 ESLint 규칙
- `plugin:react/recommended` - React 전용 규칙
- `plugin:react-hooks/recommended` - React Hooks 규칙
- `plugin:prettier/recommended` - Prettier 통합

#### 주요 규칙
- `react/react-in-jsx-scope: 'off'` - React 17+ JSX 변환 사용으로 인해 비활성화
- `prettier/prettier: 'warn'` - Prettier 포맷팅 위반 시 경고

### Prettier 설정 (`.prettierrc`)

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

## 개발 가이드라인

### 스타일링

- 현재는 일반 CSS 사용
- TailwindCSS/Emotion/Styled Component 추가 가능 (필요 시 설정)

### 파일 구조

- **컴포넌트**: `src/components/`
- **페이지**: `src/pages/`
- **커스텀 훅**: `src/hooks/`
- **유틸리티**: `src/utils/`

## 문제 해결

### Web Vitals

개발 환경에서만 Web Vitals를 측정합니다. 프로덕션 환경에서는 자동으로 비활성화됩니다.

```javascript
if(process.env.NODE_ENV == 'development') {
    reportWebVitals(console.log);
}
```

### 폰트 경로

폰트 파일은 `public/assets/` 디렉토리에 위치하며, Webpack의 Asset Modules를 통해 처리됩니다.

```css
@font-face {
  font-family: "Inter";
  src: url("/public/assets/Inter-Medium.woff2") format("woff2");
}
```

### JSX 변환 관련

- `@babel/preset-react`의 `runtime: 'automatic'` 설정이 없으면 React 16 이하 스타일로 변환됩니다
- 이 경우 `import React from 'react'` 구문이 필요하며, 없으면 JSX 변환이 되지 않습니다
- 현재 설정은 React 17+ 스타일이므로 `import React` 구문이 필요 없습니다

