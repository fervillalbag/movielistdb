
import React from 'react';
import { Row, Col } from 'antd';
import useFetch from '../hooks/useFetch';
import SliderMovies from '../components/SliderMovies';
import { URL_API, API } from '../utils/constants';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Home = () => {

   const newMovies = useFetch(
      `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
   );

   const popularMovies = useFetch(
      `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
   );

   const topRatedMovies = useFetch(
      `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
   );

   return (
      <>
         <SliderMovies movies={newMovies} />
         <Row style={{ marginBottom: '4rem' }} >
            <Col span={12}>
               <MovieList title="Películas Populares" movies={popularMovies} />
            </Col>
            <Col span={12}>
               <MovieList title="Películas Mejores Puntuadas" movies={topRatedMovies} />
            </Col>
         </Row>
         <Footer />
      </>
   );
}

export default Home;