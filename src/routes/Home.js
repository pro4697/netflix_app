import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';

export const API_KEY = 'aef59e66e0a35709a7f0c493826379b3';
export const BASE_URL = 'https://api.themoviedb.org/3';
/*
  1. 장르 정보를 외부 파일의 함수로 빼서 저장하여 movie컴포넌트에서 그 함수를 호출한다.
  2. 일단 UI조정후 클릭시 상세정보 나오게, 배경화면은 backdrop_path로 접근
  3. 폰트도 포트폴레오 사이트에 적용한 것 가져오기
*/
class Home extends React.Component {
  state = {
    isLoading: true,
    results: [],
    genres: [],
  };

  getTopRated = async () => {
    const link = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`;
    const {
      data: { results },
    } = await axios.get(link);
    this.setState({ results, isLoading: false });
    console.log({ results });
  };

  getGenre = async () => {
    const Genre = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;
    const {
      data: { genres },
    } = await axios.get(Genre);
    this.setState({ genres });
    console.log({ genres });
  };

  componentDidMount() {
    this.getGenre();
    this.getTopRated();
  }

  render() {
    const { isLoading, results, genres } = this.state;
    return (
      <container>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>
              <i className='fa fa-spinner fa-spin'></i>
            </span>
          </div>
        ) : (
          <section className='container'>
            <div className='movies'>
              {results.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  _date={movie.release_date}
                  overview={movie.overview}
                  _poster={movie.poster_path}
                  vote={movie.vote_average}
                  genres={movie.genre_ids}
                />
              ))}
            </div>
          </section>
        )}
      </container>
    );
  }
}

export default Home;
