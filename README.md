# D사 [프론트엔드 개발자] 사전 과제

**배포 링크** : https://power-point-test.vercel.app/

## 과제
- 파워포인트(PowerPoint)와 유사한 UI 및 기능 몇 가지를 간단한 수준으로 구현

### 전체 방향성 개요

1. **UI 일치**  
   - 샘플 페이지의 리본 탭(Ribbon Tab)과 버튼, 슬라이드 영역의 배치, 색상, 폰트, 숨김/고정 모드 전환 등 UI가 최대한 동일하게 보이도록 구현합니다.  
   - 전역 폰트로 Pretendard를 사용합니다.
2. **핵심 기능**  
   - **슬라이드 영역 확대/축소**  
     - Ctrl(Cmd)+마우스 스크롤 또는 하단 슬라이더를 통한 확대/축소 기능.  
   - **리본 탭 고정/해제 모드**  
     - 탭 UI를 항상 표시하거나, 필요할 때만 표시하는 두 가지 모드 전환.  
     - 탭 제목 더블클릭으로 모드 전환(고정 ↔ 자동 숨김).  
   - **도형(직사각형/원) 추가 및 드래그**  
     - 위치·크기·색깔·테두리(3px) 모두 랜덤 생성.  
     - 마우스로 드래그 이동 가능.  
   - **이미지 파일(PNG, SVG) 추출**  
     - 슬라이드 영역에 표시된 내용만 캡처하여 PNG/SVG로 저장.
3. **기술 스택과 구조**  
   - React 18 이상 또는 Next.js, Vite 등 React 기반 프레임워크 자유롭게 선택.  
   - 도형 및 슬라이드 영역 관리는 Canvas/DOM/fabric.js/konva.js 등 원하는 방식으로 구현 가능(필수 요구 사항만 충족하면 OK).  
   - HTML 요소를 Canvas로 변환해주는 라이브러리(html2canvas, dom-to-image, Konva 등) 활용 가능.
---

## 사전 설치 가이드
해당 프로젝트에서 package.json 파일 위치의 디렉토리로 이동하여 다음 명령어를 실행합니다.

```
npm install
```

## 프로젝트 통합 빌드 가이드
해당 프로젝트에서 package.json 파일 위치의 디렉토리로 이동하여 다음 명령어를 실행합니다.

```
npm run build # or yarn build
```

## 프로그램 실행 가이드
사전 설치 실행 후 다음 명령어를 실행합니다.

```
npm run dev # or yarn dev
```

명령어를 실행하면, 브라우저에서 <http://localhost:5173> 으로 접속하여 해당 웹 어플리케이션을 볼 수 있습니다.

### 개발 환경 정의

- 개발 언어 : Typescript
- 프레임워크 : React
- 상태 관리 : Zustand
- 패키지 매니저 : npm
- 빌드 도구 : Vite
- 번들러 : Vite
- 트랜스파일러 : SWC
- Deploy : Vercel

### 프로젝트 디렉토리 구조

```
src
 ┣ apis                       ----> # api 인스턴스 폴더
 ┣ assets                     ----> # 이미지 파일 및 SVG 파일 관리 폴더
 ┃ ┗ icon                     ----> # SVG 아이콘들을 포함하는 폴더
 ┣ components                 ----> # 컴포넌트 폴더
 ┃ ┣ icons                    ----> # Icon 컴포넌트
 ┃ ┗ ui                       ----> # 공통 UI 컴포넌트
 ┃ ┃ ┣ drawing                ----> # Drawing 관련 컴포넌트
 ┣ hooks                      ----> # Custom Hook 폴더
 ┣ layouts                    ----> # Layout 컴포넌트 폴더
 ┣ lib                        ----> # 서드 파티 library 관리 폴더
 ┣ pages                      ----> # page 폴더
 ┣ providers                  ----> # React 컨텍스트 프로바이더들을 포함하는 폴더
 ┣ store                      ----> # Redux 전역 상태 관리 폴더
 ┃ ┣ slices                   ----> # Redux 상태, 리듀서, 액션 생성자 관리 폴더
 ┣ stories                    ----> # Storybook UI 컴포넌트 Test 폴더
 ┣ styles                     ----> # CSS Style 설정 폴더
 ┣ tests                      ----> # test 폴더
 ┣ types                      ----> # type 정의 폴더
 ┣ utils                      ----> # util 함수 폴더
 ┣ App.tsx                    ----> # 루트 컴포넌트
 ┣ main.tsx                   ----> # 앱의 진입점(React Router를 설정하여 라우팅 구성)
```

### 해결하지 못한 이슈 정리

#### PageLayout 컴포넌트 모듈화 및 리팩토링

#### PNG, SVG 저장 기능 구현

#### Canvas 직사각형 & 원 생성 위치 에러 수정
