## 스마트폰 및 태블릿 쇼핑몰의 관리자 페이지

### [배포 링크](https://block-odyssey.vercel.app/)

<hr>

### 항목

- 상품내용의 최대 길이가 40자를 넘어갈 때 줄여서 표시됩니다.
- 검색 내역이 존재하다면 새로고침 했을 때 키워드와 조건이 유지됩니다.
- 데이터의 양이 표시됩니다.
  ![Jan-22-2023 13-26-58](https://user-images.githubusercontent.com/104412610/213900929-43612b3f-41ab-492b-ac68-77eb9f809964.gif)

### 검색 기능

- 검색 조건을 선택할 수 있습니다.
- 해당 검색조건과 키워드에 따라 데이터가 필터링 됩니다.
- 새로고침 후에도 데이터가 유지됩니다.
  ![search](https://user-images.githubusercontent.com/104412610/213900936-7c5669fa-08c0-41a9-b239-d69577fc8d00.gif)

### 페이지 네이션

- 선택 상자를 통해 10,20,50개의 항목을 선택하고, 확인할 수 있습니다.
- 버튼을 통해 페이지를 이동할 수 있습니다. 이때 데이터의 총량을 넘어서게 되면 버튼은 동작하지 않습니다.
  ![row](https://user-images.githubusercontent.com/104412610/213900935-f685a9ef-0046-4d5a-8db4-10d6e06494b4.gif)
  ![arrow](https://user-images.githubusercontent.com/104412610/213900927-52483143-dae9-4aef-9266-dc7714cee1bd.gif)

### 부가 에러 사항 방지

- 잘못된 url로 접근 시 페이지의 검색 내역과 url이 초기화됩니다.
  ![error](https://user-images.githubusercontent.com/104412610/213900928-b209ef91-f810-4639-b4cb-152981f8dbac.gif)

### 반응형 구현

- 데스크탑이 아닌 유저도 데이터를 확인 할 수 있도록 너비에 따라 출력내용이 조정됩니다.
  ![move2](https://user-images.githubusercontent.com/104412610/213901004-0f04759c-d84f-4435-b47a-f677797dd6f1.gif)

### 커밋 메세지 규약

- ✨ feat: 새로운 기능의 추가
- 🎨 style: css의 추가, 수정
- 🐛 fix: 에러 수정
- 📝 docs: 문서 추가/수정
- ♻️ refactoring : 코드 리팩토링
- ⚙️ setting : 세팅 관련 작업
