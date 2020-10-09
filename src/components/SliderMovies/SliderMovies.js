
import React from 'react';

import { Carousel, Button } from 'antd';
import './SliderMovies.scss';
import { Link } from 'react-router-dom'
import Loading from '../Loading/';


const SliderMovies = (props) => {

   const { movies } = props;

   if (movies.loading || !movies.result) {
      return <Loading />
   }

   const { results } = movies.result;

   return (
      <Carousel autoplay className="slider-movies">
         {
            results.map(movie => (
               <Movie key={movie.id} movie={movie} />
            ))
         }
      </Carousel>
   );
}

export default SliderMovies;

const Movie = (props) => {

   const { movie: { id, backdrop_path, title, overview } } = props;
   const bathdropPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

   return (
      <div
         className="slider-movies__movie"
         style={{
            backgroundImage: `url('${bathdropPath}')`,
         }}
      >
         <div className="slider-movies__movie-info">
            <div>
               <h2>{title}</h2>
               <p>{overview}</p>
               <Link to={`/movie/${id}`}>
                  <Button type="primary">Ver más</Button>
               </Link>
            </div>
         </div>
      </div>
   );
}