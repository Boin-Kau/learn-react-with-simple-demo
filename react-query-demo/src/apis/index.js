/**
 * @author Charles
 * @file REST API 호출 Function을 모아놓는 파일
 */
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c4e59022826dc465ea5620d6adaa6813";

/**
 * 
 * (TMDB OPEN API) NOW_PLAYING MOVIE 데이터 조회(GET) 함수 
 * 
 * @param {number} page - Specify which page to query
 * @returns response 객체에서 'data'라는 키 값을 가진 객체 반환(구조분해할당)
 * 
 * @todo API key는 .env 파일로 분리하고, Base url은 axios client 관련 util 파일로 분리하여 사용하는 것이 좋음
 * @see https://developers.themoviedb.org/3/movies/get-now-playing
 */
const getNowPlayingMovies = async (page) => {
  try {
    const {data} = await axios({
      method: "get",
      url: BASE_URL + "/movie/now_playing",
      params: {
        api_key: API_KEY,
        language: "ko",
        region: "KR",
        page: page,
      },
    });
    return data;
  } catch (e) {
    throw Error(e);
  }
}

export { getNowPlayingMovies }

