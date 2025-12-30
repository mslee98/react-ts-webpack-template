// 코드 실수 방지
module.exports = {
  root: true,
  env: {
    browser: true, // window, document, navigator 전역 변수를 에러로 잡지 않음
    es2021: true,
  },
  extends: [
    'eslint:recommended', // 사용안하는 변수, 잘못된 for-loop 등
    'plugin:react/recommended', // react 전용규칙 ex) JSX key 유무, props 검증 등
    'plugin:react-hooks/recommended', // hook 규칙 - 조건/반복문 내에서 hook 금지, dependency 배열 검사 등
    'plugin:prettier/recommended', // ESlint 규칙 중 Prettier랑 충돌하는 스타일 규칙 전무 OFF, Prettier 결과를 ESLint 에러/경고로 보여줌
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect', // 리엑트 버전 자동 감지
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ 
    // react/react-in-jsx-scope 이 부분 import React from 'react'를 17아래버전 JSX변환 때문에 작성해줘야하는데
    // webpack.config.js ["@babel/preset-react", { runtime: 'automatic' }], 이 부분을 추가하면 import React from 'react' 구문 제거가 가능 함
    'prettier/prettier': 'warn',
  },
};
