import src from '../../images/movie.png';
import { BASE_MOVIES_URL } from '../../constants';
import './MoviesCard.css';

function MoviesCard({
  movieData,
  place,
  isSaved,
  handleMovieDelete,
  handleMovieSave,
}) {
  const { nameRU, duration, image, trailerLink, trailer } = movieData;

  let imageUrl;
  let trailerUrl;
  switch (place) {
    case 'all-movies':
      imageUrl = image ? BASE_MOVIES_URL + image.url : src;
      trailerUrl = trailerLink ? trailerLink : '#';
      break;
    case 'saved-movies':
      imageUrl = image ? image : src;
      trailerUrl = trailer ? trailer : '#';
      break;
    default:
      break;
  }

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    let formattedDuration = '';
    if (hours > 0) {
      formattedDuration += hours + 'ч';
    }
    if (hours > 0 && minutes > 0) {
      formattedDuration += ' ';
    }
    if (minutes > 0) {
      formattedDuration += minutes + 'м';
    }

    return formattedDuration;
  }
  const formattedDuration = formatDuration(duration);

  function movieDelete(params) {
    handleMovieDelete(movieData);
  }

  function movieSave(params) {
    handleMovieSave(movieData);
  }


  return (
    <article className="movies-card">
      <a
        className="movies-card__trailer-link app_button"
        href={trailerUrl}
        target="_blank"
        aria-label="Посмотреть трейлер"
        rel="noreferrer"
      >
      <img 
        className="movies-card__poster app__button" 
        src={imageUrl} 
        alt={nameRU ? nameRU : 'Фильм без названия'}
      >
      </img>
      </a>
      <div className="movies-card__info">
        <h4 className="movies-card__name app__button"> {nameRU ? nameRU : 'Фильм без названия'}</h4>
      </div>
      <p className="movies-card__time">{formattedDuration}</p>

      {place === 'saved-movies' && (
          <button
            className='movies-card__btn movies-card__btn_type_cross'
            onClick={movieDelete}
          />
        )}

        {place === 'all-movies' && (
          <button
            className={`movies-card__btn movies-card__btn_type_${
              isSaved ? 'full-heart' : 'empty-heart'
            }`}
            onClick={isSaved ? movieDelete : movieSave}
          />
        )}
    </article>
  );
}

export default MoviesCard;