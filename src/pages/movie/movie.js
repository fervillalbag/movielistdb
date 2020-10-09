
import React from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import { URL_API, API } from '../../utils/constants';
import Loading from '../../components/Loading';

import './movie.scss';

// Aquí estará los detalles de la película

const Movie = () => {

   const { id } = useParams();
   const movieInfo = useFetch(`
      ${URL_API}/movie/${id}?api_key=${API}&language=es-ES
   `);

   if (movieInfo.loading || !movieInfo.result) {
      return <Loading />
   }

   return (
      <RenderMovie movieInfo={movieInfo.result} />
   );
}

const RenderMovie = (props) => {

   const { movieInfo: { title, backdrop_path } } = props;

   const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

   return (
      <div
         className="movie"
         style={{ backgroundImage: `url('${backdropPath}')` }}
      >
         <Row>
            <Col span={8} offset={3} className="movie__poster">
               Caratula...
            </Col>
            <Col span={10} className="movie__info">
               Movie Info..
            </Col>
         </Row>
      </div>
   );
}

export default Movie;