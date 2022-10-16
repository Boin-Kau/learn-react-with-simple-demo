import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c4e59022826dc465ea5620d6adaa6813";

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