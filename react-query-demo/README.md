## TMDB API를 활용한 API 연동 및 React-Query 활용 실습

### 실습준비

- TMDB API 사이트의 [Now Playing Movies API](https://developers.themoviedb.org/3/movies/get-now-playing)를 사용했습니다.
- TMDB 사이트 회원가입 해주시고, API KEY를 발급받아 주세요.

### 프로젝트

API 통신 및 데이터 패칭 그리고 Pagnigation 구현을 위해 Axios, React-Query, Ant Design 라이브러리를 사용합니다.  
아래의 명령어로 라이브러리들을 설치해주세요.

```
npm i axios
npm i @tanstack/react-query
npm i antd
```
  
Ant Design에서는 [Pagnition Component](https://ant.design/components/pagination/)를 사용했습니다. 


