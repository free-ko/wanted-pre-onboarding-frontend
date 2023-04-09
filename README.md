# 배포 링크
https://todo-dev-kay.vercel.app/

<br/>

# 프로젝트 구조
```bash
📦 src
├── 📂 api
├── 📂 components
│   ├── 📂 auth 
│   │    ├── 📄 LoginForm
│   │    └── 📄 SignupForm
│   ├── 📂 todo
│   │    ├── 📄 TodoContext
│   │    ├── 📄 TodoInput
│   │    ├── 📄 TodoList
│   │    └── 📄 TodoItem
├── 📂 hooks
├── 📂 pages
│   ├── 📄 auth
│   └── 📄 todo
├── 📂 router
├── 📂 shared
├── 📂 styles
├── 📂 types
└── 📂 utils
```

<br/>

# 기능 시연
### 로그인, 회원가입

<img src="https://user-images.githubusercontent.com/47565280/230765743-f534ef17-7b40-4139-ad90-fd805c04c63a.gif" width="500" height="450"/>

- 이메일,비밀번호의 유효성 검사 로직 구현(이메일 조건: @ 포함, 비밀번호 조건: 8자 이상)
- 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼 활성화
- 회원가입 버튼 클릭시 `/signin`페이지로 이동
- 로그인 성공시, `/todo` 페이지로 이동
- 로그인 성공시, 응답 받은 JWT 로컬 스토리지에 저장
- `/signin` or `/signup`에서 로컬 스토리지에 토큰 있으면, 자동으로 `/todo` 이동
- `/todo`에서 로컬 스토리지에 토큰이 없으면, `/signin` 이동

<br/>

### Todo List
<img src="https://user-images.githubusercontent.com/47565280/230766736-e6d3604f-b7a4-4410-804d-6ec09fbad1f7.gif" width="500" height="450"/>

- Todo List의 수정, 삭제 기능 구현

<br/>

### 프로젝트 설치 및 실행
1. root 경로에 `.env` 파일 생성

```
REACT_APP_API_URL=https://pre-onboarding-selection-task.shop
```

2. 프로젝트 패키지 설치

```
npm install
```

3. 프로젝트 실행

```
npm start
```
### 사용 라이브러리
- Axios, react-router-dom, Emotion, react-toastify
