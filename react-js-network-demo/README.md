# 5주차 실습

## OpenWeatherMap 날씨 API를 활용한 API 연동 실습

### 실습준비

- OpenWeatherMap 사이트의 [Current weather data API](https://openweathermap.org/current)를 사용했습니다.
- OpenWeatherMap 사이트 회원가입 해주시고, API KEY를 발급받아 주세요.

### 프로젝트

스타일링을 위한 styled-components 라이브러리와 API 통신을 위한 Axios 라이브러리를 사용합니다.

```
npm i styled-components
npm i axios
```

Input 창에 도시를 입력하면, 날씨 정보를 받아올 수 있습니다. 도시를 반드시 영문으로 입력해주세요. (ex. Seoul)

본 프로젝트에는 기온과 하늘상태 관련 정보, 2가지만 활용했습니다. 다른 데이터들도 자유롭게 화면에 뿌려봐보시면 좋을 것 같습니다!!
