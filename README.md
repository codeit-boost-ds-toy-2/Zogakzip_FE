## 🌌 조각집 2팀 개발 팀원

| 이름 | 역할 분담 |
| 김서윤 | Header, Input, Button, Modal 컴포넌트 구현 |
| 목소연 | Card, CardInfo, Tab, Dropdown 컴포넌트 구현 |

## 💻 프로젝트 스택 및 라이브러리

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-61DAFB?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
<img src="https://img.shields.io/badge/styled-componentsn-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

## 📁 프로젝트 폴더 구조

```
Zogakzip_FE
├── README.md
├── node_modules
├── package.json
├── yarn.lock
├── eslint.config.js
├── vite.config.js
├── index.html
├── public
│   ├── favicon
│   └── fonts
└── src
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── components
    ├── img
    ├── pages
    ├── styles
    └── lib
```

- public
    - favicon
    - 폰트(otf, ttf, woff)
- src
    - components - 라우팅 페이지 외 모든 기능 및 컴포넌트
    - img - 사용되는 모든 이미지
    - pages - 라우팅 페이지
    - styles - CSS(Styled-components 등)
    - lib - 컬러 팔레트

## ⚒️ 컨벤션

### Git Flow

- main ← feature

> - main branch : 배포 및 전체 개발 브랜치 (feature이 merge되는 브랜치)
- feature : 페이지/기능 별 브랜치
> 

### Commit Style

- ✨ Feat : 새로운 기능 추가
- 🐛 Fix : 버그 수정
- 💄 Design : UI(CSS) 수정
- ✏️ Typing Error : 오타 수정
- 🚚 Mod : 폴더 구조 이동 및 파일 이름 수정
- 💡 Add : 파일 추가 (ex- 이미지 추가)
- 🔥 Del : 파일 삭제
- ♻️ Refactor : 코드 리펙토링
- 🎉 Begin : 프로젝트 세팅

### Code Styling

- camelCase
    - 변수명, 함수명에 적용
    - 첫글자는 소문자로 시작, 띄어쓰기는 붙이고 뒷 단어의 시작을 대문자로
        - ex- handleDelete
    - 언더바 사용 X (클래스명은 허용)
