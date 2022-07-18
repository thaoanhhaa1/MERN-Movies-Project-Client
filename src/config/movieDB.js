const MOVIES_DB = '25430d89c638452d8bbe44f5414bf115';
const moviesEndpoint = 'https://api.themoviedb.org/3/';
const moviesEndpointSearch = `${moviesEndpoint}search/`;
const moviesEndpointMovie = `${moviesEndpoint}movie/`;

const movieDB = {
    movie: `${moviesEndpointSearch}movie?api_key=${MOVIES_DB}`,
    upcoming: `${moviesEndpointMovie}upcoming?api_key=${MOVIES_DB}`,
    image: 'https://image.tmdb.org/t/p/original',
};

export default movieDB;
