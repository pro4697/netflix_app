import React from 'react';
import Movie from '../components/Movie';
import './Home.css';
import { movieApi } from '../api';
import 'font-awesome/css/font-awesome.min.css';
import Section from '../components/Section';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
/*
  1. 장르 정보를 외부 파일의 함수로 빼서 저장하여 movie컴포넌트에서 그 함수를 호출한다.
  2. 일단 UI조정후 클릭시 상세정보 나오게, 배경화면은 backdrop_path로 접근
  3. 폰트도 포트폴레오 사이트에 적용한 것 가져오기
*/
class Home extends React.Component {
  state = {
    isLoading: true,
    nowPlaying: [],
    topRated: [],
    upComing: [],
    // genres: [],
  };

  async componentDidMount() {
    const {
      data: { results: nowPlaying },
    } = await movieApi.nowPlaying();
    const {
      data: { results: topRated },
    } = await movieApi.topRated();
    const {
      data: { results: upComing },
    } = await movieApi.upComing();

    console.log({ nowPlaying });
    console.log({ topRated });
    console.log({ upComing });
    // 한글에 설명이 없는것도 있음. 영어버전과 같이받아와서 overview만 추출하여 따로 넘겨줘야 할듯
    this.setState({ nowPlaying, topRated, upComing, isLoading: false });
  }

  render() {
    const { isLoading, nowPlaying, topRated, upComing } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>
              <i className='fa fa-spinner fa-spin'></i>
            </span>
          </div>
        ) : (
          <>
            {nowPlaying && nowPlaying.length > 0 && (
              <Section title='Now Playing'>
                <div className='movies'>
                  {nowPlaying.map((movie) => (
                    <Movie
                      key={movie.id}
                      title={movie.title}
                      _date={movie.release_date}
                      overview={movie.overview}
                      poster={IMG_PATH + movie.poster_path}
                      backdrop={IMG_PATH + movie.backdrop_path}
                      vote={movie.vote_average}
                      genres={movie.genre_ids}
                    />
                  ))}
                </div>
              </Section>
            )}
            {topRated && topRated.length > 0 && (
              <Section title='Top Rated'>
                <div className='movies'>
                  {topRated.map((movie) => (
                    <Movie
                      key={movie.id}
                      title={movie.title}
                      _date={movie.release_date}
                      overview={movie.overview}
                      poster={IMG_PATH + movie.poster_path}
                      backdrop={IMG_PATH + movie.backdrop_path}
                      vote={movie.vote_average}
                      genres={movie.genre_ids}
                    />
                  ))}
                </div>
              </Section>
            )}
            {upComing && upComing.length > 0 && (
              <Section title='Up Coming'>
                <div className='movies'>
                  {upComing.map((movie) => (
                    <Movie
                      key={movie.id}
                      title={movie.title}
                      _date={movie.release_date}
                      overview={movie.overview}
                      poster={IMG_PATH + movie.poster_path}
                      backdrop={IMG_PATH + movie.backdrop_path}
                      vote={movie.vote_average}
                      genres={movie.genre_ids}
                    />
                  ))}
                </div>
              </Section>
            )}
          </>
        )}
      </section>
    );
  }
}

export default Home;
