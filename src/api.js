import axios from 'axios';
/*
  1. 장르 정보를 외부 파일의 함수로 빼서 저장하여 movie컴포넌트에서 그 함수를 호출한다.
  2. 일단 UI조정후 클릭시 상세정보 나오게, 배경화면은 backdrop_path로 접근
  3. 폰트도 포트폴레오 사이트에 적용한 것 가져오기
*/

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'aef59e66e0a35709a7f0c493826379b3';

export const movieApi = {
  nowPlaying: () =>
    axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR`
    ),
  nowPlayingUS: () =>
    axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`),

  upComing: () =>
    axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`),
  upComingUS: () => axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`),

  popular: () =>
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`),
  popularUS: () => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),

  topRated: () =>
    axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`),
  topRatedUS: () => axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`),

  search: (query) =>
    axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`
    ),

  getDetail: (id) =>
    axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`),

  getVideos: (id) =>
    axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&append_to_response=videos`
    ),
};

export const tvApi = {
  today: () =>
    axios.get(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=ko-KR`),
  thisWeek: () =>
    axios.get(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ko-KR`),
  topRated: () =>
    axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko-KR`),
  popular: () =>
    axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR`),
  search: (query) =>
    axios.get(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}&language=ko-KR`
    ),
  getDetail: (id) =>
    axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko-KR`),
  getVideos: (id) =>
    axios.get(
      `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&append_to_response=videos`
    ),
};
