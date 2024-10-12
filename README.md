## 🌌 조각집 2팀

### 🌌 조각집

기억 저장 및 공유 서비스
<br>
<br>

### 💡 서비스 핵심 기능

**`그룹 생성 및 관리`**

- 그룹 생성 및 조회, 수정, 삭제
- 그룹 공개 여부 설정 (비밀번호를 통해 권한에 따라 접근)
- 이미지, 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지수, 추억수, 그룹 공감수
- 최신순, 게시글 많은순, 공감순, 획득 배지순으로 정렬
- 그룹명으로 검색

**`게시글(추억) 작성 및 관리`**

- 게시글 작성 및 조회, 수정, 삭제 가능 (수정, 삭제는 비밀번호 일치 시 가능)
- 추억 공개 여부 설정 (비밀번호를 통해 권한에 따라 접근)
- 각 추억의 닉네임, 추억 공개 여부, 제목, 이미지, 태그, 장소, 추억의 순간, 추억 공감수(중복 가능), 댓글수
- 최신순, 댓글순, 공감순으로 정렬
- 제목, 태그로 검색
<br>

### 🖥️ 구현뷰
| 공개 그룹 목록  |  비공개 그룹 목록   |  그룹 목록(데이터 X)   |
| :------------: | :------------: | :------------: |
| `이미지 삽입 예정` | `이미지 삽입 예정` | `이미지 삽입 예정` |
| **그룹 만들기**   |  **비공개 그룹 접근 권환 확인**   |  **404**   |
| <img width="100%" src="https://github.com/user-attachments/assets/7995aa67-10a9-40e4-b50b-74a3ce846ebe"> | <img width="100%" src="https://github.com/user-attachments/assets/f33da928-4de8-4423-bea7-e20c7d15576b"> | <img width="100%" src="https://github.com/user-attachments/assets/3caab0e1-0660-4896-b8b5-47609dce91fe"> |
| **그룹 상세 - 공개 추억**   |  **그룹 상세 - 비공개 추억**   |  **그룹 상세 - 데이터 X**   |
| `이미지 삽입 예정` | `이미지 삽입 예정` | `이미지 삽입 예정` |
|   |  **그룹 정보 수정 모달**   |  **그룹 삭제 모달**   |
|  | `이미지 삽입 예정` | `이미지 삽입 예정` |
| **추억 올리기**   |  **추억 올리기 권한 확인 모달**   |  **비공개 추억 접근 권한 확인**   |
| <img width="100%" src="https://github.com/user-attachments/assets/c1ca5c4e-3ec3-45dc-8f05-5202d4e84a79"> | <img width="100%" src="https://github.com/user-attachments/assets/a144a8e2-4c4d-4ffc-bee9-1fdac3db9651"> | <img width="100%" src="https://github.com/user-attachments/assets/f48f45bf-0a8b-4d91-bd90-037b18173817"> |
| **추억 상세**   |  **추억 수정 모달**   |  **추억 삭제 모달**   |
| `이미지 삽입 예정` | `이미지 삽입 예정` | `이미지 삽입 예정` |
<br>

### 👩🏻‍💻 개발 팀원

#### Frontend
| <center> 김서윤 </center> | <center> 목소연 </center> |
| --- | --- |
| <div align="center"><img src="https://avatars.githubusercontent.com/u/90364700?v=4" width="150px;" alt=""/></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/126389940?v=4" width="150px;" alt=""/></div> |
| <div align="center">Header, Input, Button, Modal **컴포넌트 구현**</div> | <div align="center">Card, CardInfo, Tab, Dropdown **컴포넌트 구현**</div> |
| <div align="center">그룹 만들기/추억 올리기 **페이지**, 비공개 그룹/추억 접근 권한 **페이지**,</br> 추억 올리기 권한 **모달**, 그룹 수정/삭제 **모달**, 추억 수정/삭제 **모달**</div> | <div align="center">공개 그룹 목록 **페이지**, 비공개 그룹 목록 **페이지**,</br> 그룹 상세 **페이지** (공개/비공개 추억), 추억 상세 **페이지**</div> |
| <div align="center">[@pookey1104](https://github.com/pookey1104)</div> | <div align="center">[@mogg22](https://github.com/mogg22)</div> |
<br>

### 💻 프로젝트 스택 및 라이브러리

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
<br>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<br>
<br>
### 📁 프로젝트 폴더 구조

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
<br>

### ⚒️ 컨벤션

#### Git Flow

- main ← feature

> - main branch : 배포 및 전체 개발 브랜치 (feature이 merge되는 브랜치)
> - feature : 페이지/기능 별 브랜치 

#### Commit Style

- ✨ Feat : 새로운 기능 추가
- 🐛 Fix : 버그 수정
- 💄 Design : UI(CSS) 수정
- ✏️ Typing Error : 오타 수정
- 🚚 Mod : 폴더 구조 이동 및 파일 이름 수정
- 💡 Add : 파일 추가 (ex- 이미지 추가)
- 🔥 Del : 파일 삭제
- ♻️ Refactor : 코드 리펙토링
- 🎉 Begin : 프로젝트 세팅

#### Code Styling

- camelCase
    - 변수명, 함수명에 적용
    - 첫글자는 소문자로 시작, 띄어쓰기는 붙이고 뒷 단어의 시작을 대문자로
        - ex- handleDelete
    - 언더바 사용 X (클래스명은 허용)
