import axios from 'axios';

export const API_KEY = 'aef59e66e0a35709a7f0c493826379b3';
export const BASE_URL = 'https://api.themoviedb.org/3';
/*
  1. 장르 정보를 외부 파일의 함수로 빼서 저장하여 movie컴포넌트에서 그 함수를 호출한다.
  2. 일단 UI조정후 클릭시 상세정보 나오게, 배경화면은 backdrop_path로 접근
  3. 폰트도 포트폴레오 사이트에 적용한 것 가져오기
*/

const makeRequest = (path, params) =>
  axios.get(`${BASE_URL}${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
};
